import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
    QuizCard,
    QuestionText,
    AnswerGrid,
    AnswerButton,
    ProgressBar,
    Progress,
    ResultCard,
    Button
} from './StyledComponents';
import Timer from './Timer';
import type { Question } from '../types/quiz';
import { AnimatePresence, motion } from 'framer-motion';

interface QuizProps {
    questions: Question[];
}


const getRandomQuestions = (allQuestions: Question[], count: number) => {
    // Group questions by their 'group' property
    const groups: { [key: string]: Question[] } = {};
    allQuestions.forEach(q => {
        if (!groups[q.group]) groups[q.group] = [];
        groups[q.group].push(q);
    });
    // Select one random question from each group
    const selected: Question[] = [];
    Object.keys(groups).forEach(groupName => {
        const groupQuestions = groups[groupName];
        if (groupQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * groupQuestions.length);
            selected.push(groupQuestions[randomIndex]);
        }
    });
    return selected.slice(0, count);
};

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    const [started, setStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState<{answer: number|null, correct: boolean}[]>([]);
    const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
    const [transitioning, setTransitioning] = useState(false);

    // Timer pulse ref
    const timerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!started) return;
        if (!showResult && !isAnswered) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        handleTimeout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [currentQuestionIndex, isAnswered, showResult, started]);

    // Timer pulse animation when <3 seconds
    useEffect(() => {
        if (timerRef.current && timeLeft <= 3 && timeLeft > 0 && started && !showResult) {
            timerRef.current.animate([
                { transform: 'scale(1)', boxShadow: '0 0 0 #ef4444' },
                { transform: 'scale(1.08)', boxShadow: '0 0 16px #ef4444' },
                { transform: 'scale(1)', boxShadow: '0 0 0 #ef4444' }
            ], {
                duration: 350,
                easing: 'ease-in-out'
            });
        }
    }, [timeLeft, started, showResult]);

    const handleTimeout = () => {
        if (!isAnswered) {
            setIsAnswered(true);
            setUserAnswers((prev) => [...prev, { answer: null, correct: false }]);
            setTimeout(() => {
                setTransitioning(true);
                setTimeout(nextQuestion, 400);
            }, 1000);
        }
    };

    const handleAnswer = (answerIndex: number) => {
        if (isAnswered) return;
        setIsAnswered(true);
        const correct = answerIndex === quizQuestions[currentQuestionIndex].correctAnswer;
        setUserAnswers((prev) => [...prev, { answer: answerIndex, correct }]);
        if (correct) setScore((s) => s + 1);
        setTimeout(() => {
            setTransitioning(true);
            setTimeout(nextQuestion, 400);
        }, 500);
    };

    const nextQuestion = () => {
        setTransitioning(false);
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex((i) => i + 1);
            setIsAnswered(false);
            setTimeLeft(15);
        } else {
            setShowResult(true);
        }
    };

    // Confetti on quiz completion
    useEffect(() => {
        if (showResult) {
            confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#1519eeff', '#a855f7', '#10b981', '#f59e0b', '#ef4444']
            });
        }
    }, [showResult]);

    const restartQuiz = () => {
        setStarted(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(15);
        setIsAnswered(false);
        setShowResult(false);
        setUserAnswers([]);
        setQuizQuestions([]);
    };

    const startQuiz = () => {
        setQuizQuestions(getRandomQuestions(questions, 5));
        setStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(15);
        setIsAnswered(false);
        setShowResult(false);
        setUserAnswers([]);
        setTransitioning(false);
    };

    if (!started) {
        return (
            <QuizCard
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{ minHeight: 420, justifyContent: 'center', alignItems: 'center', textAlign: 'center', boxShadow: '0 8px 40px rgba(99,102,241,0.15)' }}
            >
                                <motion.h1
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '7.6rem',
                                        fontWeight: 800,
                                        letterSpacing: '-1px',
                                        width: '100%',
                                        marginBottom: '1.2rem',
                                        background: 'linear-gradient(90deg, #43e0e0, #5f4bb6, #d72660, #43e0e0)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        filter: 'drop-shadow(0 2px 16px #1ecbe188) drop-shadow(0 1px 4px #1e1a3c88)',
                                    }}
                                    animate={{
                                        backgroundPosition: [
                                            '0% 50%',
                                            '100% 50%',
                                            '0% 50%'
                                        ],
                                        y: [0, -12, 0, 12, 0],
                                    }}
                                    transition={{
                                        backgroundPosition: {
                                            duration: 3.5,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'linear',
                                        },
                                        y: {
                                            duration: 3.5,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'easeInOut',
                                        },
                                    }}
                                >
                                    MindSpark
                                </motion.h1>
                <div style={{
                    fontSize: '1.7rem',
                    color: '#444',
                    marginBottom: '2.2rem',
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: 1.5,
                    maxWidth: 420,
                    margin: '0 auto 2.2rem auto',
                }}>
                  <div>You have <b>5 questions</b>.<br />Each question has <b>15 seconds</b>.</div>
                </div>
                <div style={{ width: '100%' }}>
                  <Button
                      onClick={startQuiz}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ fontSize: '1.5rem', padding: '1.2rem 3rem', marginTop: 24, borderRadius: 32, boxShadow: '0 4px 24px #a855f766' }}
                  >
                      Start Quiz
                  </Button>
                </div>
            </QuizCard>
        );
    }

    if (showResult) {
        return (
            <QuizCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                <ResultCard>
                    <h2>Quiz Complete!</h2>
                    <div className="score">
                        {score} / {quizQuestions.length}
                    </div>
                    <p>
                        You got {Math.round((score / quizQuestions.length) * 100)}% correct
                    </p>
                    <div style={{ margin: '2rem 0', width: '100%' }}>
                        {quizQuestions.map((_, i) => {
                            const user = userAnswers[i];
                            return (
                                <div key={i} style={{
                                    background: user.correct ? '#d1fae5' : '#fee2e2',
                                    borderRadius: 12,
                                    padding: '1rem',
                                    marginBottom: 12,
                                    border: user.correct ? '2px solid #10b981' : '2px solid #ef4444',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 600,
                                    fontSize: '1.2rem',
                                    color: user.correct ? '#10b981' : '#ef4444',
                                    justifyContent: 'center',
                                    letterSpacing: '1px',
                                    boxShadow: user.correct ? '0 2px 12px #10b98133' : '0 2px 12px #ef444433',
                                    transition: 'all 0.3s',
                                }}>
                                    Question {i + 1}: {user.correct ? 'Correct 🎉' : 'Wrong'}
                                </div>
                            );
                        })}
                    </div>
                    <Button
                        onClick={restartQuiz}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fas fa-redo"></i>
                        Try Again
                    </Button>
                </ResultCard>
            </QuizCard>
        );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    return (
        <QuizCard
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: transitioning ? 0 : 1, y: transitioning ? -40 : 0 }}
            transition={{ duration: 0.4, type: 'tween' }}
            key={currentQuestionIndex}
        >
            <div ref={timerRef}>
                <Timer timeLeft={timeLeft} total={15} />
            </div>
            <ProgressBar style={{ boxShadow: '0 2px 8px #6366f133', height: 10 }}>
                <Progress 
                    progress={progress} 
                    style={{
                        transition: 'width 0.5s cubic-bezier(.4,2,.6,1)',
                        background: `linear-gradient(90deg, #10b981 0%, #6366f1 100%)`,
                        boxShadow: '0 2px 8px #10b98133',
                    }}
                />
            </ProgressBar>
            <QuestionText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '1.5rem', lineHeight: 1.4 }}
            >
                {currentQuestion.question}
            </QuestionText>
            <AnswerGrid>
                <AnimatePresence>
                    {currentQuestion.answers.map((answer, index) => (
                        <AnswerButton
                            key={answer}
                            onClick={() => handleAnswer(index)}
                            disabled={isAnswered}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            whileHover={{ scale: 1.06, backgroundColor: 'rgba(99,102,241,0.08)' }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                // Only highlight selected answer, not correct/wrong
                                background: isAnswered && index === userAnswers[currentQuestionIndex]?.answer
                                    ? 'rgba(99,102,241,0.08)'
                                    : undefined,
                                borderColor: isAnswered && index === userAnswers[currentQuestionIndex]?.answer
                                    ? '#6366f1'
                                    : undefined,
                                transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                            }}
                        >
                            <span className="answer-letter" style={{
                                background: isAnswered && index === userAnswers[currentQuestionIndex]?.answer
                                    ? 'rgba(99,102,241,0.08)'
                                    : undefined,
                                color: isAnswered && index === userAnswers[currentQuestionIndex]?.answer
                                    ? '#6366f1'
                                    : undefined,
                                transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
                            }}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            {answer}
                        </AnswerButton>
                    ))}
                </AnimatePresence>
            </AnswerGrid>
        </QuizCard>
    );
};

export default Quiz;
