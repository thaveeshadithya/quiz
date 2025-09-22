import type { Question } from './types/quiz';

// 5 groups, 5 questions each (total 25), structured and updated
export const questions: Question[] = [
  // Group 1: laws
  {
    id: 1,
    group: "laws",
    question: "Which law states that current is directly proportional to voltage for a conductor at constant temperature?",
    sinhalaQuestion: "ස්ථිර උෂ්ණත්වයකදී සංදාරකයකින් ගමන් කරන ධාරාව වෝල්ටීයතාවයට සෘජු අනුපාතික බව කියන නීතිය කුමක්ද?",
    answers: [
      "Coulomb's Law (කුලොම්බ් නීතිය)",
      "Lenz's Law (ලෙන්ස් නීතිය)",
      "Ohm's Law (ඔම් නීතිය)",
      "Faraday's Law (ෆැරඩේ නීතිය)",
      "Kirchhoff's Law (කර්ක්හොෆ් නීතිය)"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    group: "laws",
    question: "Which law explains the conservation of electric charge at a junction?",
    sinhalaQuestion: "සන්ධියක විදුලි ආරෝපණය සංරක්ෂණය වන බව පැහැදිලි කරන නීතිය කුමක්ද?",
    answers: [
      "Ohm's Law (ඔම් නීතිය)",
      "Kirchhoff's Current Law (කර්ක්හොෆ් ධාරා නීතිය)",
      "Lenz's Law (ලෙන්ස් නීතිය)",
      "Faraday's Law (ෆැරඩේ නීතිය)",
      "Ampere's Law (ඇම්පියර් නීතිය)"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    group: "laws",
    question: "Which law states that the induced EMF in a closed circuit is proportional to the rate of change of magnetic flux?",
    sinhalaQuestion: "වසා ඇති සර්කට් එකක උත්ප්‍රේරිත විද්‍යුත් විද්‍යුත් බලය චුම්බක ප්‍රවාහයේ වෙනස් වීමේ වේගයට සෘජු අනුපාතික බව කියන නීතිය කුමක්ද?",
    answers: [
      "Lenz's Law (ලෙන්ස් නීතිය)",
      "Faraday's Law (ෆැරඩේ නීතිය)",
      "Ohm's Law (ඔම් නීතිය)",
      "Kirchhoff's Law (කර්ක්හොෆ් නීතිය)",
      "Coulomb's Law (කුලොම්බ් නීතිය)"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    group: "laws",
    question: "Which law is used to determine the direction of induced current?",
    sinhalaQuestion: "උත්ප්‍රේරිත ධාරාවේ දිශාව තීරණය කිරීමට භාවිතා කරන නීතිය කුමක්ද?",
    answers: [
      "Ohm's Law (ඔම් නීතිය)",
      "Lenz's Law (ලෙන්ස් නීතිය)",
      "Ampere's Law (ඇම්පියර් නීතිය)",
      "Faraday's Law (ෆැරඩේ නීතිය)",
      "Kirchhoff's Law (කර්ක්හොෆ් නීතිය)"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    group: "laws",
    question: "Which law relates the force between two electric charges?",
    sinhalaQuestion: "විදුලි ආරෝපණ දෙකක් අතර බලය සම්බන්ධ කරන නීතිය කුමක්ද?",
    answers: [
      "Faraday's Law (ෆැරඩේ නීතිය)",
      "Ohm's Law (ඔම් නීතිය)",
      "Coulomb's Law (කුලොම්බ් නීතිය)",
      "Lenz's Law (ලෙන්ස් නීතිය)",
      "Kirchhoff's Law (කර්ක්හොෆ් නීතිය)"
    ],
    correctAnswer: 2
  },

  // Group 2: electronic
  {
    id: 6,
    group: "electronic",
    question: "Which component stores energy in an electric field?",
    sinhalaQuestion: "විදුලි ක්ෂේත්‍රයක ශක්තිය ගබඩා කරන කොටස කුමක්ද?",
    answers: [
      "Inductor (ඉන්ඩක්ටර්)",
      "Resistor (රෙසිස්ටර්)",
      "Capacitor (කැපැසිටරය)",
      "Diode (ඩයෝඩ්)",
      "Transistor (ට්‍රාන්සිස්ටර්)"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    group: "electronic",
    question: "Which device allows current to flow in only one direction?",
    sinhalaQuestion: "එක් දිශාවක පමණක් ධාරාව ගමන් කිරීමට ඉඩදෙන උපකරණය කුමක්ද?",
    answers: [
      "Resistor (රෙසිස්ටර්)",
      "Capacitor (කැපැසිටරය)",
      "Diode (ඩයෝඩ්)",
      "Inductor (ඉන්ඩක්ටර්)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    group: "electronic",
    question: "Which of the following is a semiconductor material?",
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් අර්ධචාලක ද්‍රව්‍යයක් කුමක්ද?",
    answers: [
      "Copper (තඹ)",
      "Aluminum (ඇලුමිනියම්)",
      "Silicon (සිලිකොන්)",
      "Iron (ඉස්පැටිය)",
      "Gold (රන්)"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    group: "electronic",
    question: "Which device is used to amplify weak electrical signals?",
    sinhalaQuestion: "දුර්වල විදුලි සංඥා වර්ධනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Resistor (රෙසිස්ටර්)",
      "Capacitor (කැපැසිටරය)",
      "Transistor (ට්‍රාන්සිස්ටර්)",
      "Inductor (ඉන්ඩක්ටර්)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    group: "electronic",
    question: "Which component is used to regulate voltage in a circuit?",
    sinhalaQuestion: "සර්කට් එකක වෝල්ටීයතාව පාලනය කිරීමට භාවිතා කරන කොටස කුමක්ද?",
    answers: [
      "Zener Diode (සීනර් ඩයෝඩ්)",
      "Resistor (රෙසිස්ටර්)",
      "Inductor (ඉන්ඩක්ටර්)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)",
      "LED (එල්ඊඩී)"
    ],
    correctAnswer: 0
  },

  // Group 3: power
  {
    id: 11,
    group: "power",
    question: "Which device is used to convert AC to DC?",
    sinhalaQuestion: "AC විදුලිය DC වෙත පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Rectifier (රෙක්ටිෆයරය)",
      "Inverter (ඉන්වර්ටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)",
      "Transducer (ට්‍රාන්ස්ඩියුසර්)",
      "Oscillator (ඔසිලේටරය)"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    group: "power",
    question: "Which device is used to protect circuits from overcurrent?",
    sinhalaQuestion: "අධික ධාරාවෙන් සර්කට් ආරක්ෂා කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Resistor (රෙසිස්ටර්)",
      "Fuse (ෆියුස්)",
      "Capacitor (කැපැසිටරය)",
      "Inductor (ඉන්ඩක්ටර්)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    group: "power",
    question: "What is the main function of a transformer?",
    sinhalaQuestion: "ට්‍රාන්ස්ෆෝමර් එකක ප්‍රධාන කාර්යය කුමක්ද?",
    answers: [
      "Rectification (රෙක්ටිෆිකේෂන්)",
      "Amplification (වර්ධනය)",
      "Voltage conversion (වෝල්ටීයතාව පරිවර්තනය)",
      "Oscillation (ඔසිලේෂන්)",
      "Switching (ස්විච් කිරීම)"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    group: "power",
    question: "Which device is used to improve power factor?",
    sinhalaQuestion: "බල සාධකය වැඩිදියුණු කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Inductor (ඉන්ඩක්ටර්)",
      "Capacitor (කැපැසිටරය)",
      "Resistor (රෙසිස්ටර්)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)",
      "Rectifier (රෙක්ටිෆයරය)"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    group: "power",
    question: "Which device converts electrical energy into mechanical energy?",
    sinhalaQuestion: "විදුලි ශක්තිය යාන්ත්‍රික ශක්තියට පරිවර්තනය කරන උපකරණය කුමක්ද?",
    answers: [
      "Generator (ජෙනරේටරය)",
      "Motor (මෝටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමර්)",
      "Rectifier (රෙක්ටිෆයරය)",
      "Oscillator (ඔසිලේටරය)"
    ],
    correctAnswer: 1
  },

  // Group 4: general
  {
    id: 16,
    group: "general",
    question: "Which instrument is used to measure electric current?",
    sinhalaQuestion: "විදුලි ධාරාව මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Voltmeter (වෝල්ට්මීටරය)",
      "Ammeter (ඇම්මීටරය)",
      "Wattmeter (වොට්මීටරය)",
      "Ohmmeter (ඔම්මීටරය)",
      "Galvanometer (ගැල්වෙනෝමීටරය)"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    group: "general",
    question: "Which instrument is used to measure resistance?",
    sinhalaQuestion: "ප්‍රතිරෝධය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Ammeter (ඇම්මීටරය)",
      "Voltmeter (වෝල්ට්මීටරය)",
      "Ohmmeter (ඔම්මීටරය)",
      "Wattmeter (වොට්මීටරය)",
      "Galvanometer (ගැල්වෙනෝමීටරය)"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    group: "general",
    question: "Which device is used to measure frequency?",
    sinhalaQuestion: "අවෘත්තිය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Voltmeter (වෝල්ට්මීටරය)",
      "Ammeter (ඇම්මීටරය)",
      "Frequency meter (අවෘත්තිය මීටරය)",
      "Ohmmeter (ඔම්මීටරය)",
      "Wattmeter (වොට්මීටරය)"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    group: "general",
    question: "Which device is used to measure temperature?",
    sinhalaQuestion: "උෂ්ණත්වය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Thermistor (තර්මිස්ටර්)",
      "LDR (එල්ඩීආර්)",
      "Photodiode (ෆොටෝඩයෝඩ්)",
      "Transistor (ට්‍රාන්සිස්ටර්)",
      "Thermocouple (තර්මොකප්පල්)"
    ],
    correctAnswer: 4
  },
  {
    id: 20,
    group: "general",
    question: "Which instrument is used to measure electric power?",
    sinhalaQuestion: "විදුලි බලය මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Voltmeter (වෝල්ට්මීටරය)",
      "Ammeter (ඇම්මීටරය)",
      "Wattmeter (වොට්මීටරය)",
      "Ohmmeter (ඔම්මීටරය)",
      "Frequency meter (අවෘත්තිය මීටරය)"
    ],
    correctAnswer: 2
  },

  // Group 5: digital
  {
    id: 21,
    group: "digital",
    question: "Which logic gate outputs HIGH only when all its inputs are HIGH?",
    sinhalaQuestion: "සියලු input HIGH වීමේදී පමණක් HIGH output ලබාදෙන ලොජික් ගේට් එක කුමක්ද?",
    answers: [
      "OR (OR)",
      "XOR (XOR)",
      "AND (AND)",
      "NAND (NAND)",
      "NOR (NOR)"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    group: "digital",
    question: "Which of the following is a type of flip-flop?",
    sinhalaQuestion: "පහත සඳහන්ව ඇති අතරින් flip-flop වර්ගයක් කුමක්ද?",
    answers: [
      "SR (SR)",
      "RC (RC)",
      "LC (LC)",
      "RL (RL)",
      "LR (LR)"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    group: "digital",
    question: "What is the binary equivalent of decimal 5?",
    sinhalaQuestion: "දශම 5 සඳහා ද්විමය සමාන අගය කුමක්ද?",
    answers: [
      "101 (101)",
      "100 (100)",
      "110 (110)",
      "111 (111)",
      "011 (011)"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    group: "digital",
    question: "Which device is used to convert analog signals to digital?",
    sinhalaQuestion: "ඇනලොග් සංඥා ඩිජිටල් බවට පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "DAC (ඩීඒසී)",
      "ADC (ඒඩීසී)",
      "Op-amp (ඔප් ඇම්ප්)",
      "Flip-flop (ෆ්ලිප්-ෆ්ලොප්)",
      "Counter (කවුන්ටරය)"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    group: "digital",
    question: "Which number system uses base 16?",
    sinhalaQuestion: "මූලය 16 භාවිතා කරන සංඛ්‍යා පද්ධතිය කුමක්ද?",
    answers: [
      "Decimal (දශම)",
      "Binary (ද්විමය)",
      "Octal (අෂ්ටම)",
      "Hexadecimal (හෙක්සාදශම)",
      "Quinary (පංචම)"
    ],
    correctAnswer: 3
  }
];