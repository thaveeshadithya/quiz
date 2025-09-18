import type { Question } from './types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    group: "laws",
    question: "Which law states that the current through a conductor between two points is directly proportional to the voltage across the two points?",
    answers: [
      "Faraday's Law",
      "Ohm's Law",
      "Kirchhoff's Law",
      "Lenz's Law",
      "Coulomb's Law"
    ],
    correctAnswer: 1
  },
];
