export interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: number;
}

export interface QuizState {
    currentQuestion: number;
    score: number;
    answers: number[];
    timeLeft: number;
    isActive: boolean;
    isComplete: boolean;
}

export interface QuizResult {
    questionNumber: number;
    isCorrect: boolean;
    timeTaken: number;
}
