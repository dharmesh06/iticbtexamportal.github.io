// CBT Portal Data - Question Bank & Configuration

const TRADES = {
  CTS: [
    "Electrician", "Fitter", "Welder", "Turner", "Machinist",
    "Carpenter", "Plumber", "Painter (General)", "Mechanic (Motor Vehicle)",
    "Mechanic (Diesel)", "Wireman", "Electronic Mechanic", "Computer Operator and Programming Assistant (COPA)",
    "Draughtsman (Civil)", "Draughtsman (Mechanical)", "Surveyor", "Mason (Building Constructor)",
    "Sheet Metal Worker", "Mechanic (Refrigeration and Air Conditioning)", "Instrument Mechanic"
  ],
  CITS: [
    "Electrician", "Fitter", "Welder", "Turner", "Machinist",
    "Carpenter", "Plumber", "Electronic Mechanic", "COPA",
    "Draughtsman (Civil)", "Draughtsman (Mechanical)"
  ]
};

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const LANGUAGES = [
  "English", "Hindi", "Gujarati", "Marathi", "Tamil",
  "Telugu", "Kannada", "Malayalam", "Bengali", "Odia",
  "Punjabi", "Assamese", "Urdu"
];

const QUESTION_BANK = {
  "Electrician": [
    {
      id: 1, question: "What is the unit of electrical resistance?",
      options: ["Ampere", "Volt", "Ohm", "Watt"],
      correct: 2,
      explanation: "Ohm (Ω) is the SI unit of electrical resistance, named after Georg Simon Ohm."
    },
    {
      id: 2, question: "Which material is the best conductor of electricity?",
      options: ["Iron", "Copper", "Rubber", "Glass"],
      correct: 1,
      explanation: "Copper is one of the best conductors of electricity due to its low resistivity."
    },
    {
      id: 3, question: "According to Ohm's law, what is the relationship between Voltage (V), Current (I), and Resistance (R)?",
      options: ["V = I + R", "V = I × R", "V = I / R", "V = I - R"],
      correct: 1,
      explanation: "Ohm's law states V = I × R, where V is voltage, I is current, and R is resistance."
    },
    {
      id: 4, question: "What does RCD stand for in electrical systems?",
      options: ["Residual Current Device", "Resistance Control Device", "Relay Circuit Detector", "Regulated Current Driver"],
      correct: 0,
      explanation: "RCD stands for Residual Current Device, used as a safety device to prevent electric shock."
    },
    {
      id: 5, question: "What is the frequency of AC supply in India?",
      options: ["25 Hz", "50 Hz", "60 Hz", "100 Hz"],
      correct: 1,
      explanation: "The standard frequency of AC supply in India is 50 Hz (Hertz)."
    },
    {
      id: 6, question: "Which type of winding is used in a transformer?",
      options: ["Primary and Secondary", "Series and Parallel", "Input and Output", "AC and DC"],
      correct: 0,
      explanation: "A transformer has two windings: Primary (input side) and Secondary (output side)."
    },
    {
      id: 7, question: "What is the color code for the Earth wire in Indian electrical installations?",
      options: ["Red", "Black", "Green or Yellow-Green", "Blue"],
      correct: 2,
      explanation: "In Indian electrical standards, the Earth wire is identified by Green or Green/Yellow striped color."
    },
    {
      id: 8, question: "Which instrument is used to measure electrical resistance?",
      options: ["Ammeter", "Voltmeter", "Ohmmeter", "Wattmeter"],
      correct: 2,
      explanation: "An Ohmmeter is used to measure electrical resistance in a circuit."
    },
    {
      id: 9, question: "What is the formula for electrical power?",
      options: ["P = V/I", "P = V × I", "P = V + I", "P = I/V"],
      correct: 1,
      explanation: "Electrical power P = V × I, where V is voltage and I is current."
    },
    {
      id: 10, question: "A circuit breaker is used to:",
      options: ["Increase voltage", "Measure current", "Protect against overcurrent", "Convert AC to DC"],
      correct: 2,
      explanation: "A circuit breaker protects electrical circuits from damage caused by excess current."
    },
    {
      id: 11, question: "What type of motor is most commonly used in industrial applications?",
      options: ["DC Series Motor", "3-Phase Induction Motor", "Universal Motor", "Synchronous Motor"],
      correct: 1,
      explanation: "3-Phase Induction Motor is the most widely used motor in industrial applications due to its simplicity and reliability."
    },
    {
      id: 12, question: "Which law states that the algebraic sum of currents at a junction is zero?",
      options: ["Ohm's Law", "Faraday's Law", "Kirchhoff's Current Law", "Lenz's Law"],
      correct: 2,
      explanation: "Kirchhoff's Current Law (KCL) states that the algebraic sum of all currents at a node is zero."
    },
    {
      id: 13, question: "The insulation resistance of a new electrical installation should be at least:",
      options: ["0.5 MΩ", "1 MΩ", "2 MΩ", "10 MΩ"],
      correct: 1,
      explanation: "As per IS standards, the insulation resistance of a new installation should be at least 1 MΩ."
    },
    {
      id: 14, question: "What does MCB stand for?",
      options: ["Main Circuit Breaker", "Miniature Circuit Breaker", "Manual Control Box", "Multi Core Bus"],
      correct: 1,
      explanation: "MCB stands for Miniature Circuit Breaker, used to protect household and commercial circuits."
    },
    {
      id: 15, question: "Power factor is the ratio of:",
      options: ["True Power to Reactive Power", "Apparent Power to True Power", "True Power to Apparent Power", "Reactive Power to Apparent Power"],
      correct: 2,
      explanation: "Power factor = True Power (kW) / Apparent Power (kVA)."
    },
    {
      id: 16, question: "Which safety device melts to break the circuit?",
      options: ["MCB", "ELCB", "Fuse", "Switch"],
      correct: 2,
      explanation: "A fuse melts when excessive current flows, thereby breaking the circuit and protecting equipment."
    },
    {
      id: 17, question: "The standard voltage for a single-phase supply in India is:",
      options: ["110V", "220V", "415V", "440V"],
      correct: 1,
      explanation: "The standard single-phase supply voltage in India is 220V (230V with tolerance)."
    },
    {
      id: 18, question: "In a parallel circuit, the voltage across each component is:",
      options: ["Different", "Zero", "Same", "Doubled"],
      correct: 2,
      explanation: "In a parallel circuit, the voltage across all components connected in parallel is the same."
    },
    {
      id: 19, question: "What is the purpose of a capacitor in an electric circuit?",
      options: ["To store charge", "To generate electricity", "To convert AC to DC", "To increase resistance"],
      correct: 0,
      explanation: "A capacitor stores electrical charge and energy in an electric field."
    },
    {
      id: 20, question: "Which tool is used to join two copper wires by melting a filler metal?",
      options: ["Crimping tool", "Soldering iron", "Wire stripper", "Multimeter"],
      correct: 1,
      explanation: "A soldering iron is used to melt solder (a metal alloy) to join copper wires."
    }
  ],
  "Fitter": [
    {
      id: 1, question: "What is the purpose of a bench vice?",
      options: ["To cut metal", "To hold workpiece firmly", "To measure dimensions", "To drill holes"],
      correct: 1,
      explanation: "A bench vice is used to hold a workpiece firmly in place during machining or assembly operations."
    },
    {
      id: 2, question: "Which file has the coarsest cut?",
      options: ["Dead smooth", "Second cut", "Bastard", "Rough"],
      correct: 3,
      explanation: "A 'Rough' file has the coarsest teeth and is used for quick removal of material."
    },
    {
      id: 3, question: "What does 'tolerance' mean in engineering?",
      options: ["The size of the component", "The permissible variation in a measurement", "The material hardness", "The surface finish"],
      correct: 1,
      explanation: "Tolerance is the permissible variation in a dimension, allowing for manufacturing imperfections."
    },
    {
      id: 4, question: "A vernier caliper is used to measure:",
      options: ["Surface roughness", "Angle", "Length with high precision", "Hardness"],
      correct: 2,
      explanation: "A vernier caliper is a precision instrument used to measure lengths, diameters, and depths accurately."
    },
    {
      id: 5, question: "Which type of thread is used for power transmission?",
      options: ["V-thread", "Square thread", "Whitworth thread", "Metric thread"],
      correct: 1,
      explanation: "Square threads are used for power transmission due to their high efficiency."
    },
    {
      id: 6, question: "The taper of a Morse taper is approximately:",
      options: ["1:10", "1:16", "1:20", "1:50"],
      correct: 2,
      explanation: "Morse taper has a taper of approximately 1:20, meaning 1 unit of taper per 20 units of length."
    },
    {
      id: 7, question: "What type of fit allows for assembly and disassembly?",
      options: ["Interference fit", "Transition fit", "Clearance fit", "Press fit"],
      correct: 2,
      explanation: "Clearance fit allows easy assembly and disassembly as there is always a positive clearance between parts."
    },
    {
      id: 8, question: "A micrometer screw gauge measures up to an accuracy of:",
      options: ["0.1 mm", "0.01 mm", "0.001 mm", "1 mm"],
      correct: 1,
      explanation: "A standard micrometer screw gauge can measure to an accuracy of 0.01 mm."
    },
    {
      id: 9, question: "Which operation is used to create an internal thread?",
      options: ["Boring", "Tapping", "Drilling", "Reaming"],
      correct: 1,
      explanation: "Tapping is the operation used to cut internal (female) threads in a pre-drilled hole."
    },
    {
      id: 10, question: "The property of a material to resist permanent deformation is called:",
      options: ["Toughness", "Ductility", "Hardness", "Malleability"],
      correct: 2,
      explanation: "Hardness is the property of a material to resist permanent deformation, scratching, or penetration."
    },
    {
      id: 11, question: "A surface plate is used for:",
      options: ["Cutting metal", "Checking flatness and as reference surface", "Grinding", "Storing tools"],
      correct: 1,
      explanation: "A surface plate provides a flat reference surface for marking out and checking flatness of components."
    },
    {
      id: 12, question: "What is the helix angle of a standard drill?",
      options: ["15°", "20°", "24°", "30°"],
      correct: 2,
      explanation: "The standard helix angle of a twist drill is approximately 24° to 30°."
    },
    {
      id: 13, question: "Which material is used for making cutting tools?",
      options: ["Mild steel", "Cast iron", "High Speed Steel (HSS)", "Aluminium"],
      correct: 2,
      explanation: "High Speed Steel (HSS) is commonly used for making cutting tools due to its hardness and heat resistance."
    },
    {
      id: 14, question: "Go and No-go gauges are used to check:",
      options: ["Surface finish", "Whether a part is within specified limits", "Weight of components", "Material hardness"],
      correct: 1,
      explanation: "Go/No-go gauges check if a manufactured part falls within its specified dimensional limits."
    },
    {
      id: 15, question: "What is the purpose of a reamer?",
      options: ["To drill holes", "To finish and make holes accurate to size", "To cut threads", "To countersink holes"],
      correct: 1,
      explanation: "A reamer is used to finish a previously drilled hole to an accurate size and smooth finish."
    },
    {
      id: 16, question: "In BIS system, shaft basis system means:",
      options: ["Shaft size is fixed, hole varies", "Hole size is fixed, shaft varies", "Both vary", "Neither varies"],
      correct: 0,
      explanation: "In the shaft basis system (BIS), the shaft size (deviation) is fixed and the hole size varies."
    },
    {
      id: 17, question: "Which type of screw jack uses a square thread?",
      options: ["Hydraulic jack", "Mechanical screw jack", "Pneumatic jack", "Bottle jack"],
      correct: 1,
      explanation: "Mechanical screw jacks use square threads for efficient power transmission and self-locking."
    },
    {
      id: 18, question: "What does 'BHN' stand for in material testing?",
      options: ["Basic Hardness Number", "Brinell Hardness Number", "Brittle Hardness Notation", "Base Heat Number"],
      correct: 1,
      explanation: "BHN stands for Brinell Hardness Number, used to measure the hardness of materials."
    },
    {
      id: 19, question: "The function of a coolant during machining is to:",
      options: ["Increase hardness", "Reduce friction and heat, improve surface finish", "Add weight", "Change material structure"],
      correct: 1,
      explanation: "Coolant reduces friction and heat at the cutting zone and improves surface finish of the machined part."
    },
    {
      id: 20, question: "An 'H7/f7' is an example of:",
      options: ["Thread designation", "Fits and tolerances system", "Drill size", "Material grade"],
      correct: 1,
      explanation: "H7/f7 represents a fits and tolerances designation in the BIS system, where H7 is hole tolerance and f7 is shaft tolerance."
    }
  ],
  "Welder": [
    {
      id: 1, question: "What type of flame is used for welding mild steel?",
      options: ["Carburising flame", "Oxidising flame", "Neutral flame", "Reducing flame"],
      correct: 2,
      explanation: "A neutral flame (equal oxygen and acetylene) is used for welding mild steel."
    },
    {
      id: 2, question: "What does OAW stand for?",
      options: ["Open Air Welding", "Oxy-Acetylene Welding", "Overhead Arc Welding", "Orbital Arc Welding"],
      correct: 1,
      explanation: "OAW stands for Oxy-Acetylene Welding, a gas welding process."
    },
    {
      id: 3, question: "In arc welding, the electrode is made negative and workpiece is made positive in:",
      options: ["DCEP (Direct Current Electrode Positive)", "DCEN (Direct Current Electrode Negative)", "AC welding", "TIG welding"],
      correct: 1,
      explanation: "In DCEN, the electrode is negative (cathode) and workpiece is positive (anode)."
    },
    {
      id: 4, question: "What is porosity in a weld?",
      options: ["Cracks in weld", "Gas pockets trapped in the weld metal", "Incomplete fusion", "Undercut defect"],
      correct: 1,
      explanation: "Porosity is a weld defect characterized by gas pockets or voids trapped within the weld metal."
    },
    {
      id: 5, question: "Which shielding gas is used in MIG welding of mild steel?",
      options: ["Pure Argon", "Pure Helium", "CO2 or Argon+CO2 mixture", "Oxygen"],
      correct: 2,
      explanation: "MIG welding of mild steel typically uses CO2 or a mixture of Argon and CO2 as shielding gas."
    },
    {
      id: 6, question: "What is the purpose of flux in welding?",
      options: ["To add strength", "To prevent oxidation and clean the weld area", "To increase temperature", "To cool the weld"],
      correct: 1,
      explanation: "Flux prevents oxidation of the molten metal and helps clean the weld area during welding."
    },
    {
      id: 7, question: "The welding position where the welding is done from below is called:",
      options: ["Flat position", "Horizontal position", "Vertical position", "Overhead position"],
      correct: 3,
      explanation: "In the overhead position, the welder works beneath the joint, which is the most difficult position."
    },
    {
      id: 8, question: "What is the current range for welding a 3mm mild steel plate with an E6013 electrode (3.15mm)?",
      options: ["50-70A", "80-130A", "150-200A", "200-250A"],
      correct: 1,
      explanation: "For a 3.15mm E6013 electrode, the typical current range is 80-130 Amperes."
    },
    {
      id: 9, question: "Which defect is caused by inadequate penetration of the weld into the base metal?",
      options: ["Undercut", "Incomplete penetration", "Overlap", "Spatter"],
      correct: 1,
      explanation: "Incomplete penetration occurs when the weld metal does not fully penetrate through the joint thickness."
    },
    {
      id: 10, question: "TIG welding uses which type of electrode?",
      options: ["Consumable electrode", "Non-consumable tungsten electrode", "Coated electrode", "Wire electrode"],
      correct: 1,
      explanation: "TIG (Tungsten Inert Gas) welding uses a non-consumable tungsten electrode."
    },
    {
      id: 11, question: "What is preheating in welding?",
      options: ["Cooling the weld after welding", "Heating the base metal before welding to avoid cracks", "Heating the electrode", "Heating flux"],
      correct: 1,
      explanation: "Preheating involves heating the base metal before welding to reduce thermal stress and prevent cracking."
    },
    {
      id: 12, question: "The safe oxygen cylinder pressure is maintained at:",
      options: ["100 psi", "150 psi", "2000 psi", "3000 psi"],
      correct: 2,
      explanation: "Oxygen cylinders are typically stored at a pressure of about 2000 psi (at full capacity)."
    },
    {
      id: 13, question: "What PPE is essential for a welder?",
      options: ["Only gloves", "Only helmet", "Welding helmet, gloves, and protective clothing", "Only goggles"],
      correct: 2,
      explanation: "A welder must use a welding helmet, leather gloves, and fire-resistant protective clothing as minimum PPE."
    },
    {
      id: 14, question: "An undercut in a weld is:",
      options: ["Extra weld metal", "A groove melted into the base metal along the weld edge", "A crack in the weld", "Excessive penetration"],
      correct: 1,
      explanation: "Undercut is a groove or depression melted into the base metal at the edge of the weld bead."
    },
    {
      id: 15, question: "What does SMAW stand for?",
      options: ["Sub-Merged Arc Welding", "Shielded Metal Arc Welding", "Stainless Metal Arc Welding", "Spot Metal Arc Welding"],
      correct: 1,
      explanation: "SMAW stands for Shielded Metal Arc Welding, also known as stick welding."
    },
    {
      id: 16, question: "The distortion in welding is mainly caused by:",
      options: ["Cold temperature", "Expansion and contraction due to heating and cooling", "Use of wrong electrode", "High current"],
      correct: 1,
      explanation: "Welding distortion is caused by uneven expansion during heating and contraction during cooling of the metal."
    },
    {
      id: 17, question: "Which welding process is most suitable for thin sheets?",
      options: ["SMAW", "SAW", "MIG/MAG", "TIG"],
      correct: 3,
      explanation: "TIG welding is most suitable for thin sheets due to its precise heat control and clean welds."
    },
    {
      id: 18, question: "What is the duty cycle of a welding machine?",
      options: ["Current output per hour", "Percentage of time it can weld in a 10-minute period", "Voltage per welding run", "Number of welds per day"],
      correct: 1,
      explanation: "Duty cycle is the percentage of a 10-minute period that a welding machine can operate at a rated current."
    },
    {
      id: 19, question: "Ac welding machine works on the principle of:",
      options: ["DC Motor", "Step-up transformer", "Step-down transformer", "AC Generator"],
      correct: 2,
      explanation: "AC arc welding machines use a step-down transformer to reduce voltage and increase current for welding."
    },
    {
      id: 20, question: "What is the function of the regulator in gas welding?",
      options: ["To store gas", "To reduce and regulate gas pressure", "To mix gases", "To ignite the flame"],
      correct: 1,
      explanation: "The regulator reduces the high cylinder pressure to a suitable working pressure and maintains it steady."
    }
  ],
  "COPA": [
    {
  "id": 1,
  "question": "In which sequence computer operates?",
  "options": [
    "Input, output, process",
    "Input, process, output",
    "Process, input, output",
    "Output, process, input"
  ],
  "correct": 1,
  "explanation": "Computers follow the IPO (Input-Process-Output) cycle: receiving data, processing it, and producing results."
},
{
  "id": 2,
  "question": "How does parallel port transfer a byte?",
  "options": [
    "Bit by bit",
    "2 bits at a time",
    "4 bits at a time",
    "8 bits at a time"
  ],
  "correct": 3,
  "explanation": "A parallel port transfers 8 bits (1 byte) simultaneously over 8 separate wires."
},
{
  "id": 3,
  "question": "Which is an internal power supply unit of CPU?",
  "options": [
    "CVT",
    "UPS",
    "SMPS",
    "Stabilizer"
  ],
  "correct": 2,
  "explanation": "SMPS (Switched Mode Power Supply) converts AC power from the wall outlet to the low-voltage DC power required by computer components."
},
{
  "id": 4,
  "question": "What is the purpose of expansion slot in mother board?",
  "options": [
    "To insert the RAM",
    "To insert the mouse",
    "To insert the keyboard",
    "To insert the additional peripherals"
  ],
  "correct": 3,
  "explanation": "Expansion slots allow users to add additional hardware capabilities like graphics cards, sound cards, or network cards."
},
{
  "id": 5,
  "question": "Which factor influences the severity of electrical shock?",
  "options": [
    "Very low DC voltage",
    "Duration of current passing",
    "Level of current in micro ampere",
    "Person receiving the shock"
  ],
  "correct": 1,
  "explanation": "The duration of current passing through the body significantly determines the extent of tissue damage and physical harm."
},
{
  "id": 6,
  "question": "What is the full form of ABC in first aid?",
  "options": [
    "Anyway, Breathing, Circulation",
    "Airway, Breathing, Circulation",
    "Anyway, Blood, Circulation",
    "Airway, Blood, Chest"
  ],
  "correct": 1,
  "explanation": "ABC stands for Airway, Breathing, and Circulation, the three vital steps in emergency medical response."
},
{
  "id": 7,
  "question": "What is the full form of ALU?",
  "options": [
    "Allowed Logic Unit",
    "Ascii Logic Unit",
    "Arithmetic-Logic Unit",
    "Arithmetic Least Unit"
  ],
  "correct": 2,
  "explanation": "The Arithmetic Logic Unit (ALU) is the part of the CPU that performs all arithmetic (addition, subtraction) and logic operations."
},
{
  "id": 8,
  "question": "What is current?",
  "options": [
    "Flow of Neutrons",
    "Flow of Electrons",
    "Flow of Protons",
    "Flow of Resistance"
  ],
  "correct": 1,
  "explanation": "Electric current is defined as the flow of electrons through a conductor."
},
{
  "id": 9,
  "question": "Which is an arm lift back pressure method?",
  "options": [
    "Mouth to mouth method",
    "Mouth to nose method",
    "Nielsen's method",
    "Schafer's method"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Nielsen's method'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 10,
  "question": "What is a desktop and personal computer also called?",
  "options": [
    "Super Computer",
    "Quantum Computer",
    "Mainframe Computer",
    "Micro Computer"
  ],
  "correct": 3,
  "explanation": "Microcomputers are small, relatively inexpensive computers designed for individual use."
},
{
  "id": 11,
  "question": "What is the full form of SSD?",
  "options": [
    "Signal State Drive",
    "Solid State Drive",
    "Single Signal Drive",
    "Solid Signal Drive"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Solid State Drive'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 12,
  "question": "What is the first action to be taken incase of an electric shock?",
  "options": [
    "Call to doctor",
    "Take support to others",
    "Switch OFF the electric power",
    "Call to ambulance"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Switch OFF the electric power'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 13,
  "question": "Which is an example for OS?",
  "options": [
    "Antivirus",
    "Windows",
    "MS Office",
    "Macromedia"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Windows'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 14,
  "question": "Which Control Panel applet gives information about the computer?",
  "options": [
    "System and security",
    "Hardware and sound",
    "Programs",
    "Appearance and personalization"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'System and security'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 15,
  "question": "Which shortcut key is copy paste a file folder?",
  "options": [
    "Ctrl+ X and Ctrl + V",
    "Ctrl + A and Ctrl + V",
    "Ctrl + Z and Ctrl + V",
    "Ctrl + C and Ctrl + V"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Ctrl + C and Ctrl + V'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 16,
  "question": "What is the other name for PDoS? 2.0 0.00",
  "options": [
    "Brute force attack",
    "Non-technical attack",
    "Phlashing",
    "Smurf attack"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Phlashing'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 17,
  "question": "Where do pinned application stay in Windows OS?",
  "options": [
    "Desktop",
    "Notification Area",
    "Title bar",
    "Task Bar"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Task Bar'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 18,
  "question": "What is the extension of Notepad file?",
  "options": [
    ".fil",
    ".dll",
    ".doc",
    ".txt"
  ],
  "correct": 3,
  "explanation": "The correct answer is '.txt'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 19,
  "question": "What is the name of the tool in control panel is used to adjust your computer setting with voice command?",
  "options": [
    "Ease of access",
    "System and security",
    "Appearance and personalization",
    "Hardware and sound"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Ease of access'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 20,
  "question": "Which shortcut key is used to open start menu?",
  "options": [
    "Windows Logo",
    "Ctrl",
    "Shift",
    "Alt"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Windows Logo'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 21,
  "question": "What type of device is a printer?",
  "options": [
    "Input Device",
    "Output Device",
    "Processing Device",
    "Calculating Device"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Output Device'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 22,
  "question": "What is the function of operating system?",
  "options": [
    "Word processing",
    "Calculation",
    "Process and memory management",
    "Drawing pictures"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Process and memory management'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 23,
  "question": "In which icon deleted files and folders are found?",
  "options": [
    "My Computer",
    "Recycle Bin",
    "Microsoft Edge",
    "Google Chrome"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Recycle Bin'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 24,
  "question": "Which control panel is used to change the system date?",
  "options": [
    "User Account",
    "System",
    "Date and Time",
    "Fonts"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Date and Time'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 25,
  "question": "Which shortcut key refeshes Windows desktop?",
  "options": [
    "F1",
    "F3",
    "F5",
    "F7"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'F5'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 26,
  "question": "What type of device is a scanner?",
  "options": [
    "Processing Device",
    "Internal Device",
    "Output Device",
    "Input Device"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Input Device'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 27,
  "question": "What type of copy is produced by printer?",
  "options": [
    "Hard Copy",
    "Soft Copy",
    "Scan Copy",
    "Xerox Copy"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Hard Copy'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 28,
  "question": "What is the standard file extension of scan image?",
  "options": [
    ".exe",
    ".doc",
    ".bak",
    ".jpg"
  ],
  "correct": 3,
  "explanation": "The correct answer is '.jpg'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 29,
  "question": "What is the capacity of a typical DVD?",
  "options": [
    "40 MB",
    "50 MB",
    "60 MB",
    "4.7 GB"
  ],
  "correct": 3,
  "explanation": "The correct answer is '4.7 GB'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 30,
  "question": "What is BIOS?",
  "options": [
    "Firmware",
    "Hardware",
    "Middleware",
    "Software"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Firmware'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 31,
  "question": "What is the purpose of Nero Start Smart?",
  "options": [
    "Format HDD",
    "Burn CD/DVD",
    "Format pen drive",
    "Format CD/DVD"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Burn CD/DVD'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 32,
  "question": "Which system is used by Bluetooth for Broadcasting?",
  "options": [
    "Satellite",
    "Microwaves",
    "Telephone lines",
    "Radio waves"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Radio waves'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 33,
  "question": "What is the process of deleting all the data on the hard drive?",
  "options": [
    "Delete",
    "Erase",
    "Formatting",
    "Uninstall"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Formatting'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 34,
  "question": "Which port is use to connect monitor to CPU?",
  "options": [
    "PS2",
    "Parallel port",
    "LAN",
    "VGA"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'VGA'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 35,
  "question": "What do statistical analysis packages have much in common with?",
  "options": [
    "Presentation packages",
    "Apreadsheet packages",
    "Design packages",
    "Paint packages"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Apreadsheet packages'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 36,
  "question": "Which software interfaces the major hardware components of the computer with the OS?",
  "options": [
    "BIOS",
    "DOS",
    "POST",
    "CMOS"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'BIOS'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 37,
  "question": "Which software acts as a bridge between system software and hardware?",
  "options": [
    "Management",
    "Application",
    "Utility",
    "Processing"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Application'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 38,
  "question": "Which virus infects important files of the application software?",
  "options": [
    "Macro Virus",
    "Trojan Virus",
    "Worm Virus",
    "Anti Virus"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Macro Virus'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 39,
  "question": "Which DOS command deletes a directory?",
  "options": [
    "RD",
    "REMOVE",
    "DEL",
    "DELETE"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'RD'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 40,
  "question": "Which character represents parent directory in Linux?",
  "options": [
    ".",
    "..",
    "~",
    "*"
  ],
  "correct": 1,
  "explanation": "The correct answer is '..'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 41,
  "question": "Which character redirects output into an existing file in Linux?",
  "options": [
    ">",
    ">=",
    "<",
    "<<"
  ],
  "correct": 0,
  "explanation": "The correct answer is '>'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 42,
  "question": "What are the directories under the root directory are called?",
  "options": [
    "dir",
    "path",
    "sub directories",
    "tree"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'sub directories'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 43,
  "question": "Which file name matches the command DIR????T.TxT in DOS?",
  "options": [
    "TIME . TXT",
    "TEXT . TXT",
    "TEMP . TXT",
    "TEMPT . TxT"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'TEMPT . TxT'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 44,
  "question": "Which is a wildcard character?",
  "options": [
    "* and /",
    "? and /",
    "* and ?",
    "? and @"
  ],
  "correct": 2,
  "explanation": "The correct answer is '* and ?'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 45,
  "question": "Which character represents a range of values in Linux?",
  "options": [
    "( )",
    "[ ]",
    "{ }",
    "< >"
  ],
  "correct": 1,
  "explanation": "The correct answer is '[ ]'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 46,
  "question": "Who developed the Python language?",
  "options": [
    "Zim Den",
    "Guido van Rossum",
    "Niene Stom",
    "Wick van Rossum"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Guido van Rossum'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 47,
  "question": "Which multimedia application was developed using Python?",
  "options": [
    "Matplotlib",
    "Pandas",
    "Tryton",
    "TimPlayer"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'TimPlayer'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 48,
  "question": "Which character gives single-line comments in Python?",
  "options": [
    "//",
    "#",
    "!",
    "/*"
  ],
  "correct": 1,
  "explanation": "The correct answer is '#'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 49,
  "question": "What is the data type of print (type(0xFF))?",
  "options": [
    "number",
    "hexint",
    "hex",
    "int"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'int'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 50,
  "question": "Which keyword adds an alternative condition to an if statement?",
  "options": [
    "else if",
    "elseif",
    "elif",
    "if else"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'elif'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 51,
  "question": "To be in a job or work is ______",
  "options": [
    "Employ",
    "Skill",
    "Knowledge",
    "Aptitude"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Employ'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 52,
  "question": "Information like date of birth, permanent address form a part of one\u2019s ______ in the resume.",
  "options": [
    "Career objectives",
    "Personal details",
    "Achievements",
    "Qualifications"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Personal details'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 53,
  "question": "A person with a growth mindset is always willing to ______",
  "options": [
    "relax",
    "grow, change, learn",
    "keep quiet",
    "become rich"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'grow, change, learn'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 54,
  "question": "Jobs that have become outdated in the past 5 years _____",
  "options": [
    "STD booth",
    "ola",
    "uber",
    "swiggy"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'STD booth'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 55,
  "question": "Ethics means ______",
  "options": [
    "decide what is right and wrong for a human conduct",
    "name of a city",
    "employability skills",
    "not relevant to society"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'decide what is right and wrong for a human conduct'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 56,
  "question": "Values are ______",
  "options": [
    "not punctual",
    "Motivates our attitude and action",
    "very costly",
    "all have same value"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Motivates our attitude and action'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 57,
  "question": "________ is a brief statement about purpose and principles of the Constitution.",
  "options": [
    "Syllabus",
    "Module",
    "The Preamble",
    "Unit"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'The Preamble'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 58,
  "question": "Identify the improper term ______",
  "options": [
    "green pollution",
    "water pollution",
    "air pollution",
    "sound pollution"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'green pollution'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 59,
  "question": "NAPS Stands for _______",
  "options": [
    "National Apprenticeship Promotion Scheme",
    "National Appointment Promoting Scheme",
    "Non Apprenticeship Promotion Scheme",
    "National Advertising Promotion Scheme"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'National Apprenticeship Promotion Scheme'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 60,
  "question": "_______ is major changes takes place in manufacturing.",
  "options": [
    "Green revolution",
    "Industry revolution",
    "Water revolution",
    "Food revolution"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Industry revolution'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 61,
  "question": "1st industrial revolution started in ______ 2.0 0.00",
  "options": [
    "18th century",
    "19th century",
    "20th century",
    "21st century"
  ],
  "correct": 0,
  "explanation": "The correct answer is '18th century'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 62,
  "question": "Hard Skill ______",
  "options": [
    "quick learner",
    "time management",
    "60 WPM typing speed",
    "spoken English"
  ],
  "correct": 2,
  "explanation": "The correct answer is '60 WPM typing speed'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 63,
  "question": "To grow yourself you must ______",
  "options": [
    "know your office",
    "know yourself",
    "know your institute",
    "know your country"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'know yourself'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 64,
  "question": "Time management ______",
  "options": [
    "complete your task on time",
    "managing time",
    "hard skill",
    "problem solving"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'complete your task on time'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 65,
  "question": "A resume should be ___________. 2.0 0.00",
  "options": [
    "short and precise",
    "fancy and colourful",
    "having long and detailed information",
    "having acronyms and abbreviation"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'short and precise'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 66,
  "question": "A written description of duties and responsibilities to be carried out in a job is called ___________.",
  "options": [
    "CV",
    "job description",
    "resume",
    "job application"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'job description'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 67,
  "question": "After receiving interview call, what is the next step?",
  "options": [
    "Send application letter",
    "Prepare the resume",
    "Appear at interview",
    "Send resume"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Appear at interview'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 68,
  "question": "Choose suitable \u201cwh\u201d word for the given sentence. \u201c___________ animal do you like?\u201d",
  "options": [
    "Which",
    "Why",
    "Where",
    "When"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Which'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 69,
  "question": "Choose the correct punctuation mark after the word \u201cRohan\u201d in the given sentence. \u201cRohan David and Ram are playing hide and",
  "options": [
    "Comma (,)",
    "Period (_)",
    "Slash (/)",
    "Hyphen (-)"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Comma (,)'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 70,
  "question": "Choose the correct response for the given question. \u201cHow have you been\u201d?",
  "options": [
    "Very well, And you?",
    "Thank you_ And you?",
    "Same to you",
    "On vacation_ And you?"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Very well, And you?'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 71,
  "question": "Choose the correct response of the given question. \u201cWhen did the accident happen\u201d?",
  "options": [
    "in the hotel",
    "during travelling",
    "At 10:30 last night",
    "On the table"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'At 10:30 last night'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 72,
  "question": "Choose the correct tense of the verb. \u201cI __________ music when I was child\u201d",
  "options": [
    "learn",
    "am learning",
    "will learn",
    "had learnt"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'had learnt'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 73,
  "question": "Curriculum vitae is also known as ___________ .",
  "options": [
    "circular",
    "resume",
    "job application form",
    "leave application"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'resume'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 74,
  "question": "Fill in the blank with comparative adjective. \u201cYour pencil is __________ than mine\u201d",
  "options": [
    "sharp",
    "sharper",
    "blunt",
    "thick"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'sharper'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 75,
  "question": "Fill in the blank with correct future tense of verb. \u201cWe ___________ to the zoo after Breakfast \u201c",
  "options": [
    "went",
    "are going",
    "had gone",
    "will go"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'will go'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 76,
  "question": "Which is open source software?",
  "options": [
    "Open Office",
    "Windows 10",
    "MacOs",
    "Microsoft Office 365"
  ],
  "correct": 0,
  "explanation": "Open Office is open-source software, meaning its source code is available for anyone to study, change, and distribute."
},
{
  "id": 77,
  "question": "Which command remove files in Linux?",
  "options": [
    "delete",
    "rm",
    "dm",
    "erase"
  ],
  "correct": 1,
  "explanation": "The 'rm' command in Linux is used to remove (delete) files or directories."
},
{
  "id": 78,
  "question": "What is the first option of the KDE desktop in Linux?",
  "options": [
    "Preference",
    "Application",
    "System",
    "System setting"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Application'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 79,
  "question": "What is the full form of OSS?",
  "options": [
    "Open System Service",
    "Open Source Software",
    "Open System Software",
    "Open Synchronized Software"
  ],
  "correct": 1,
  "explanation": "OSS stands for Open Source Software, which is software with source code that anyone can inspect, modify, and enhance."
},
{
  "id": 80,
  "question": "Which software coding is freely available on the internet and open for users for further use?",
  "options": [
    "Unlicensed software",
    "Open source software",
    "Free software",
    "Community software"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Open source software'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 81,
  "question": "What is the full form of FSF?",
  "options": [
    "File Server First",
    "Free Software File",
    "Free Software Foundation",
    "First Software First"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Free Software Foundation'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 82,
  "question": "Which command stores the active document permanently?",
  "options": [
    "Save",
    "Send",
    "Prepare",
    "Save as"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Save'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 83,
  "question": "Which bar contains the current position of the cursor in MS Word?",
  "options": [
    "Layout",
    "Title bar",
    "Status bar",
    "Horizontal ruler"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Status bar'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 84,
  "question": "Which is a text styling feature of MS Word?",
  "options": [
    "Word fill",
    "Word art",
    "Word colour",
    "Word font"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Word art'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 85,
  "question": "Which document view resembles the appearance of a web browser?",
  "options": [
    "Draft view",
    "Outline view",
    "Web layout view",
    "Full screen reading"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Web layout view'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 86,
  "question": "What is the purpose of quick access toolbar?",
  "options": [
    "To hold advance function",
    "To hold special function",
    "To hold basic function",
    "To hold familiar and repeated function"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'To hold familiar and repeated function'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 87,
  "question": "What is the purpose of gutter margin?",
  "options": [
    "Added to left margin when printing",
    "Added to right margin when printing",
    "Added to binding side of page when printing",
    "Added to the outside of page when printing"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Added to binding side of page when printing'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 88,
  "question": "Which option is used for tab setting?",
  "options": [
    "Horizontal ruler",
    "Status bar",
    "Vertical ruler",
    "Vertical scroll bar"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Horizontal ruler'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 89,
  "question": "What is the purpose of cover page?",
  "options": [
    "Allows to fill title, author and date",
    "Fills list of people intent to mail",
    "To view the mailed list",
    "Contains details of the documents"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Allows to fill title, author and date'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 90,
  "question": "Which term refers to the process of combining two or more cells to make one?",
  "options": [
    "Combining",
    "Joining",
    "Merging",
    "Creating"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Merging'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 91,
  "question": "What has the ability to combine name and addresses within standard document?",
  "options": [
    "Document formatting",
    "Mail merge",
    "Database management",
    "Form letters"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Mail merge'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 92,
  "question": "Which shortcut key center aligns the selected text in MS Word?",
  "options": [
    "Ctrl + C",
    "Ctrl + D",
    "Ctrl + E",
    "Ctrl + F"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Ctrl + E'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 93,
  "question": "What is the purpose of Shift+Ctrl+N in Open Office?",
  "options": [
    "To create a new document",
    "To open a document",
    "To open templates and documents dialog",
    "To exit an application"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'To open templates and documents dialog'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 94,
  "question": "How can you insert a audio file in your word document?",
  "options": [
    "Insert > sound menu option",
    "Insert > file menu option",
    "Insert > object menu option",
    "Insert > blank menu"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Insert > object menu option'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 95,
  "question": "How are individuals in a table referred to as?",
  "options": [
    "cells",
    "boxes",
    "rows",
    "columns"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'cells'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 96,
  "question": "Which MS word tab has acess to mail merge options?",
  "options": [
    "Insert tab",
    "References tab",
    "Home tab",
    "Mailings tab"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Mailings tab'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 97,
  "question": "Which is a default document type for a mail merge?",
  "options": [
    "Data",
    "Labels and list",
    "Letters",
    "Set"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Letters'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 98,
  "question": "Which shortcut key prints a document?",
  "options": [
    "Ctrl + V",
    "Ctrl + X",
    "Ctrl + P",
    "Ctrl + B"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Ctrl + P'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 99,
  "question": "Which key copies the selected items in open source office?",
  "options": [
    "Ctrl + O",
    "Ctrl + C",
    "Ctrl + P",
    "Ctrl + Shift + C"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Ctrl + C'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 100,
  "question": "Which list is used to create multiple copies of a document in a mail merge?",
  "options": [
    "Main document",
    "Data source",
    "Form label",
    "Database"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Data source'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 101,
  "question": "Which is a step of merge process?",
  "options": [
    "Preview the merge results",
    "Set margin of the document",
    "Format data source",
    "Remove data sources"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Preview the merge results'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 102,
  "question": "How Cells are named in MS Excel?",
  "options": [
    "Alphabetically",
    "Numerically",
    "Alphanumerically",
    "Special Character"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Alphanumerically'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 103,
  "question": "What is the maximum limit of rows in MS Excel 2010?",
  "options": [
    "1084567",
    "1048567",
    "1048576",
    "1084576"
  ],
  "correct": 2,
  "explanation": "The correct answer is '1048576'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 104,
  "question": "Which tab adds pivot table, charts and hyperlinks in a spread sheet?",
  "options": [
    "Insert",
    "Page Layout",
    "Data",
    "Review"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Insert'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 105,
  "question": "Which Excel tab is used for importing, outlining and subtotalling the data placed in a worksheet data list?",
  "options": [
    "Formula",
    "Data",
    "Review",
    "Insert"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Data'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 106,
  "question": "Which key combined with ctrl key creates a macro key in Excel?",
  "options": [
    "Numeric",
    "Alphabetic",
    "Alphanumeric",
    "Special characters"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Alphabetic'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 107,
  "question": "Which function key opens save as dialogue box in MS Excel?",
  "options": [
    "F2",
    "F5",
    "F7",
    "F12"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'F12'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 108,
  "question": "Which starts with \u201c=\u201d sign in Excel 2010?",
  "options": [
    "Data",
    "Text",
    "Numbers",
    "Formulas"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Formulas'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 109,
  "question": "Which function counts the number of cells that contains numbers in a range?",
  "options": [
    "Count( )",
    "Countif( )",
    "Sum( )",
    "Sumif( )"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Count( )'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 110,
  "question": "Which is a \u2018Date and Time\u2019 function in Excel?",
  "options": [
    "FIND( )",
    "MOD( )",
    "NOW( )",
    "MID( )"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'NOW( )'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 111,
  "question": "Which option displays the rows that meet certain conditions in MS Excel?",
  "options": [
    "Find",
    "Filter",
    "Format",
    "Sort"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Filter'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 112,
  "question": "Which command converts cell text to CAPS?",
  "options": [
    "=UPPER( )",
    "=LOWER( )",
    "=LEN( )",
    "=TRIM( )"
  ],
  "correct": 0,
  "explanation": "The correct answer is '=UPPER( )'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 113,
  "question": "How to insert chart in MS Excel?",
  "options": [
    "Home Tab-Cells",
    "Insert Tab-Charts",
    "Data Tab- Data Tools",
    "Formulas Tab-Insert Function"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Insert Tab-Charts'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 114,
  "question": "Which ribbon menu displays the Page Setup grouping of commands?",
  "options": [
    "Insert",
    "Layout",
    "Review",
    "Home"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Layout'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 115,
  "question": "In which application data validation is used?",
  "options": [
    "MS Excel",
    "MS Word",
    "MS Power Point",
    "Paint"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'MS Excel'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 116,
  "question": "Which type of chart is used in MS Excel?",
  "options": [
    "Bubble",
    "Cone",
    "Circle",
    "Square"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Bubble'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 117,
  "question": "Which creates a bar diagram?",
  "options": [
    "Format - > Chart",
    "Tools - > Chart",
    "Insert - > Chart",
    "Edit - > Chart"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Insert - > Chart'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 118,
  "question": "Which option inserts a Pivot Table?",
  "options": [
    "Formula Tab- Data Analysis Group",
    "Insert Tab - Tables Group",
    "Data Group in the Pivot Table Group",
    "Data Group In the Tables Group"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Insert Tab - Tables Group'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 119,
  "question": "Which tab is used to access the What-if Analysis Excel tools?",
  "options": [
    "Home Tab",
    "Insert Tab",
    "Pay Layout Tab",
    "Data Tab"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Data Tab'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 120,
  "question": "Which type does Portrait and Landscape belongs to?",
  "options": [
    "Page Margins",
    "Page Arrangements",
    "Page Orientation",
    "Page Breaks"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Page Orientation'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 121,
  "question": "What will be the output of the following Python code snippet if x=1?",
  "options": [
    "4",
    "2",
    "1",
    "8"
  ],
  "correct": 0,
  "explanation": "The correct answer is '4'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 122,
  "question": "How to declare an array in python?",
  "options": [
    "brackets [ ]",
    "parenthesis ( )",
    "curly braces { }",
    "pipes | |"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'brackets [ ]'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 123,
  "question": "Which Program code makes use of the given module?",
  "options": [
    "Client",
    "Interface",
    "Docstring",
    "Modularity"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Client'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 124,
  "question": "Which command displays numbers and text on the screen?",
  "options": [
    "print ( )",
    "input ( )",
    "output ( )",
    "command ( )"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'print ( )'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 125,
  "question": "Which is a core data type in Python programming?",
  "options": [
    "Package",
    "List",
    "Class",
    "Object"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'List'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 126,
  "question": "Fill in the blank with correct word. \u201cThey _________ good friends\u201d",
  "options": [
    "is",
    "am",
    "are",
    "was"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'are'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 127,
  "question": "Fill in the blank with present progressive tense of the verb. \u201cThe train __________ through the tunnel\u201d",
  "options": [
    "passed",
    "is passing",
    "had passed",
    "was passing"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'is passing'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 128,
  "question": "Fill in the blank with proper interrogative adjective. ___________ are you going?",
  "options": [
    "Who",
    "Where",
    "Which",
    "What"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Where'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 129,
  "question": "Fill in the blank with proper pronoun. \u201cI made this cake ___________\u201d",
  "options": [
    "myself",
    "yourself",
    "himself",
    "itself"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'myself'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 130,
  "question": "Fill in the blank with proper pronoun. \u201cShe made this cake ___________\u201d",
  "options": [
    "itself",
    "myself",
    "herself",
    "himself"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'herself'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 131,
  "question": "Fill in the blank with proper reflexive pronoun. \u201cShe has hurt___________\u201d",
  "options": [
    "myself",
    "herself",
    "himself",
    "itself"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'herself'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 132,
  "question": "Fill in the blank with suitable adjective for the given sentence \u201cThe little girl\u2019s\u2026\u2026 eyes revealed her mischief\u201d",
  "options": [
    "chubby",
    "weak",
    "short sighted",
    "twinkling"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'twinkling'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 133,
  "question": "Fill in the blank with suitable place preposition. \u201cMy house is ___________ the third floor\u201d",
  "options": [
    "at",
    "in",
    "on",
    "under"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'on'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 134,
  "question": "Fill in the correct question word. \u201c_______________ is the speaker at the function?\u201d",
  "options": [
    "What",
    "When",
    "Why",
    "Who"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Who'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 135,
  "question": "Low level language is also called ______.",
  "options": [
    "source code",
    "middle ware",
    "machine language",
    "assembly language"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'machine language'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 136,
  "question": "Pronunciation refers to___________.",
  "options": [
    "diphthong",
    "consonant",
    "punctuation",
    "production of sound"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'production of sound'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 137,
  "question": "Re-arrange the following set of words into meaningful sentence. \u201cteacher / school / worked / she / a / as\u201d.",
  "options": [
    "School worked as a she teacher",
    "She worked as a school teacher",
    "She teacher worked as a school",
    "Worked she as a school teacher"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'She worked as a school teacher'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 138,
  "question": "Rise and fall of pitch of voice is called __________.",
  "options": [
    "vowel",
    "intonation",
    "consonant",
    "pronunciation"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'intonation'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 139,
  "question": "The word that expresses a sudden and strong feeling is called _________.",
  "options": [
    "punctuation",
    "interjection",
    "conjunction",
    "apostrophe"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'interjection'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 140,
  "question": "When you greet higher official\u2019s such as Teacher, Instructor or Supervisor, you should use ___________.",
  "options": [
    "Good morning",
    "Hello",
    "Hey",
    "Hi"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Good morning'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 141,
  "question": "Which is a silent letter in the word \u201cANSWER\u201d?",
  "options": [
    "R",
    "E",
    "S",
    "W"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'W'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 142,
  "question": "Which one is a \u201cDo\u2019s\u201d of discussion etiquettes?",
  "options": [
    "Loose your temper",
    "Listen to others",
    "Talk about irrelevant details",
    "Use impolite or rude language"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Listen to others'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 143,
  "question": "Which one is a \u201cDon\u2019t\u201d of discussion etiquette?",
  "options": [
    "Be open minded",
    "Use moderate tone",
    "Listen to others",
    "Argue unnecessary"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Argue unnecessary'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 144,
  "question": "Which one is a brain of computer?",
  "options": [
    "Keyboard",
    "CPU",
    "Monitor",
    "Hard disk"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'CPU'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 145,
  "question": "Which one is an exclamatory sentence?",
  "options": [
    "What a beautiful house it is!",
    "It is a beautiful house.",
    "Is it a beautiful house?",
    "Your house is beautiful."
  ],
  "correct": 0,
  "explanation": "The correct answer is 'What a beautiful house it is!'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 146,
  "question": "Which one is in active voice? 2.0 0.00",
  "options": [
    "Ram has passed the exam.",
    "The ball was caught by him.",
    "The book was being read by her.",
    "We were driven home by dad."
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Ram has passed the exam.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 147,
  "question": "Which one is in passive voice?",
  "options": [
    "Mohan is painting a house.",
    "She was reading a book.",
    "Her birthday was celebrated by us.",
    "I have seen that movie."
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Her birthday was celebrated by us.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 148,
  "question": "Which one is NOT a conjunction?",
  "options": [
    "And",
    "Or",
    "But",
    "On"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'On'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 149,
  "question": "Which one is NOT a benefit of the role playing?",
  "options": [
    "Builds confidence",
    "Develops listening skill",
    "Develops creative problem-solving skill",
    "Develops boredom"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Develops boredom'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 150,
  "question": "Which one is NOT a vowel?",
  "options": [
    "a",
    "e",
    "f",
    "i"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'f'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 151,
  "question": "Which setting is modified to print a worksheet in letterhead?",
  "options": [
    "Paper",
    "Margin",
    "Layout",
    "Orientation"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Margin'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 152,
  "question": "What is the extension of files created in MS-Excel 2007-2016?",
  "options": [
    ".XLX",
    ".XLSX",
    ".XLS",
    ".TXT"
  ],
  "correct": 1,
  "explanation": "Starting with Excel 2007, the default file format is .xlsx, based on XML."
},
{
  "id": 153,
  "question": "What arranges data in Ascending (A-Z) or Descending (Z-A) order ?",
  "options": [
    "Filtering",
    "Sorting",
    "Custom filter",
    "Clear rules"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Sorting'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 154,
  "question": "Which chart shows the proportions of how one or more data elements relate to another data element?",
  "options": [
    "XY Chart",
    "Pie Chart",
    "Line Chart",
    "Column Chart"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Pie Chart'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 155,
  "question": "What is the full form of CSV ?",
  "options": [
    "Compact Serial Value",
    "Control Space Value",
    "Comma Separated Values",
    "Comma Standard Values"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Comma Separated Values'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 156,
  "question": "Identify the file type.",
  "options": [
    "Dataframe",
    "MySQL",
    "CSV",
    "Excel"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'CSV'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 157,
  "question": "Which box is present in Pivot Table fields list?",
  "options": [
    "Column Labels",
    "View",
    "Layout",
    "Formulas"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Column Labels'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 158,
  "question": "Which excel analysis tool is best for solving problem with one variable ?",
  "options": [
    "Goal Seek",
    "Scenario",
    "Trendline",
    "Solver"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Goal Seek'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 159,
  "question": "Which view in excel displays the pages exactly as they appear while printing ?",
  "options": [
    "Custom View",
    "Full screen View",
    "Page Break View",
    "Page Layout view"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Page Layout view'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 160,
  "question": "Which item contains text graphics, charts, sound, video, etc., in PowerPoint?",
  "options": [
    "Slides",
    "Folder",
    "Handout",
    "Desktop screen"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Slides'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 161,
  "question": "Which button is used to add instant animation to the presentation?",
  "options": [
    "Add button",
    "Start button",
    "Insert button",
    "Action button"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Action button'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 162,
  "question": "Which type of software is PowerPoint?",
  "options": [
    "Word Processor",
    "Spread Sheet",
    "Presentation Graphics",
    "Database Management"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Presentation Graphics'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 163,
  "question": "Which tool allows the user to select different layout for slide?",
  "options": [
    "Apply design",
    "Bullets",
    "New slide",
    "Slide Layout"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Slide Layout'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 164,
  "question": "Which key stops a PowerPoint presentation?",
  "options": [
    "ESC",
    "Tab",
    "Ctrl",
    "Enter"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'ESC'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 165,
  "question": "How many panes are there in backstage view of PowerPoint 2010?",
  "options": [
    "3",
    "5",
    "7",
    "9"
  ],
  "correct": 0,
  "explanation": "The correct answer is '3'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 166,
  "question": "Which menu applies various effects to the text in a slide? 2.0 0.00",
  "options": [
    "Animation",
    "Design",
    "Transitions",
    "Slide show"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Animation'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 167,
  "question": "Which dialog box changes slides automatically for a particular period of time in PowerPoint?",
  "options": [
    "Action setting",
    "Slide transition",
    "Slide animation",
    "Custom animation"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Slide transition'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 168,
  "question": "Which option creates a presentation automatically in PowerPoint?",
  "options": [
    "Template",
    "Blank Presentation",
    "Auto content wizard",
    "Standard test bar"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Auto content wizard'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 169,
  "question": "Which option offers a built in design through a dialog box?",
  "options": [
    "Auto content wizard",
    "Blank Presentation",
    "Standard tool bar",
    "Template"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Template'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 170,
  "question": "Which function key runs a PowerPoint presentation?",
  "options": [
    "F3",
    "F5",
    "F7",
    "F9"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'F5'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 171,
  "question": "What is the file extension of Microsoft PowerPoint?",
  "options": [
    ".txt",
    ".pptx",
    ".docx",
    ".xslx"
  ],
  "correct": 1,
  "explanation": "The correct answer is '.pptx'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 172,
  "question": "Which PowerPoint tab has themes?",
  "options": [
    "Transition Tab",
    "Design Tab",
    "Insert Tab",
    "Animation Tab"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Design Tab'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 173,
  "question": "Which is a default page setup orientation of the PowerPoint slides?",
  "options": [
    "Landscape",
    "Portrait",
    "Vertical",
    "Horizontal"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Landscape'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 174,
  "question": "Which shortcut key is use to print slides in MS PowerPoint?",
  "options": [
    "Ctrl + O",
    "Ctrl + P",
    "Ctrl + Alt +O",
    "Ctrl + Alt +P"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Ctrl + P'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 175,
  "question": "Which option prints four slides in a single page?",
  "options": [
    "Handouts",
    "Print Layout",
    "Customer Range",
    "Print All Slides"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Handouts'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 176,
  "question": "What are the dotted areas in an empty slide of MS PowerPoint ?",
  "options": [
    "Template",
    "Placard",
    "Placeholders",
    "Themes"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Placeholders'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 177,
  "question": "Which phase designs and characterize the data needs of the database users?",
  "options": [
    "Initial phase",
    "Execution phase",
    "Maintenance phase",
    "Closure phase"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Initial phase'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 178,
  "question": "What is full form of DDL?",
  "options": [
    "Data Describe Language",
    "Definition Data Language",
    "Data Definition Language",
    "Data Distinct Language"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Data Definition Language'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 179,
  "question": "What is full form of DML?",
  "options": [
    "Data Multiplication Language",
    "Data Manipulation Language",
    "Data Modify Language",
    "Data Mapping Language"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Data Manipulation Language'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 180,
  "question": "Why query should be executed sucessfully on a existing view?",
  "options": [
    "The specified table contains data",
    "We should have a SELECT privilege only on the specified table",
    "The specified table must be in the same database",
    "SELECT privilege on the view"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'SELECT privilege on the view'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 181,
  "question": "Which is the best way to represent the attributes in a large database?",
  "options": [
    "Relational",
    "Concatenation",
    "Dot representation",
    "Customization"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Concatenation'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 182,
  "question": "Which query calculates a sum, average and then groups the result by two sets of values?",
  "options": [
    "Cross-tab",
    "Snapshot",
    "Both cross-tabs and Snapshot",
    "Across-tabs"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Cross-tab'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 183,
  "question": "Which is a type of database?",
  "options": [
    "Transition",
    "Relational",
    "Outlook",
    "Decentralized"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Relational'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 184,
  "question": "Which of the following is TRUE about DDL command?",
  "options": [
    "Controls of the database system.",
    "Inserting , modifying,deleting and viewing the records.",
    "Creation, deletion, and alteration",
    "Retrive data from the database"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Creation, deletion, and alteration'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 185,
  "question": "What does the following statement in SQL do? DROP TABLE student;",
  "options": [
    "Deletes a table called student",
    "Creates a table called student",
    "Check if there is a table called student",
    "Deletes only the records in a table called student"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Deletes a table called student'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 186,
  "question": "What does the following code snippet do?",
  "options": [
    "Invalid Syntax",
    "Delete the column ADDRESS from the table",
    "Adds a column ADDRESS in the table",
    "Adds records in a column ADDRESS in the table"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Adds a column ADDRESS in the table'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 187,
  "question": "Which are TCL commands?",
  "options": [
    "COMMIT and ROLLBACK",
    "UPDATE and TRUNCATE",
    "SELECT and INSERT",
    "GRANT and REVOKE"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'COMMIT and ROLLBACK'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 188,
  "question": "Which collection of operations form a single logical unit of work?",
  "options": [
    "Views",
    "Networks",
    "Units",
    "Transactions"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Transactions'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 189,
  "question": "Which database aspect preserves execution of translation in isolation?",
  "options": [
    "Atomicity",
    "Consistency",
    "Durability",
    "Integrity"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Consistency'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 190,
  "question": "Which scheme controls the interaction between executing transaction ?",
  "options": [
    "Concurrency control scheme",
    "Multiprogramming scheme",
    "Serialization scheme",
    "Schedule scheme"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Concurrency control scheme'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 191,
  "question": "Which is the logical design of the database?",
  "options": [
    "Instance",
    "Relation",
    "Domain",
    "Schema"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Schema'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 192,
  "question": "Which unit is considered if the domain of the element is atomic?",
  "options": [
    "Different units",
    "Indivisible units",
    "Constant units",
    "Divisible units"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Indivisible units'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 193,
  "question": "What is the order for the tupples of the relations?",
  "options": [
    "Any",
    "Same",
    "Sorted",
    "Constant"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Any'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 194,
  "question": "What does the term \"attribute\" refers to in a table?",
  "options": [
    "Record",
    "Column",
    "Tuple",
    "Key"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Column'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 195,
  "question": "What is the error in the below statement ?",
  "options": [
    "Return type missing",
    "Dept_name is mismatched",
    "Reference relation is not mentioned",
    "Error in the formation of the function name"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Return type missing'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 196,
  "question": "Which has the highest precedence in the expression?",
  "options": [
    "Division",
    "Subtraction",
    "Power",
    "Parentheses"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Parentheses'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 197,
  "question": "Which is the correct operator for power(ab)?",
  "options": [
    "a ^ b",
    "a ** b",
    "a ^ ^ b",
    "a ^ * b"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'a ** b'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 198,
  "question": "Which is a valid Python if statement?",
  "options": [
    "if a > = 2 :",
    "if (a > = 2)",
    "if (a = > 22)",
    "if a > = 22"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'if a > = 2 :'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 199,
  "question": "Which is used as loop in Python?",
  "options": [
    "for loop",
    "if else",
    "do-while loop",
    "loop"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'for loop'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 200,
  "question": "Which function accepts input from the user?",
  "options": [
    "raw_input( )",
    "rawinput( )",
    "input( )",
    "string( )"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'input( )'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 201,
  "question": "Which one of the following is a good office etiquette?",
  "options": [
    "One should dress formally",
    "One should not be punctual to work",
    "One should have fancy mobile ring tone",
    "One should litter one\u2019s work place"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'One should dress formally'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 202,
  "question": "Word that is pronounced the same as another word but differs in meaning is called __________",
  "options": [
    "homophone",
    "homograph",
    "diphthong",
    "syllable"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'homophone'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 203,
  "question": "_______ can help me learn English.",
  "options": [
    "dedication",
    "fear",
    "anger",
    "shyness"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'dedication'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 204,
  "question": "Which punctuation mark should be used in the following sentence?",
  "options": [
    "? (question mark)",
    ", (comma)",
    ". (full stop)",
    "! (exclamation)"
  ],
  "correct": 0,
  "explanation": "The correct answer is '? (question mark)'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 205,
  "question": "When is capital letter used?",
  "options": [
    "Beginning of a sentence",
    "Names of persons",
    "Names of places",
    "All the above"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'All the above'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 206,
  "question": "Which one of the following is a describing word?",
  "options": [
    "eat",
    "repair",
    "hot",
    "soup"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'hot'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 207,
  "question": "When someone says 'Thank you' we should reply and say ______.",
  "options": [
    "Thank you.",
    "You're welcome.",
    "Bye-bye",
    "How are you?"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'You're welcome.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 208,
  "question": "Choose the odd word.",
  "options": [
    "please",
    "sorry",
    "paper",
    "thanks"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'paper'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 209,
  "question": "I am a welder. I work with ______",
  "options": [
    "nail polish",
    "robots",
    "welding tools",
    "laptops"
  ],
  "correct": 2,
  "explanation": "The correct answer is 'welding tools'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 210,
  "question": "Today's weather is going to be ____________.",
  "options": [
    "Hopeful",
    "Warm",
    "Blue",
    "Urgent"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Warm'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 211,
  "question": "The word 'when' denotes __________",
  "options": [
    "place",
    "thing",
    "person",
    "time"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'time'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 212,
  "question": "Rahul enjoys ____________ with his pet dog.",
  "options": [
    "playing",
    "writing",
    "doing",
    "washing"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'playing'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 213,
  "question": "Having a clear idea of our personality including strengths, weaknesses, thoughts, beliefs, motivation, values etc is called",
  "options": [
    "Belief",
    "Self Awareness",
    "Myth",
    "Threat"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Self Awareness'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 214,
  "question": "___________ are the abilities and qualities you have as a person that helps you grow well in life and career.",
  "options": [
    "Personal Strengths",
    "Personal weaknesses",
    "Opportunities",
    "Threats"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Personal Strengths'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 215,
  "question": "__________ are the qualities that are considered negative, and need to be worked on.",
  "options": [
    "Personal Strengths",
    "Personal weaknesses",
    "Opportunities",
    "Threats"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Personal weaknesses'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 216,
  "question": "Which of the following is an example of personal weakness?",
  "options": [
    "Confidence",
    "Being lazy",
    "Hard working",
    "Active"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Being lazy'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 217,
  "question": "Goals are of 2 types ______",
  "options": [
    "Good and bad goals",
    "Long-term and short-term goals",
    "Rich and poor goals",
    "Fixed-term and non-fixed term goals"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'Long-term and short-term goals'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 218,
  "question": "What is stress?",
  "options": [
    "Feeling of joy",
    "Feeling of surprise",
    "Feeling of delight",
    "Feeling of frustration / disappointment"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Feeling of frustration / disappointment'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 219,
  "question": "Which of these is a sign of good stress?",
  "options": [
    "It prevents you from pursuing your goals.",
    "It makes you doubt yourself.",
    "Does not lead to long-term tension, loss of sleep.",
    "Makes you physically ill or causes pain."
  ],
  "correct": 2,
  "explanation": "The correct answer is 'Does not lead to long-term tension, loss of sleep.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 220,
  "question": "An activity that stops or reduces stress is called a stress buster. Which of the following according to you is not a stress buster?",
  "options": [
    "Spending long hours thinking about the problem.",
    "Going to bed on time.",
    "Listening to music.",
    "Gardening"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Spending long hours thinking about the problem.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 221,
  "question": "What is mindfulness?",
  "options": [
    "It is the technique of not minding anything.",
    "It is about sharpening your brain.",
    "It is the ability to be fully present in a moment.",
    "It is the word used to describe people who are full of thoughts."
  ],
  "correct": 2,
  "explanation": "The correct answer is 'It is the ability to be fully present in a moment.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 222,
  "question": "Which of the following is true about stress?",
  "options": [
    "Stress can be managed",
    "Stress cannot be controlled",
    "Stress can not be decreased",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "The correct answer is 'Stress can be managed'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 223,
  "question": "Which of the following statements is true?",
  "options": [
    "Only experts can solve any problem",
    "The more problems you solve, the better you will get at problem solving!",
    "We need to pursue a course to even solve a simple problem",
    "It is not important to solve any problem"
  ],
  "correct": 1,
  "explanation": "The correct answer is 'The more problems you solve, the better you will get at problem solving!'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 224,
  "question": "Which of these should be considered while making decisions?",
  "options": [
    "Your mood",
    "The choices of your friends",
    "The rules of your community",
    "Your personal priorities."
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Your personal priorities.'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
},
{
  "id": 225,
  "question": "Which of these is the full form of SWOT?",
  "options": [
    "Special Wellness Organization Theme",
    "Speak Work Openly Together",
    "Strong World Olympic Team",
    "Strength Weakness Opportunity Threat"
  ],
  "correct": 3,
  "explanation": "The correct answer is 'Strength Weakness Opportunity Threat'. This is a fundamental concept within the Computer Operator and Programming Assistant (COPA) curriculum."
}
  ]
};

// ── TRADE ALIAS MAPPING ──────────────────────────────────────────────────────
// Maps every registered trade name (exactly as stored in localStorage) to the
// correct question bank key. This ensures questions always match the candidate's
// registered trade, regardless of how the trade name is formatted.

const TRADE_BANK_MAP = {
  // Direct keys (already in QUESTION_BANK)
  "Electrician":    "Electrician",
  "Fitter":         "Fitter",
  "Welder":         "Welder",
  "COPA":           "COPA",

  // Full COPA name as it appears in the CTS dropdown
  "Computer Operator and Programming Assistant (COPA)": "COPA",

  // Mechanical / Engineering trades → Fitter bank (closest syllabus match)
  "Turner":         "Fitter",
  "Machinist":      "Fitter",
  "Draughtsman (Civil)":       "Fitter",
  "Draughtsman (Mechanical)":  "Fitter",
  "Sheet Metal Worker":        "Fitter",
  "Instrument Mechanic":       "Fitter",
  "Surveyor":       "Fitter",

  // Electrical / Electronics trades → Electrician bank
  "Wireman":                   "Electrician",
  "Electronic Mechanic":       "Electrician",
  "Mechanic (Refrigeration and Air Conditioning)": "Electrician",

  // Civil / Construction trades → Fitter bank (general engineering principles)
  "Mason (Building Constructor)": "Fitter",

  // Vehicle / Diesel trades → Welder bank (closest workshop practice)
  "Mechanic (Motor Vehicle)":  "Welder",
  "Mechanic (Diesel)":         "Welder",

  // General trades → use Welder bank (workshop safety & general trade topics)
  "Carpenter":      "Welder",
  "Plumber":        "Welder",
  "Painter (General)": "Welder",
};

/**
 * getQuestionsForTrade(tradeName)
 * Returns the question array for the given trade name.
 * Priority: direct key match → alias map → Electrician fallback.
 */
function getQuestionsForTrade(tradeName) {
  if (!tradeName) return QUESTION_BANK["Electrician"];
  // Try direct match first
  if (QUESTION_BANK[tradeName]) return QUESTION_BANK[tradeName];
  // Try alias map
  const mappedKey = TRADE_BANK_MAP[tradeName];
  if (mappedKey && QUESTION_BANK[mappedKey]) return QUESTION_BANK[mappedKey];
  // Fallback: Electrician
  return QUESTION_BANK["Electrician"];
}

// Exam configurations
const EXAM_CONFIG = {
  totalQuestions: 20,
  timeInMinutes: 25,
  passingPercentage: 40,
  marksPerQuestion: 1,
  negativeMarking: 0 // No negative marking
};

// Portal statistics (for home page display)
const PORTAL_STATS = {
  totalCandidates: 125847,
  totalTests: 342590,
  totalTrades: 20,
  totalQuestions: 10000
};
