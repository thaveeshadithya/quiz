import type { Question } from './types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    group: "group1",
    question: "What is the unit of electric current?",
    sinhalaQuestion: "විදුලි ධාරාව සඳහා ඒකකය කුමක්ද?",
    answers: [
      "Volt (වෝල්ට්)",
      "Ampere (ඇම්පියර්)",
      "Ohm (ඔම්)",
      "Watt (වොට්)",
      "Coulomb (කුලොම්බ්)"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    group: "group1",
    question: "Which device is used to store electric charge?",
    sinhalaQuestion: "විදුලි ආරෝපණය ගබඩා කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Resistor (ප්‍රතිරෝධකය)",
      "Capacitor (කැපැසිටරය)",
      "Inductor (ඉන්ඩක්ටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමරය)",
      "Diode (ඩයෝඩ්)"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    group: "group1",
    question: "What is the function of a diode?",
    sinhalaQuestion: "ඩයෝඩ් එකේ කාර්යය කුමක්ද?",
    answers: [
      "To resist current (ධාරාවට ප්‍රතිරෝධ වීම)",
      "To store charge (ආරෝපණය ගබඩා කිරීම)",
      "To allow current in one direction (එක් දිශාවක ධාරාවට ඉඩදීම)",
      "To amplify signals (සංඥා වර්ධනය කිරීම)",
      "To convert AC to DC (AC එක DC වෙත පරිවර්තනය කිරීම)"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    group: "group1",
    question: "Which law states that current is directly proportional to voltage?",
    sinhalaQuestion: "ධාරාව වෝල්ටීයතාවට සෘජු අනුපාතික බව කියන නීතිය කුමක්ද?",
    answers: [
      "Ohm's Law (ඔම් නීතිය)",
      "Kirchhoff's Law (කර්ක්හොෆ් නීතිය)",
      "Faraday's Law (ෆැරඩේ නීතිය)",
      "Lenz's Law (ලෙන්ස් නීතිය)",
      "Coulomb's Law (කුලොම්බ් නීතිය)"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    group: "group1",
    question: "What is the symbol for resistance?",
    sinhalaQuestion: "ප්‍රතිරෝධතාවයට සංකේතය කුමක්ද?",
    answers: [
      "R (ආර්)",
      "I (අයි)",
      "V (වී)",
      "C (සී)",
      "L (එල්)"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    group: "group1",
    question: "Which component converts electrical energy into mechanical energy?",
    sinhalaQuestion: "විදුලි ශක්තිය යාන්ත්‍රික ශක්තියට පරිවර්තනය කරන කොටස කුමක්ද?",
    answers: [
      "Generator (ජෙනරේටරය)",
      "Motor (මෝටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමරය)",
      "Rectifier (රෙක්ටිෆයරය)",
      "Oscillator (ඔසිලේටරය)"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    group: "group2",
    question: "What does a transformer do?",
    sinhalaQuestion: "ට්‍රාන්ස්ෆෝමරය කුමක් කරයිද?",
    answers: [
      "Converts AC voltage levels (AC වෝල්ටීයතාව මට්ටම් පරිවර්තනය කරයි)",
      "Converts DC to AC (DC AC වෙත පරිවර්තනය කරයි)",
      "Stores electrical energy (විදුලි ශක්තිය ගබඩා කරයි)",
      "Amplifies signals (සංඥා වර්ධනය කරයි)",
      "Measures current (ධාරාව මැනයි)"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    group: "group2",
    question: "Which instrument is used to measure voltage?",
    sinhalaQuestion: "වෝල්ටීයතාව මැනීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Ammeter (ඇම්මීටරය)",
      "Voltmeter (වෝල්ට්මීටරය)",
      "Ohmmeter (ඔම්මීටරය)",
      "Wattmeter (වොට්මීටරය)",
      "Galvanometer (ගැල්වෙනෝමීටරය)"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    group: "group2",
    question: "What is the main purpose of a fuse?",
    sinhalaQuestion: "ෆියුස් එකේ ප්‍රධාන අරමුණ කුමක්ද?",
    answers: [
      "To increase current (ධාරාව වැඩි කිරීම)",
      "To protect circuits from overcurrent (අධික ධාරාවෙන් සර්කට් ආරක්ෂා කිරීම)",
      "To convert AC to DC (AC DC වෙත පරිවර්තනය කිරීම)",
      "To store charge (ආරෝපණය ගබඩා කිරීම)",
      "To amplify signals (සංඥා වර්ධනය කිරීම)"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    group: "group2",
    question: "Which device allows current to flow in only one direction?",
    sinhalaQuestion: "ධාරාව එක් දිශාවක පමණක් ගමන් කිරීමට ඉඩ දෙන උපකරණය කුමක්ද?",
    answers: [
      "Resistor (ප්‍රතිරෝධකය)",
      "Capacitor (කැපැසිටරය)",
      "Diode (ඩයෝඩ්)",
      "Inductor (ඉන්ඩක්ටරය)",
      "Transistor (ට්‍රාන්සිස්ටරය)"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    group: "group2",
    question: "What is the binary equivalent of decimal 10?",
    sinhalaQuestion: "දශම 10 සඳහා ද්විමය සමාන අගය කුමක්ද?",
    answers: [
      "1010 (1010)",
      "1100 (1100)",
      "1111 (1111)",
      "1001 (1001)",
      "1011 (1011)"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    group: "group2",
    question: "Which logic gate outputs HIGH only when all inputs are HIGH?",
    sinhalaQuestion: "සියලු input HIGH වීමේදී පමණක් HIGH output ලබාදෙන ලොජික් ගේට් එක කුමක්ද?",
    answers: [
      "OR (OR)",
      "AND (AND)",
      "XOR (XOR)",
      "NAND (NAND)",
      "NOR (NOR)"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    group: "group3",
    question: "What is the function of a resistor?",
    sinhalaQuestion: "ප්‍රතිරෝධකයේ කාර්යය කුමක්ද?",
    answers: [
      "To increase current (ධාරාව වැඩි කිරීම)",
      "To store energy (ශක්තිය ගබඩා කිරීම)",
      "To oppose current flow (ධාරාවට ප්‍රතිරෝධ වීම)",
      "To convert energy (ශක්තිය පරිවර්තනය කිරීම)",
      "To amplify signals (සංඥා වර්ධනය කිරීම)"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    group: "group3",
    question: "Which device converts chemical energy into electrical energy?",
    sinhalaQuestion: "රසායනික ශක්තිය විදුලි ශක්තියට පරිවර්තනය කරන උපකරණය කුමක්ද?",
    answers: [
      "Battery (බැටරිය)",
      "Motor (මෝටරය)",
      "Generator (ජෙනරේටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමරය)",
      "Capacitor (කැපැසිටරය)"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    group: "group3",
    question: "What is the unit of electrical resistance?",
    sinhalaQuestion: "විදුලි ප්‍රතිරෝධතාවයට ඒකකය කුමක්ද?",
    answers: [
      "Volt (වෝල්ට්)",
      "Ampere (ඇම්පියර්)",
      "Ohm (ඔම්)",
      "Watt (වොට්)",
      "Coulomb (කුලොම්බ්)"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    group: "group3",
    question: "Which device is used to amplify weak electrical signals?",
    sinhalaQuestion: "දුර්වල විදුලි සංඥා වර්ධනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Resistor (ප්‍රතිරෝධකය)",
      "Capacitor (කැපැසිටරය)",
      "Transistor (ට්‍රාන්සිස්ටරය)",
      "Inductor (ඉන්ඩක්ටරය)",
      "Diode (ඩයෝඩ්)"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    group: "group3",
    question: "What is the main function of a wattmeter?",
    sinhalaQuestion: "වොට්මීටරයේ ප්‍රධාන කාර්යය කුමක්ද?",
    answers: [
      "To measure voltage (වෝල්ටීයතාව මැනීම)",
      "To measure current (ධාරාව මැනීම)",
      "To measure power (බලය මැනීම)",
      "To measure resistance (ප්‍රතිරෝධතාව මැනීම)",
      "To measure frequency (අවෘත්තිය මැනීම)"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    group: "group3",
    question: "Which component stores energy in a magnetic field?",
    sinhalaQuestion: "චුම්බක ක්ෂේත්‍රයක ශක්තිය ගබඩා කරන කොටස කුමක්ද?",
    answers: [
      "Capacitor (කැපැසිටරය)",
      "Resistor (ප්‍රතිරෝධකය)",
      "Inductor (ඉන්ඩක්ටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමරය)",
      "Diode (ඩයෝඩ්)"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    group: "group4",
    question: "What is the function of a fuse in an electrical circuit?",
    sinhalaQuestion: "විදුලි සර්කට් එකක ෆියුස් එකේ කාර්යය කුමක්ද?",
    answers: [
      "To increase voltage (වෝල්ටීයතාව වැඩි කිරීම)",
      "To protect from overcurrent (අධික ධාරාවෙන් ආරක්ෂා කිරීම)",
      "To convert AC to DC (AC DC වෙත පරිවර්තනය කිරීම)",
      "To store charge (ආරෝපණය ගබඩා කිරීම)",
      "To amplify signals (සංඥා වර්ධනය කිරීම)"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    group: "group4",
    question: "Which device is used to convert AC to DC?",
    sinhalaQuestion: "AC විදුලිය DC වෙත පරිවර්තනය කිරීමට භාවිතා කරන උපකරණය කුමක්ද?",
    answers: [
      "Rectifier (රෙක්ටිෆයරය)",
      "Inverter (ඉන්වර්ටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමරය)",
      "Oscillator (ඔසිලේටරය)",
      "Transducer (ට්‍රාන්ස්ඩියුසර්)"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    group: "group4",
    question: "What is the hexadecimal number system base?",
    sinhalaQuestion: "හෙක්සාදශම සංඛ්‍යා පද්ධතියේ මූලය කුමක්ද?",
    answers: [
      "8 (අෂ්ටම)",
      "10 (දශම)",
      "12 (දොළහ)",
      "16 (හෙක්සාදශම)",
      "2 (ද්විමය)"
    ],
    correctAnswer: 3
  },
  {
    id: 22,
    group: "group4",
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
  {
    id: 23,
    group: "group4",
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
    id: 24,
    group: "group5",
    question: "Which device is used to measure resistance?",
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
    id: 25,
    group: "group5",
    question: "What is the main function of a generator?",
    sinhalaQuestion: "ජෙනරේටරයේ ප්‍රධාන කාර්යය කුමක්ද?",
    answers: [
      "To convert mechanical energy to electrical energy (යාන්ත්‍රික ශක්තිය විදුලි ශක්තියට පරිවර්තනය කිරීම)",
      "To convert electrical energy to mechanical energy (විදුලි ශක්තිය යාන්ත්‍රික ශක්තියට පරිවර්තනය කිරීම)",
      "To store electrical energy (විදුලි ශක්තිය ගබඩා කිරීම)",
      "To amplify electrical signals (විදුලි සංඥා වර්ධනය කිරීම)",
      "To measure electrical power (විදුලි බලය මැනීම)"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    group: "group5",
    question: "Which component controls the flow of current by turning it on or off?",
    sinhalaQuestion: "ධාරාව නවතා හෝ ඇරීමට භාවිතා කරන කොටස කුමක්ද?",
    answers: [
      "Switch (ස්විච්)",
      "Resistor (ප්‍රතිරෝධකය)",
      "Capacitor (කැපැසිටරය)",
      "Inductor (ඉන්ඩක්ටරය)",
      "Transformer (ට්‍රාන්ස්ෆෝමරය)"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    group: "group5",
    question: "What is the function of a capacitor?",
    sinhalaQuestion: "කැපැසිටරයේ කාර්යය කුමක්ද?",
    answers: [
      "To resist current (ධාරාවට ප්‍රතිරෝධ වීම)",
      "To store electrical energy (විදුලි ශක්තිය ගබඩා කිරීම)",
      "To convert energy (ශක්තිය පරිවර්තනය කිරීම)",
      "To amplify signals (සංඥා වර්ධනය කිරීම)",
      "To measure voltage (වෝල්ටීයතාව මැනීම)"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    group: "group5",
    question: "Which device is used to measure electric current?",
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
    id: 29,
    group: "group5",
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
    id: 30,
    group: "group5",
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
  }
];