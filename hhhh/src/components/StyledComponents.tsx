import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(120deg, #0a2342 0%, #1976d2 60%, #42a5f5 100%);
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 3vh 0 0 0;
`;

export const QuizCard = styled(motion.div)`
    
    margin: -1.5vh auto 0 auto;
    background: rgba(195, 218, 240, 1);
    backdrop-filter: blur(12px);
    border-radius: 20px;
    padding: 1.1rem 0.7rem 0.7rem 0.7rem;
    box-shadow: 0 6px 18px rgba(30,64,175,0.13), 0 1px 4px #1976d2cc;
    width: 96vw;
    height: 80vh;
    max-width: 900px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    position: relative;
    min-height: 0;
    transform: rotate(-2deg);
    overflow: visible;
`;

export const Title = styled.h1`
    color: #f3f3f3ff;
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.5px;
    position: absolute;
    top: 2rem;
    left: 2rem;
`;

export const Timer = styled.div<{ timeLeft: number }>`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0.5rem auto;
    
    svg {
        transform: rotate(-90deg);
        width: 100%;
        height: 100%;
    }
    
    circle {
        fill: none;
        stroke-width: 8;
        stroke-linecap: round;
        
        &.background {
            stroke: #e2e8f0;
        }
        
        &.progress {
            stroke: ${({ timeLeft }) => 
                timeLeft > 5 ? '#10b981' :
                timeLeft > 3 ? '#f59e0b' : '#ef4444'};
            stroke-dasharray: 251.2;
            stroke-dashoffset: ${({ timeLeft }) => 
                251.2 * (1 - timeLeft / 10)};
            transition: stroke-dashoffset 1s linear, stroke 0.3s ease;
        }
    }
    
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        font-weight: bold;
        color: #1f2937;
    }
`;

export const QuestionText = styled(motion.h2)`
    color: #1f2937;
    font-size: 1rem;
    margin-bottom: 0.2rem;
    text-align: center;
    font-weight: 600;
    line-height: 1.22;
    word-break: break-word;
    overflow-wrap: anywhere;
    white-space: pre-line;
`;

export const AnswerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.7rem;
    margin-top: 1.1rem;
    width: 100%;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const AnswerButton = styled(motion.button)`
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid rgba(99, 102, 241, 0.2);
    border-radius: 20px;
    padding: 0.7rem 1.1rem;
    font-size: 0.98rem;
    color: #1f2937;
    cursor: pointer;
    transition: background 0.22s cubic-bezier(.4,2,.6,1),
                border-color 0.22s cubic-bezier(.4,2,.6,1),
                box-shadow 0.22s cubic-bezier(.4,2,.6,1),
                transform 0.18s cubic-bezier(.4,2,.6,1);
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    will-change: transform, box-shadow, background, border-color;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08));
        opacity: 0;
        transition: opacity 0.22s cubic-bezier(.4,2,.6,1);
        pointer-events: none;
    }

    &:hover, &:focus-visible {
        border-color: #6366f1;
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 4px 16px rgba(99, 102, 241, 0.18);
        outline: none;
        &::before {
            opacity: 1;
        }
    }

    &:active {
        transform: scale(0.97);
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.12);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        box-shadow: none;
    }

    .answer-letter {
        background: rgba(99, 102, 241, 0.1);
        color: #6366f1;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-weight: 600;
        transition: background 0.22s cubic-bezier(.4,2,.6,1), color 0.22s cubic-bezier(.4,2,.6,1);
    }
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    margin: 2rem 0;
    overflow: hidden;
`;

export const Progress = styled(motion.div)<{ progress: number }>`
    height: 100%;
    background: #6366f1;
    width: ${({ progress }) => progress}%;
`;

export const ResultCard = styled(motion.div)`
    text-align: center;
    
    h2 {
        color: #1f2937;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    .score {
        font-size: 3rem;
        font-weight: bold;
        color: #6366f1;
        margin: 1rem 0;
    }
`;

export const Button = styled(motion.button)`
    background: linear-gradient(135deg, #6366f1, #a855f7);
    color: white;
    border: none;
    border-radius: 16px;
    padding: 1.2rem 3rem;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }
    
    i {
        margin-right: 8px;
    }
`;

export const Footer = styled.footer`
  width: 100vw;
    background: #312e81;
  box-shadow: 0 -2px 16px #a855f733;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2.5vw 0.7rem 2.5vw;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  min-height: 60px;
`;

export const FooterText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b5563;
  text-align: center;
  flex: 1;
`;

export const FooterLogo = styled.img`
  height: 44px;
  width: auto;
  object-fit: contain;
  margin: 0 1vw;
`;
