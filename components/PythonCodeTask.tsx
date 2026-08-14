"use client";

import { useRef, useState } from "react";
import { runPythonTests, type PythonCaseResult } from "@/lib/pythonRunner";
import type { CodePracticalTask } from "@/lib/types";

export default function PythonCodeTask({
  task,
  value,
  disabled,
  onChange,
  onChecked,
}: {
  task: CodePracticalTask;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onChecked: (passed: boolean) => void;
}) {
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<PythonCaseResult[]>([]);
  const [error, setError] = useState("");
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const lineNumbers = value.split("\n");

  function insertIndent(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Tab") return;
    event.preventDefault();
    const editor = event.currentTarget;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const indent = "    ";
    onChange(`${value.slice(0, start)}${indent}${value.slice(end)}`);
    window.requestAnimationFrame(() => {
      editor.selectionStart = start + indent.length;
      editor.selectionEnd = start + indent.length;
    });
  }

  async function run() {
    setRunning(true);
    setError("");
    setResults([]);
    try {
      const next = await runPythonTests(value, task.tests);
      setResults(next);
      onChecked(next.length === task.tests.length && next.every((item) => item.passed));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Не удалось запустить программу.");
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="python-task">
      <label className="answer-field">
        <span>Напиши программу в редакторе ниже</span>
        <div className="python-editor-shell">
          <div className="python-editor-bar" aria-hidden="true">
            <span className="python-editor-language">PY</span>
            <span className="python-editor-file">main.py</span>
            <span className="python-editor-hint">Пиши код здесь ↓</span>
          </div>
          <div className="python-editor-body">
            <div className="python-line-numbers" ref={lineNumbersRef} aria-hidden="true">
              {lineNumbers.map((_, index) => <span key={index}>{index + 1}</span>)}
            </div>
            <textarea
              className="python-editor"
              value={value}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={insertIndent}
              onScroll={(event) => {
                if (lineNumbersRef.current) lineNumbersRef.current.scrollTop = event.currentTarget.scrollTop;
              }}
              aria-label="Редактор программы Python"
              disabled={disabled || running}
              spellCheck={false}
              wrap="off"
            />
          </div>
        </div>
      </label>
      <button className="button button-primary" type="button" onClick={run} disabled={disabled || running || !value.trim()}>
        {running ? "Запускаем Python…" : "Запустить и проверить"}
      </button>
      {error && <div className="feedback feedback-wrong"><b>Ошибка запуска</b>{error}</div>}
      {results.length > 0 && (
        <div className="test-results">
          {results.map((result, index) => (
            <div className={result.passed ? "test-pass" : "test-fail"} key={`${result.name}-${index}`}>
              <b>{result.passed ? "✓" : "×"} {result.hidden ? `Скрытый тест ${index}` : result.name}</b>
              {!result.hidden && !result.passed && <span>{result.error ?? `Получено: ${result.output || "пустой вывод"}`}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
