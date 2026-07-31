"use client";

import { useState } from "react";
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
        <span>Твоя программа</span>
        <textarea
          className="python-editor"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled || running}
          spellCheck={false}
        />
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
