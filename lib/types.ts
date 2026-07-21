export type SurveyScale = "interest" | "study" | "resilience" | "attention";

export type SurveyQuestion = {
  id: string;
  scale: SurveyScale;
  reverse?: boolean;
  text: string;
};

export type TaskOption = {
  id: string;
  label: string;
};

type PracticalTaskBase = {
  id: string;
  title: string;
  prompt: string;
  details?: string[];
  codeBlock?: string;
  maxScore: 1 | 2 | 3;
  hints?: string[];
  explanation: string;
  logic?: boolean;
  attention?: boolean;
  code?: boolean;
};

export type ChoicePracticalTask = PracticalTaskBase & {
  answerType: "choice";
  options: TaskOption[];
  correctOptionId: string;
};

export type InputPracticalTask = PracticalTaskBase & {
  answerType: "input";
  correctAnswer: string;
  acceptedAnswers?: string[];
  inputMode?: "number" | "text";
  placeholder?: string;
};

export type PracticalTask = ChoicePracticalTask | InputPracticalTask;

export type TaskState = {
  answer?: string;
  attempts: number;
  hintLevel: number;
  completed: boolean;
  correct: boolean;
  revealed: boolean;
  score: number;
};

export type ReflectionAnswers = {
  practiceInterest: number;
  understandFailures: number;
  wantMore: number;
  calmness: number;
  errorReaction: number;
  workStyle: "check" | "mixed" | "guess";
};

export type Participant = {
  nickname: string;
  grade: string;
  experience: string;
  interests: string[];
};

export type Scores = {
  interestSurvey: number;
  interest: number;
  study: number;
  resilienceSurvey: number;
  resilience: number;
  attentionSurvey: number;
  attentionPractical: number;
  attention: number;
  logic: number;
  comfort: number;
  code: number;
  ogeIndex: number;
  egeIndex: number;
};

export type ProfileId =
  | "suitable"
  | "potential"
  | "skills_low_interest"
  | "fear_of_errors"
  | "systematic"
  | "compare"
  | "insufficient";

export type ResultPayload = {
  version: "0.1" | "0.2";
  completedAt: string;
  participant: Participant;
  surveyAnswers: Record<string, number>;
  taskStates: Record<string, TaskState>;
  reflection: ReflectionAnswers;
  scores: Scores;
  profileId: ProfileId;
};
