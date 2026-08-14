"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ResultView from "./ResultView";
import GraphTask from "./GraphTask";
import PythonCodeTask from "./PythonCodeTask";
import { practicalTasks, scaleLabels, surveyQuestions } from "@/lib/questions";
import { calculateScores, chooseProfile } from "@/lib/scoring";
import type {
  Participant,
  ReflectionAnswers,
  ResultPayload,
  TaskState,
} from "@/lib/types";

type Stage = "profile" | "survey" | "tasks" | "reflection" | "result";

const QUESTION_GUARD_MS = 450;

const interests = [
  "программирование",
  "разработка игр",
  "сайты и приложения",
  "искусственный интеллект",
  "информационная безопасность",
  "робототехника",
  "дизайн интерфейсов",
  "компьютерная техника",
];

const defaultParticipant: Participant = {
  nickname: "",
  grade: "9",
  experience: "Никогда не программировал",
  interests: [],
};

const defaultReflection: ReflectionAnswers = {
  practiceInterest: 0,
  understandFailures: 0,
  wantMore: 0,
  calmness: 0,
  errorReaction: 0,
  workStyle: "mixed",
};

function emptyTaskState(): TaskState {
  return {
    attempts: 0,
    hintLevel: 0,
    completed: false,
    correct: false,
    revealed: false,
    score: 0,
  };
}

