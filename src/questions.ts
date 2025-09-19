import type { Question } from './types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    group: "laws",
    question: "Which law states that the current through a conductor between two points is directly proportional to the voltage across the two points?",
    sinhalaQuestion: "වොල්ටීයතාවයට සෘජු අනුපාතීක වන පරිදි සම්ප්රේෂණය හරහා ධාරාව ගමන් කරන බව කියන නියමය කුමක්ද?",
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
    sinhalaQuestion: "ඉන්ඩක්ටන්ස් එකක SI ඒකකය කුමක්ද?",
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
    sinhalaQuestion: "AC විදුලිය DC වෙත පරිවර්තනය කිරීම සඳහා භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන් වලින් කුමන එකක් පසුක්‍රියක (Passive) කොටසක්ද?",
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
    sinhalaQuestion: "ට්‍රාන්ස්ෆෝමර් එකක ප්‍රධාන කාර්යය කුමක්ද?",
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
    sinhalaQuestion: "සාමාන්‍යයෙන් අර්ධචාලකයක් ලෙස භාවිතා වන ද්‍රව්‍ය කුමක්ද?",
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
    sinhalaQuestion: "විදුලි ධාරාව මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "සීනර් ඩයෝඩ් එකේ කාර්යය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් විදුලි යන්ත්‍ර වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "සියලු input LOW වන විට පමණක් HIGH output එකක් ලබා දෙන ලොජික් ගේට් එක කුමක්ද?",
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
    sinhalaQuestion: "සර්කට් එකක ක්‍රියාකාරී ඇම්ප්ලිෆයරයක ප්‍රධාන කාර්යය කුමක්ද?",
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
    sinhalaQuestion: "වොල්ටීයතාව පාලනය කරන ස්විච් එකක් ලෙස භාවිතා වන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "විදුලි ධාරිතාවයේ ඒකකය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ඇනලොග්-ටූ-ඩිජිටල් පරිවර්තක වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "උත්ප්‍රේරක ධාරාවේ දිශාව තීරණය කිරීමට භාවිතා කරන නියමය කුමක්ද?",
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
    sinhalaQuestion: "ප්‍රතිරෝධය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "AC සර්කට් එකක කැපසිටරයක කාර්යය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් එක දිශාවක පමණක් ක්‍රියා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "විදුලි බල සාධකය වැඩිදියුණු කිරීමට භාවිතා කරන ද්‍රව්‍ය කුමක්ද?",
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
    sinhalaQuestion: "විදුලි ශක්තිය ගබඩා කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් රේඛීය නොවන උපකරණයක් කුමක්ද?",
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
    sinhalaQuestion: "රීලේ එකේ කාර්යය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ට්‍රාන්ස්ෆෝමර් වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "සර්කට් වලට අධික ධාරාවෙන් ආරක්ෂා කිරීම සඳහා භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ඩිජිටල් සර්කට් එකක් කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ඩයෝඩ් වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "දුර්වල සංඥා වර්ධනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ෆිල්ටර් වර්ගයක් කුමක්ද?",
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
    sinhalaQuestion: "ආලෝකය විදුලියට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් මෝටරයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "අවෘත්තිය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් සංවේදක වර්ගයක් කුමක්ද?",
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
    sinhalaQuestion: "DC විදුලිය AC වෙත පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් සංවේදක වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "චුම්බක ශක්තිය ගබඩා කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ඔසිලේටර් වර්ගයක් කුමක්ද?",
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
    sinhalaQuestion: "බලශක්තිය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් රෙක්ටිෆයර් වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "උෂ්ණත්වය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ඇම්ප්ලිෆයරයක් වර්ගයක් කුමක්ද?",
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
    sinhalaQuestion: "ශබ්දය විදුලි සංඥා වලට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ෆිල්ටර් වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "විදුලි ශක්තිය යාන්ත්‍රික ශක්තියට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ජනකයක් වර්ගයක් කුමක්ද?",
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
    sinhalaQuestion: "යාන්ත්‍රික ශක්තිය විදුලි ශක්තියට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ජනක වර්ගයක් නොවන එක කුමක්ද?",
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
    sinhalaQuestion: "විදුලි ශක්තිය තාප ශක්තියට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් ප්‍රතිරෝධක වර්ගයක් කුමක්ද?",
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
    sinhalaQuestion: "විදුලි ශක්තිය ආලෝක ශක්තියට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
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
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් කැපසිටර වර්ගයක් නොවන එක කුමක්ද?",
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
