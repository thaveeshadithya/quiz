import React from 'react';
import { motion } from 'framer-motion';


const glow = {
  filter: 'drop-shadow(0 0 12px #43e0e0) drop-shadow(0 0 18px #5f4bb6)'
};

const CircuitBackground: React.FC = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      opacity: 0.32,
      pointerEvents: 'none',
      transition: 'opacity 0.5s',
    }}
  >
    {/* Main horizontal lines */}
    <motion.line x1="100" y1="200" x2="1340" y2="200" stroke="#43e0e0" strokeWidth="3" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0 }} />
    <motion.line x1="100" y1="700" x2="1340" y2="700" stroke="#5f4bb6" strokeWidth="3" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 1 }} />
    {/* Vertical lines */}
    <motion.line x1="300" y1="200" x2="300" y2="700" stroke="#43e0e0" strokeWidth="2" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }} />
    <motion.line x1="900" y1="200" x2="900" y2="700" stroke="#5f4bb6" strokeWidth="2" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.7, repeat: Infinity, repeatType: 'reverse', delay: 1.2 }} />
    {/* Diagonal lines */}
    <motion.line x1="300" y1="200" x2="900" y2="700" stroke="#43e0e0" strokeWidth="1.5" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', delay: 1.5 }} />
    <motion.line x1="900" y1="200" x2="300" y2="700" stroke="#5f4bb6" strokeWidth="1.5" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.7, repeat: Infinity, repeatType: 'reverse', delay: 1.7 }} />
    {/* More subtle lines */}
    <motion.line x1="600" y1="350" x2="1200" y2="350" stroke="#43e0e0" strokeWidth="1.5" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.8 }} />
    <motion.line x1="600" y1="550" x2="1200" y2="550" stroke="#5f4bb6" strokeWidth="1.5" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.2, repeat: Infinity, repeatType: 'reverse', delay: 1.5 }} />
    {/* Extra horizontal/vertical lines for density */}
    <motion.line x1="200" y1="400" x2="1240" y2="400" stroke="#43e0e0" strokeWidth="1" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, repeat: Infinity, repeatType: 'reverse', delay: 1.1 }} />
    <motion.line x1="400" y1="100" x2="400" y2="800" stroke="#5f4bb6" strokeWidth="1" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.9, repeat: Infinity, repeatType: 'reverse', delay: 1.3 }} />
    <motion.line x1="1100" y1="100" x2="1100" y2="800" stroke="#43e0e0" strokeWidth="1" style={glow} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.1, repeat: Infinity, repeatType: 'reverse', delay: 1.6 }} />
    {/* Nodes with glow and pulsing */}
    <motion.circle cx="300" cy="200" r="10" fill="#43e0e0" style={glow} animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }} />
    <motion.circle cx="900" cy="700" r="10" fill="#5f4bb6" style={glow} animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop' }} />
    <motion.circle cx="600" cy="350" r="7" fill="#43e0e0" style={glow} animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, repeatType: 'loop' }} />
    <motion.circle cx="1200" cy="550" r="7" fill="#5f4bb6" style={glow} animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, repeatType: 'loop' }} />
    <motion.circle cx="400" cy="400" r="6" fill="#43e0e0" style={glow} animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.1, repeat: Infinity, repeatType: 'loop' }} />
    <motion.circle cx="1100" cy="400" r="6" fill="#5f4bb6" style={glow} animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.3, repeat: Infinity, repeatType: 'loop' }} />
  </motion.svg>
);

export default CircuitBackground;
