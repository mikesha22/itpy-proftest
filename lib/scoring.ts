import { practicalTasks, surveyQuestions } from "./questions";
import type { ProfileId, ReflectionAnswers, Scores, TaskState } from "./types";

const round = (value: number) => Math.round(Math.max(0, Math.min(100, value)));

function normalizedSurvey(
  answers: Record<string, number>,
  scale: "interest" | "study" | "resilience" | "attention",
) {
  const questions = surveyQuestions.filter((question) => question.scale === scale);
  const values = questions.map((question) => {
    const raw = answers[question.id] ?? 3;
    return question.reverse ? 6 - raw : raw;
  });
  const sum = values.reduce((acc, value) => acc + value, 0);
  const min = questions.length;
  const max = questions.length * 5;
  return round(((sum - min) / (max - min)) * 100);
}

function taskScore(states: Record<string, TaskState>, predicate: (taskId: string) => boolean) {
  let earned = 0;
  let maximum = 0;
  practicalTasks.forEach((task) => {
    if (!predicate(task.id)) return;
    earned += states[task.id]?.score ?? 0;
    if (!task.bonus) maximum += task.maxScore;
  });
  return maximum === 0 ? 0 : round((earned / maximum) * 100);
}

function behaviorScore(states: Record<string, TaskState>, reflection: ReflectionAnswers) {
  const task = states.task10;
  if (!task || !task.completed || (task.correct && task.hintLevel === 0)) return null;
  if (task.correct && task.hintLevel > 0) {
    return reflection.understandFailures >= 4 || reflection.wantMore >= 4 ? 100 : 80;
  }
  if (task.revealed) {
    return reflection.understandFailures >= 4 ? 60 : 40;
  }
  return 20;
}

export function calculateScores(
  surveyAnswers: Record<string, number>,
  taskStates: Record<string, TaskState>,
  reflection: ReflectionAnswers,
): Scores {
  const interestSurvey = normalizedSurvey(surveyAnswers, "interest");
  const study = normalizedSurvey(surveyAnswers, "study");
  const resilienceSurvey = normalizedSurvey(surveyAnswers, "resilience");
  const attentionSurvey = normalizedSurvey(surveyAnswers, "attention");

  const tasksById = new Map(practicalTasks.map((task) => [task.id, task]));
  const logic = taskScore(taskStates, (id) => tasksById.get(id)?.logic === true);
  const attentionPractical = taskScore(taskStates, (id) => tasksById.get(id)?.attention === true);
  const code = taskScore(taskStates, (id) => tasksById.get(id)?.code === true);

  const practiceInterest = round(
    ((reflection.practiceInterest + reflection.understandFailures + reflection.wantMore - 3) / 12) * 100,
  );
  const comfort = round(((reflection.calmness + reflection.errorReaction - 2) / 8) * 100);
  const interest = round(0.7 * interestSurvey + 0.3 * practiceInterest);
  const attention = round(0.4 * attentionSurvey + 0.6 * attentionPractical);

  const observedBehavior = behaviorScore(taskStates, reflection);
  const resilience = observedBehavior === null
    ? resilienceSurvey
    : round(0.7 * resilienceSurvey + 0.3 * observedBehavior);

  const ogeIndex = round(
    0.2 * interest + 0.25 * logic + 0.2 * attention + 0.15 * resilience + 0.2 * study,
  );
  const egeIndex = round(
    0.2 * interest + 0.2 * logic + 0.15 * code + 0.15 * attention + 0.1 * resilience + 0.1 * study + 0.1 * comfort,
  );

  return {
    interestSurvey,
    interest,
    study,
    resilienceSurvey,
    resilience,
    attentionSurvey,
    attentionPractical,
    attention,
    logic,
    comfort,
    code,
    ogeIndex,
    egeIndex,
  };
}

export function chooseProfile(scores: Scores, reflection: ReflectionAnswers): ProfileId {
  const { interest, logic, resilience, study, ogeIndex } = scores;

  if (reflection.workStyle === "guess") return "insufficient";
  if (logic >= 65 && interest < 45) return "skills_low_interest";
  if (interest >= 65 && resilience < 45) return "fear_of_errors";
  if (interest >= 70 && study >= 60 && logic < 60) return "potential";
  if (ogeIndex >= 70 && interest >= 55 && study >= 50) return "suitable";
  if (ogeIndex >= 40 && study >= 45) return "systematic";
  return "compare";
}

export function levelLabel(value: number) {
  if (value >= 80) return "выраженная сильная сторона";
  if (value >= 60) return "хороший базовый уровень";
  if (value >= 40) return "показатель зависит от ситуации";
  return "навык пока формируется";
}

export function ogeRecommendation(scores: Scores) {
  if (scores.ogeIndex >= 70 && scores.interest >= 55 && scores.study >= 50) {
    return "ОГЭ по информатике выглядит обоснованным выбором.";
  }
  if (scores.ogeIndex >= 55) {
    return "ОГЭ можно рассматривать, но перед окончательным выбором стоит пройти несколько занятий и попробовать задания экзамена.";
  }
  if (scores.ogeIndex >= 40) {
    return "Выбор ОГЭ возможен при ранней и последовательной подготовке.";
  }
  return "Сейчас стоит сравнить информатику с другими предметами и получить дополнительный практический опыт.";
}

export function egeRecommendation(scores: Scores) {
  if (scores.egeIndex >= 70 && scores.interest >= 60 && scores.logic >= 55) {
    return "В будущем имеет смысл рассматривать ЕГЭ по информатике и познакомиться с программированием глубже.";
  }
  if (scores.egeIndex >= 55) {
    return "Возможность выбора ЕГЭ стоит сохранить. Следующий шаг — попробовать Python и более продолжительное обучение.";
  }
  if (scores.egeIndex >= 40) {
    return "Решение о ЕГЭ лучше принимать после опыта обучения в 9–10 классе.";
  }
  return "Сейчас информатика не выглядит очевидным профильным направлением, но результат не является окончательным.";
}
