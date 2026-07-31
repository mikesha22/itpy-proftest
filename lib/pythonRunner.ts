import type { PythonTestCase } from "./types";

export type PythonCaseResult = {
  name: string;
  passed: boolean;
  output?: string;
  error?: string;
  hidden?: boolean;
};

type WorkerReply = { ok: boolean; results?: PythonCaseResult[]; error?: string };

export function runPythonTests(code: string, tests: PythonTestCase[], timeoutMs = 20000) {
  return new Promise<PythonCaseResult[]>((resolve, reject) => {
    const worker = new Worker("/python-worker.js");
    const timeout = window.setTimeout(() => {
      worker.terminate();
      reject(new Error("Программа выполнялась слишком долго. Проверь циклы и условия."));
    }, timeoutMs);

    worker.onmessage = (event: MessageEvent<WorkerReply>) => {
      window.clearTimeout(timeout);
      worker.terminate();
      if (!event.data.ok) reject(new Error(event.data.error ?? "Не удалось запустить Python."));
      else resolve(event.data.results ?? []);
    };
    worker.onerror = () => {
      window.clearTimeout(timeout);
      worker.terminate();
      reject(new Error("Не удалось загрузить среду Python. Проверь подключение к интернету и повтори запуск."));
    };
    worker.postMessage({ code, tests });
  });
}
