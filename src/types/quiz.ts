export interface Question {
    id: number;
    question: string;
    sinhalaQuestion: string;
    answers: string[];
    correctAnswer: number;
    group: string; // new property to indicate the question group
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
