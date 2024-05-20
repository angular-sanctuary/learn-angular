// Quiz "quelle est la bonne version" model
export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
  hint?: string;
  answerExplanation: string;
}

export interface Option {
  id: number;
  title: string;
  isCorrect: boolean;
}