export default function TestApp() {
  const [stage, setStage] = useState<Stage>("profile");
  const [participant, setParticipant] = useState<Participant>(defaultParticipant);
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<Record<string, number>>({});
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskStates, setTaskStates] = useState<Record<string, TaskState>>({});
  const [reflection, setReflection] = useState<ReflectionAnswers>(defaultReflection);
  const [result, setResult] = useState<ResultPayload | null>(null);
  const [restored, setRestored] = useState(false);
  const [questionLocked, setQuestionLocked] = useState(false);
  const questionLockRef = useRef(false);
  const questionUnlockTimerRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("itpy-proftest-progress-v0.2");
      if (raw) {
        const saved = JSON.parse(raw);
        setStage(saved.stage ?? "profile");
        setParticipant(saved.participant ?? defaultParticipant);
        setSurveyIndex(saved.surveyIndex ?? 0);
        setSurveyAnswers(saved.surveyAnswers ?? {});
        setTaskIndex(saved.taskIndex ?? 0);
        setTaskStates(saved.taskStates ?? {});
        setReflection(saved.reflection ?? defaultReflection);
        setResult(saved.result ?? null);
      }
    } catch {
      localStorage.removeItem("itpy-proftest-progress-v0.2");
    } finally {
      setRestored(true);
    }
  }, []);

  useEffect(() => {
    if (!restored) return;
    localStorage.setItem(
      "itpy-proftest-progress-v0.2",
      JSON.stringify({ stage, participant, surveyIndex, surveyAnswers, taskIndex, taskStates, reflection, result }),
    );
  }, [restored, stage, participant, surveyIndex, surveyAnswers, taskIndex, taskStates, reflection, result]);

  useEffect(() => {
    if (questionUnlockTimerRef.current !== null) {
      window.clearTimeout(questionUnlockTimerRef.current);
      questionUnlockTimerRef.current = null;
    }

    if (stage !== "survey" && stage !== "tasks") {
      questionLockRef.current = false;
      setQuestionLocked(false);
      return;
    }

    questionLockRef.current = true;
    setQuestionLocked(true);
    questionUnlockTimerRef.current = window.setTimeout(() => {
      questionLockRef.current = false;
      setQuestionLocked(false);
      questionUnlockTimerRef.current = null;
    }, QUESTION_GUARD_MS);

    return () => {
      if (questionUnlockTimerRef.current !== null) {
        window.clearTimeout(questionUnlockTimerRef.current);
        questionUnlockTimerRef.current = null;
      }
    };
  }, [stage, surveyIndex, taskIndex]);

  const progress = useMemo(() => {
    if (stage === "profile") return 2;
    if (stage === "survey") return Math.round(5 + ((surveyIndex + 1) / surveyQuestions.length) * 40);
    if (stage === "tasks") return Math.round(45 + ((taskIndex + 1) / practicalTasks.length) * 40);
    if (stage === "reflection") return 90;
    return 100;
  }, [stage, surveyIndex, taskIndex]);

  function toggleInterest(value: string) {
    setParticipant((current) => ({
      ...current,
      interests: current.interests.includes(value)
        ? current.interests.filter((item) => item !== value)
        : [...current.interests, value],
    }));
  }

  function beginQuestionTransition() {
    if (questionLockRef.current) return false;
    questionLockRef.current = true;
    setQuestionLocked(true);
    return true;
  }

  function startSurvey() {
    if (!beginQuestionTransition()) return;
    setStage("survey");
  }

  function answerSurvey(value: number) {
    if (!beginQuestionTransition()) return;
    const question = surveyQuestions[surveyIndex];
    setSurveyAnswers((current) => ({ ...current, [question.id]: value }));
    window.setTimeout(() => {
      if (surveyIndex < surveyQuestions.length - 1) setSurveyIndex((index) => index + 1);
      else setStage("tasks");
    }, 180);
  }

  function previousSurveyQuestion() {
    if (!beginQuestionTransition()) return;
    if (surveyIndex > 0) setSurveyIndex((index) => index - 1);
    else setStage("profile");
  }

  function updateTaskState(taskId: string, patch: Partial<TaskState>) {
    setTaskStates((current) => ({
      ...current,
      [taskId]: { ...(current[taskId] ?? emptyTaskState()), ...patch },
    }));
  }

  function setTaskAnswer(answer: string) {
    if (questionLockRef.current) return;
    const task = practicalTasks[taskIndex];
    const state = taskStates[task.id] ?? emptyTaskState();
    if (state.completed) return;
    updateTaskState(task.id, { answer });
  }

  function normalizeAnswer(value: string, inputMode: "number" | "text" = "text") {
    const trimmed = value.trim();
    if (inputMode === "number") {
      const number = Number(trimmed.replace(",", "."));
      return Number.isFinite(number) ? String(number) : trimmed;
    }
    return trimmed.toLocaleLowerCase("ru-RU").replace(/\s+/g, " ");
  }

  function submitTask() {
    if (questionLockRef.current) return;
    const task = practicalTasks[taskIndex];
    const state = taskStates[task.id] ?? emptyTaskState();
    if (task.answerType === "code" || !state.answer?.trim()) return;

    const correct = task.answerType === "choice"
      ? state.answer === task.correctOptionId
      : [task.correctAnswer, ...(task.acceptedAnswers ?? [])]
          .map((answer) => normalizeAnswer(answer, task.inputMode))
          .includes(normalizeAnswer(state.answer, task.inputMode));
    const attemptsBefore = state.attempts;
    const penalty = Math.max(state.hintLevel, attemptsBefore > 0 ? 1 : 0);
    const score = correct ? Math.max(0, task.maxScore - penalty) : 0;

    if (correct) {
      updateTaskState(task.id, {
        attempts: attemptsBefore + 1,
        completed: true,
        correct: true,
        score,
      });
      return;
    }

    updateTaskState(task.id, {
      attempts: attemptsBefore + 1,
      answer: "",
      correct: false,
    });
  }

  function submitCodeResult(passed: boolean) {
    if (questionLockRef.current) return;
    const task = practicalTasks[taskIndex];
    if (task.answerType !== "code") return;
    const state = taskStates[task.id] ?? emptyTaskState();
    const attempts = state.attempts + 1;
    if (!passed) {
      updateTaskState(task.id, { attempts, correct: false });
      return;
    }
    const penalty = Math.max(state.hintLevel, state.attempts > 0 ? 1 : 0);
    updateTaskState(task.id, {
      attempts,
      completed: true,
      correct: true,
      score: Math.max(0, task.maxScore - penalty),
    });
  }

  function revealHint() {
    if (questionLockRef.current) return;
    const task = practicalTasks[taskIndex];
    const state = taskStates[task.id] ?? emptyTaskState();
    if (!task.hints || state.hintLevel >= task.hints.length) return;
    updateTaskState(task.id, {
      hintLevel: state.hintLevel + 1,
      ...(task.answerType === "code" ? {} : { answer: "" }),
    });
  }

  function revealExplanation() {
    if (questionLockRef.current) return;
    const task = practicalTasks[taskIndex];
    const state = taskStates[task.id] ?? emptyTaskState();
    updateTaskState(task.id, {
      completed: true,
      correct: false,
      revealed: true,
      score: 0,
      answer: task.answerType === "choice"
        ? task.correctOptionId
        : task.answerType === "input"
          ? task.correctAnswer
          : task.solutionCode ?? state.answer ?? task.starterCode,
    });
  }

  function nextTask() {
    if (!beginQuestionTransition()) return;
    if (taskIndex < practicalTasks.length - 1) setTaskIndex((index) => index + 1);
    else setStage("reflection");
  }

  function previousTask() {
    if (!beginQuestionTransition()) return;
    if (taskIndex > 0) {
      setTaskIndex((index) => index - 1);
      return;
    }
    setSurveyIndex(surveyQuestions.length - 1);
    setStage("survey");
  }

  function returnToLastTask() {
    if (!beginQuestionTransition()) return;
    setTaskIndex(practicalTasks.length - 1);
    setStage("tasks");
  }

  const reflectionComplete =
    reflection.practiceInterest > 0 &&
    reflection.understandFailures > 0 &&
    reflection.wantMore > 0 &&
    reflection.calmness > 0 &&
    reflection.errorReaction > 0;

  function finishTest() {
    if (!reflectionComplete) return;
    const scores = calculateScores(surveyAnswers, taskStates, reflection);
    const profileId = chooseProfile(scores, reflection, participant.grade);
    const payload: ResultPayload = {
      version: "0.2",
      completedAt: new Date().toISOString(),
      participant,
      surveyAnswers,
      taskStates,
      reflection,
      scores,
      profileId,
    };

    setResult(payload);
    setStage("result");
  }

  function resetTest() {
    if (!window.confirm("Начать заново? Текущий прогресс будет удалён.")) return;
    localStorage.removeItem("itpy-proftest-progress-v0.2");
    setStage("profile");
    setParticipant(defaultParticipant);
    setSurveyIndex(0);
    setSurveyAnswers({});
    setTaskIndex(0);
    setTaskStates({});
    setReflection(defaultReflection);
    setResult(null);
  }

  if (!restored) return <main className="site-shell test-shell"><div className="loading-card">Загружаем тест…</div></main>;
  if (stage === "result" && result) return <ResultView payload={result} />;

  return (
    <main className="site-shell test-shell">
      <header className="topbar">
        <Link className="brand" href="/"><span>it</span>py <small>профориентация</small></Link>
        <button className="text-button" onClick={resetTest}>Начать заново</button>
      </header>

      <div className="progress-wrap">
        <div className="progress-head"><span>Прогресс</span><b>{progress}%</b></div>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
      </div>

      {stage === "profile" && (
        <section className="question-card profile-card">
          <div className="eyebrow">Перед началом</div>
          <h1>Расскажи немного о себе</h1>
          <p className="question-lead">Имя можно не указывать. Телефон, email и школу мы не спрашиваем.</p>

          <label className="field-label">
            Имя или псевдоним <small>необязательно</small>
            <input
              value={participant.nickname}
              onChange={(event) => setParticipant({ ...participant, nickname: event.target.value.slice(0, 40) })}
              placeholder="Например, Саша"
            />
          </label>

          <div className="field-grid">
            <label className="field-label">Класс
              <select value={participant.grade} onChange={(event) => setParticipant({ ...participant, grade: event.target.value })}>
                <option value="8">8 класс</option>
                <option value="9">9 класс</option>
                <option value="10">10 класс</option>
                <option value="11">11 класс</option>
                <option value="other">Другой</option>
              </select>
            </label>
            <label className="field-label">Опыт программирования
              <select value={participant.experience} onChange={(event) => setParticipant({ ...participant, experience: event.target.value })}>
                <option>Никогда не программировал</option>
                <option>Видел программирование на уроках</option>
                <option>Пробовал Scratch или Кумир</option>
                <option>Писал простые программы на Python</option>
                <option>Делал собственный небольшой проект</option>
              </select>
            </label>
          </div>

          <fieldset className="interest-fieldset">
            <legend>Что внутри IT кажется интересным? <small>можно несколько</small></legend>
            <div className="chip-grid">
              {interests.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`chip ${participant.interests.includes(item) ? "selected" : ""}`}
                  onClick={() => toggleInterest(item)}
                >{item}</button>
              ))}
            </div>
          </fieldset>

          <button className="button button-primary" onClick={startSurvey}>Перейти к анкете</button>
        </section>
      )}

      {stage === "survey" && (() => {
        const question = surveyQuestions[surveyIndex];
        return (
          <section className="question-card">
            <div className="question-navigation">
              <button className="text-button question-back" onClick={previousSurveyQuestion} disabled={questionLocked}>← Назад</button>
              <div className="question-meta"><span>Анкета</span><b>{surveyIndex + 1} / {surveyQuestions.length}</b></div>
            </div>
            <h1>{question.text}</h1>
            <p className="question-lead">Выбери ответ, который лучше описывает тебя в обычной ситуации.</p>
            <div className="scale-options">
              {scaleLabels.map((label, index) => {
                const value = index + 1;
                return (
                  <button
                    key={label}
                    className={`scale-button ${surveyAnswers[question.id] === value ? "selected" : ""}`}
                    onClick={() => answerSurvey(value)}
                    disabled={questionLocked}
                  >
                    <span>{value}</span><b>{label}</b>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })()}

      {stage === "tasks" && (() => {
        const task = practicalTasks[taskIndex];
        const state = taskStates[task.id] ?? emptyTaskState();
        const wrong = state.attempts > 0 && !state.completed && !state.correct;
        return (
          <section className="question-card task-card">
            <div className="question-navigation">
              <button className="text-button question-back" onClick={previousTask} disabled={questionLocked}>← Назад</button>
              <div className="question-meta"><span>Практика</span><b>{taskIndex + 1} / {practicalTasks.length}</b></div>
            </div>
            <div className="task-badge">Задание {taskIndex + 1}</div>
            <h1>{task.title}</h1>
            <p className="task-prompt">{task.prompt}</p>

            {task.details && (task.id === "task13" ? (
              <details className="task-details">
                <summary>Подсказки к программе</summary>
                <div className="data-list">
                  {task.details.map((detail) => <div key={detail}>{detail}</div>)}
                </div>
              </details>
            ) : (
              <div className="data-list">
                {task.details.map((detail) => <div key={detail}>{detail}</div>)}
              </div>
            ))}

            {task.graph && <GraphTask graph={task.graph} />}

            {task.codeBlock && (
              <pre className="code-block"><code>{task.codeBlock}</code></pre>
            )}
            {task.answerType === "choice" ? (
              <div className="task-options">
                {task.options.map((option) => (
                  <button
                    key={option.id}
                    className={`task-option ${state.answer === option.id ? "selected" : ""}`}
                    onClick={() => setTaskAnswer(option.id)}
                    disabled={state.completed || questionLocked}
                  >{option.label}</button>
                ))}
              </div>
            ) : task.answerType === "input" ? (
              <label className="answer-field">
                <span>Твой ответ</span>
                <input
                  className="answer-input"
                  type="text"
                  inputMode={task.inputMode === "number" ? "numeric" : "text"}
                  value={state.answer ?? ""}
                  onChange={(event) => setTaskAnswer(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && state.answer?.trim()) submitTask();
                  }}
                  placeholder={task.placeholder ?? "Введите ответ"}
                  disabled={state.completed || questionLocked}
                  autoComplete="off"
                />
              </label>
            ) : (
              <PythonCodeTask
                task={task}
                value={state.answer ?? task.starterCode}
                disabled={state.completed || questionLocked}
                onChange={setTaskAnswer}
                onChecked={submitCodeResult}
              />
            )}

            {wrong && <div className="feedback feedback-wrong"><b>Ответ пока не совпал.</b> Попробуй ещё раз или воспользуйся подсказкой.</div>}

            {state.hintLevel > 0 && task.hints && (
              <div className="feedback feedback-hint">
                <b>Подсказка {state.hintLevel}</b>
                {task.hints[state.hintLevel - 1]}
              </div>
            )}

            {state.completed && (
              <div className={`feedback ${state.correct ? "feedback-correct" : "feedback-explanation"}`}>
                <b>{state.correct ? "Верно." : "Разбор"}</b>
                {task.explanation}
                {state.revealed && task.solutionCode && (
                  <>
                    <span>Один из вариантов решения:</span>
                    <pre className="code-block explanation-code"><code>{task.solutionCode}</code></pre>
                  </>
                )}
                <small>Баллы за задание: {state.score} из {task.maxScore}</small>
              </div>
            )}

            <div className="task-actions">
              {!state.completed && task.answerType !== "code" && (
                <button className="button button-primary" disabled={questionLocked || !state.answer?.trim()} onClick={submitTask}>Проверить ответ</button>
              )}
              {!state.completed && wrong && task.hints && state.hintLevel < task.hints.length && (
                <button className="button button-secondary" onClick={revealHint} disabled={questionLocked}>Открыть подсказку</button>
              )}
              {!state.completed && (
                <button className="text-button" onClick={revealExplanation} disabled={questionLocked}>Показать полный разбор</button>
              )}
              {state.completed && (
                <button className="button button-primary" onClick={nextTask} disabled={questionLocked}>
                  {taskIndex === practicalTasks.length - 1 ? "Перейти к итоговым вопросам" : "Следующее задание"}
                </button>
              )}
            </div>
          </section>
        );
      })()}

      {stage === "reflection" && (
        <section className="question-card reflection-card">
          <div className="question-navigation">
            <button className="text-button question-back" onClick={returnToLastTask}>← К заданию</button>
            <div className="question-meta"><span>Последний блок</span></div>
          </div>
          <h1>Как прошла практическая часть?</h1>
          <p className="question-lead">Эти ответы не оцениваются как правильные или неправильные.</p>

          <ReflectionScale label="Насколько тебе было интересно выполнять задания?" value={reflection.practiceInterest} onChange={(value) => setReflection({ ...reflection, practiceInterest: value })} />
          <ReflectionScale label="Хотелось ли понять задания, которые не получились сразу?" value={reflection.understandFailures} onChange={(value) => setReflection({ ...reflection, understandFailures: value })} />
          <ReflectionScale label="Хотелось бы попробовать ещё похожие задачи или написать программу?" value={reflection.wantMore} onChange={(value) => setReflection({ ...reflection, wantMore: value })} />
          <ReflectionScale label="Насколько спокойно ты чувствовал себя во время заданий?" value={reflection.calmness} onChange={(value) => setReflection({ ...reflection, calmness: value })} />
          <ReflectionScale label="После ошибки хотелось попробовать снова?" value={reflection.errorReaction} onChange={(value) => setReflection({ ...reflection, errorReaction: value })} />

          <fieldset className="work-style">
            <legend>Какой вариант лучше всего описывает, как ты выполнял задания?</legend>
            {[
              ["check", "Старался решить каждое задание самостоятельно и проверял свои ответы"],
              ["hints", "Сначала решал сам, а если не получалось — обращался к подсказкам"],
              ["selective", "Решал знакомые задания, а незнакомые чаще пропускал и смотрел разбор"],
              ["mixed", "Действовал по-разному: где-то решал сам, где-то использовал подсказку или разбор"],
              ["guess", "Часто выбирал ответ скорее наугад, чем после полноценного решения"],
            ].map(([value, label]) => (
              <label key={value} className="radio-card">
                <input
                  type="radio"
                  name="workStyle"
                  value={value}
                  checked={reflection.workStyle === value}
                  onChange={() => setReflection({ ...reflection, workStyle: value as ReflectionAnswers["workStyle"] })}
                />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>

          <div className="task-actions">
            <button className="button button-primary" disabled={!reflectionComplete} onClick={finishTest}>
              Получить результат
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

function ReflectionScale({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <div className="reflection-question">
      <h2>{label}</h2>
      <div className="reflection-numbers">
        {[1, 2, 3, 4, 5].map((number) => (
          <button
            type="button"
            key={number}
            className={value === number ? "selected" : ""}
            onClick={() => onChange(number)}
          >{number}</button>
        ))}
      </div>
      <div className="reflection-caption"><span>совсем нет</span><span>точно да</span></div>
    </div>
  );
}
