import React from 'react';
import { Timer as StyledTimer } from './StyledComponents';

interface TimerProps {
    timeLeft: number;
    total: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, total }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    return (
        <StyledTimer timeLeft={timeLeft}>
            <svg viewBox="0 0 100 100">
                <circle
                    className="background"
                    cx="50"
                    cy="50"
                    r={radius}
                />
                <circle
                    className="progress"
                    cx="50"
                    cy="50"
                    r={radius}
                />
            </svg>
            <span>{timeLeft}</span>
        </StyledTimer>
    );
};

export default Timer;
