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
  {
    id: 2,
    group: "electronic",
    question: "What is the SI unit of inductance?",
    answers: [
      "Farad",
      "Henry",
      "Weber",
      "Tesla",
      "Siemens"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    group: "power",
    question: "Which device is used to convert AC to DC?",
    answers: [
      "Rectifier",
      "Inverter",
      "Transformer",
      "Transducer",
      "Oscillator"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    group: "electronic",
    question: "Which of the following is a passive component?",
    answers: [
      "Transistor",
      "Diode",
      "Resistor",
      "SCR",
      "Op-Amp"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    group: "power",
    question: "What is the main function of a transformer?",
    answers: [
      "Rectification",
      "Amplification",
      "Voltage conversion",
      "Oscillation",
      "Switching"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    group: "electronic",
    question: "Which material is commonly used as a semiconductor?",
    answers: [
      "Copper",
      "Aluminum",
      "Silicon",
      "Iron",
      "Gold"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    group: "general",
    question: "Which instrument is used to measure electric current?",
    answers: [
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Ohmmeter",
      "Galvanometer"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    group: "electronic",
    question: "What is the function of a Zener diode?",
    answers: [
      "Rectification",
      "Voltage regulation",
      "Amplification",
      "Switching",
      "Oscillation"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    group: "power",
    question: "Which of the following is NOT a type of electrical machine?",
    answers: [
      "Transformer",
      "Induction Motor",
      "Synchronous Generator",
      "Rectifier",
      "DC Motor"
    ],
    correctAnswer: 3
  },
  {
    id: 10,
    group: "electronic",
    question: "Which logic gate outputs HIGH only when all its inputs are LOW?",
    answers: [
      "NAND",
      "NOR",
      "XOR",
      "AND",
      "OR"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    group: "electronic",
    question: "What is the main function of an operational amplifier in a circuit?",
    answers: [
      "Current amplification",
      "Voltage regulation",
      "Signal filtering",
      "Voltage amplification",
      "Rectification"
    ],
    correctAnswer: 3
  },
  {
    id: 12,
    group: "electronic",
    question: "Which device is used as a voltage-controlled switch?",
    answers: [
      "Bipolar Junction Transistor (BJT)",
      "Zener Diode",
      "Thyristor (SCR)",
      "Field Effect Transistor (FET)",
      "Photodiode"
    ],
    correctAnswer: 3
  },
  {
    id: 13,
    group: "electronic",
    question: "What is the unit of electrical capacitance?",
    answers: [
      "Henry",
      "Farad",
      "Ohm",
      "Siemens",
      "Weber"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    group: "electronic",
    question: "Which of the following is NOT a type of analog-to-digital converter (ADC)?",
    answers: [
      "Successive Approximation",
      "Flash",
      "Dual Slope",
      "Delta-Sigma",
      "Schmitt Trigger"
    ],
    correctAnswer: 4
  },
  {
    id: 15,
    group: "laws",
    question: "Which law is used to determine the direction of induced current?",
    answers: [
      "Ohm's Law",
      "Lenz's Law",
      "Kirchhoff's Law",
      "Faraday's Law",
      "Ampere's Law"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    group: "general",
    question: "Which instrument is used to measure resistance?",
    answers: [
      "Ammeter",
      "Voltmeter",
      "Ohmmeter",
      "Wattmeter",
      "Galvanometer"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    group: "electronic",
    question: "What is the function of a capacitor in an AC circuit?",
    answers: [
      "Store charge",
      "Block DC",
      "Pass AC",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 18,
    group: "electronic",
    question: "Which of the following is a unidirectional device?",
    answers: [
      "Resistor",
      "Capacitor",
      "Diode",
      "Inductor",
      "Transformer"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    group: "power",
    question: "Which of the following is used for power factor improvement?",
    answers: [
      "Inductor",
      "Capacitor",
      "Resistor",
      "Transformer",
      "Rectifier"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    group: "electronic",
    question: "Which device is used to store electrical energy?",
    answers: [
      "Resistor",
      "Inductor",
      "Capacitor",
      "Diode",
      "Transistor"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    group: "electronic",
    question: "Which of the following is a non-linear device?",
    answers: [
      "Resistor",
      "Inductor",
      "Capacitor",
      "Diode",
      "Transformer"
    ],
    correctAnswer: 3
  },
  {
    id: 22,
    group: "power",
    question: "What is the function of a relay?",
    answers: [
      "Amplification",
      "Switching",
      "Rectification",
      "Oscillation",
      "Filtering"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    group: "power",
    question: "Which of the following is NOT a type of transformer?",
    answers: [
      "Step-up",
      "Step-down",
      "Isolation",
      "Auto",
      "Rectifier"
    ],
    correctAnswer: 4
  },
  {
    id: 24,
    group: "power",
    question: "Which device is used to protect circuits from overcurrent?",
    answers: [
      "Resistor",
      "Fuse",
      "Capacitor",
      "Inductor",
      "Transformer"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    group: "electronic",
    question: "Which of the following is a digital circuit?",
    answers: [
      "Amplifier",
      "Oscillator",
      "Flip-Flop",
      "Rectifier",
      "Filter"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    group: "electronic",
    question: "Which of the following is NOT a type of diode?",
    answers: [
      "Zener",
      "LED",
      "Schottky",
      "Varactor",
      "SCR"
    ],
    correctAnswer: 4
  },
  {
    id: 27,
    group: "electronic",
    question: "Which device is used to amplify weak signals?",
    answers: [
      "Resistor",
      "Capacitor",
      "Transistor",
      "Inductor",
      "Transformer"
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    group: "electronic",
    question: "Which of the following is a type of filter?",
    answers: [
      "Low-pass",
      "High-pass",
      "Band-pass",
      "Band-stop",
      "All of the above"
    ],
    correctAnswer: 4
  },
  {
    id: 29,
    group: "electronic",
    question: "Which device is used to convert light into electricity?",
    answers: [
      "LED",
      "Photodiode",
      "Solar cell",
      "LDR",
      "Thermistor"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    group: "power",
    question: "Which of the following is NOT a type of motor?",
    answers: [
      "DC Motor",
      "Induction Motor",
      "Synchronous Motor",
      "Stepper Motor",
      "Rectifier Motor"
    ],
    correctAnswer: 4
  },
  {
    id: 31,
    group: "general",
    question: "Which device is used to measure frequency?",
    answers: [
      "Voltmeter",
      "Ammeter",
      "Frequency meter",
      "Ohmmeter",
      "Wattmeter"
    ],
    correctAnswer: 2
  },
  {
    id: 32,
    group: "electronic",
    question: "Which of the following is a type of sensor?",
    answers: [
      "Thermistor",
      "LDR",
      "Photodiode",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 33,
    group: "power",
    question: "Which device is used to convert DC to AC?",
    answers: [
      "Rectifier",
      "Inverter",
      "Transformer",
      "Transducer",
      "Oscillator"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    group: "electronic",
    question: "Which of the following is NOT a type of sensor?",
    answers: [
      "Thermistor",
      "LDR",
      "Photodiode",
      "Transistor",
      "Thermocouple"
    ],
    correctAnswer: 3
  },
  {
    id: 35,
    group: "electronic",
    question: "Which device is used to store magnetic energy?",
    answers: [
      "Resistor",
      "Inductor",
      "Capacitor",
      "Diode",
      "Transistor"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    group: "electronic",
    question: "Which of the following is a type of oscillator?",
    answers: [
      "RC Oscillator",
      "LC Oscillator",
      "Crystal Oscillator",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 37,
    group: "general",
    question: "Which device is used to measure power?",
    answers: [
      "Voltmeter",
      "Ammeter",
      "Wattmeter",
      "Ohmmeter",
      "Frequency meter"
    ],
    correctAnswer: 2
  },
  {
    id: 38,
    group: "power",
    question: "Which of the following is NOT a type of rectifier?",
    answers: [
      "Half-wave",
      "Full-wave",
      "Bridge",
      "Center-tap",
      "Step-up"
    ],
    correctAnswer: 4
  },
  {
    id: 39,
    group: "general",
    question: "Which device is used to measure temperature?",
    answers: [
      "Thermistor",
      "LDR",
      "Photodiode",
      "Transistor",
      "Thermocouple"
    ],
    correctAnswer: 4
  },
  {
    id: 40,
    group: "electronic",
    question: "Which of the following is a type of amplifier?",
    answers: [
      "Voltage amplifier",
      "Current amplifier",
      "Power amplifier",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 41,
    group: "electronic",
    question: "Which device is used to convert sound into electrical signals?",
    answers: [
      "Speaker",
      "Microphone",
      "Transistor",
      "Diode",
      "Capacitor"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    group: "power",
    question: "Which of the following is NOT a type of filter?",
    answers: [
      "Low-pass",
      "High-pass",
      "Band-pass",
      "Band-stop",
      "Step-up"
    ],
    correctAnswer: 4
  },
  {
    id: 43,
    group: "power",
    question: "Which device is used to convert electrical energy into mechanical energy?",
    answers: [
      "Generator",
      "Motor",
      "Transformer",
      "Rectifier",
      "Oscillator"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    group: "power",
    question: "Which of the following is a type of generator?",
    answers: [
      "DC Generator",
      "AC Generator",
      "Synchronous Generator",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 45,
    group: "power",
    question: "Which device is used to convert mechanical energy into electrical energy?",
    answers: [
      "Generator",
      "Motor",
      "Transformer",
      "Rectifier",
      "Oscillator"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    group: "power",
    question: "Which of the following is NOT a type of generator?",
    answers: [
      "DC Generator",
      "AC Generator",
      "Synchronous Generator",
      "Rectifier",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 47,
    group: "power",
    question: "Which device is used to convert electrical energy into heat energy?",
    answers: [
      "Resistor",
      "Inductor",
      "Capacitor",
      "Diode",
      "Transistor"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    group: "electronic",
    question: "Which of the following is a type of resistor?",
    answers: [
      "Carbon",
      "Wire-wound",
      "Film",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 49,
    group: "electronic",
    question: "Which device is used to convert electrical energy into light energy?",
    answers: [
      "LED",
      "Photodiode",
      "Solar cell",
      "LDR",
      "Thermistor"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    group: "electronic",
    question: "Which of the following is NOT a type of capacitor?",
    answers: [
      "Electrolytic",
      "Ceramic",
      "Tantalum",
      "Inductive",
      "Film"
    ],
    correctAnswer: 3
  }
];
