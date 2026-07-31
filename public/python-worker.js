/* global importScripts, loadPyodide */
let pyodidePromise;

function getPyodide() {
  if (!pyodidePromise) {
    importScripts("https://cdn.jsdelivr.net/pyodide/v0.28.2/full/pyodide.js");
    pyodidePromise = loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.2/full/" });
  }
  return pyodidePromise;
}

function validate(code) {
  const forbidden = /\b(import|from|open|exec|eval|compile|input|__import__|globals|locals|help|breakpoint)\b/;
  if (forbidden.test(code)) throw new Error("В этой задаче нельзя использовать import, input, open, eval или exec.");
  if (code.length > 3000) throw new Error("Код получился слишком длинным для этой задачи.");
}

self.onmessage = async (event) => {
  try {
    const { code, tests } = event.data;
    validate(code);
    const pyodide = await getPyodide();
    const results = [];

    for (const test of tests) {
      pyodide.globals.set("__first_json", JSON.stringify(test.first));
      pyodide.globals.set("__second_json", JSON.stringify(test.second));
      pyodide.globals.set("__student_code", code);
      const runner = `
import json, io, contextlib
first = json.loads(__first_json)
second = json.loads(__second_json)
_buffer = io.StringIO()
with contextlib.redirect_stdout(_buffer):
    exec(__student_code, {"first": first, "second": second})
_buffer.getvalue().strip()
`;
      try {
        const output = String(await pyodide.runPythonAsync(runner)).trim();
        results.push({ name: test.name, hidden: test.hidden, passed: output === String(test.expected), output });
      } catch (error) {
        results.push({ name: test.name, hidden: test.hidden, passed: false, error: String(error) });
        break;
      }
    }
    self.postMessage({ ok: true, results });
  } catch (error) {
    self.postMessage({ ok: false, error: String(error instanceof Error ? error.message : error) });
  }
};
