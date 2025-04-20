const chordFrequencyRatios = {
  // Major chords
  "I":   [1, 1.25, 1.5],
  "II":  [1.125, 1.4063, 1.6875],
  "III": [1.25, 1.5625, 1.875],
  "IV":  [1.3333, 1.6667, 2],
  "V":   [1.5, 1.875, 2.25],
  "VI":  [1.6667, 2.0833, 2.5],
  "VII": [1.875, 2.3438, 2.8125],

  // Minor chords
  "i":   [1, 1.2, 1.5],
  "ii":  [1.125, 1.35, 1.6875],
  "iii": [1.25, 1.5, 1.875],
  "iv":  [1.3333, 1.6, 2],
  "v":   [1.5, 1.8, 2.25],
  "vi":  [1.6667, 2, 2.5],
  "vii": [1.875, 2.25, 2.8125],

  // Diminished chords
  "i°":  [1, 1.2, 1.4142],
  "ii°": [1.125, 1.35, 1.5909],
  "iii°": [1.25, 1.5, 1.7678],
  "iv°": [1.3333, 1.6, 1.8856],
  "v°":  [1.5, 1.8, 2.1213],
  "vi°": [1.6667, 2, 2.3571],
  "vii°": [1.875, 2.25, 2.6516],

  // Augmented chords
  "I+":  [1, 1.25, 1.5874],
  "II+": [1.125, 1.4063, 1.7857],
  "III+": [1.25, 1.5625, 1.9843],
  "IV+": [1.3333, 1.6667, 2.1166],
  "V+":  [1.5, 1.875, 2.3812],
  "VI+": [1.6667, 2.0833, 2.6458],
  "VII+": [1.875, 2.3438, 2.9764],

  // Dominant seventh chords
  "I7":  [1, 1.25, 1.5, 1.7778],
  "II7": [1.125, 1.4063, 1.6875, 2],
  "III7": [1.25, 1.5625, 1.875, 2.2222],
  "IV7": [1.3333, 1.6667, 2, 2.3704],
  "V7":  [1.5, 1.875, 2.25, 2.6667],
  "VI7": [1.6667, 2.0833, 2.5, 2.963],
  "VII7": [1.875, 2.3438, 2.8125, 3.3333],

  // Minor seventh chords
  "i7":  [1, 1.2, 1.5, 1.7778],
  "ii7": [1.125, 1.35, 1.6875, 2],
  "iii7": [1.25, 1.5, 1.875, 2.2222],
  "iv7": [1.3333, 1.6, 2, 2.3704],
  "v7":  [1.5, 1.8, 2.25, 2.6667],
  "vi7": [1.6667, 2, 2.5, 2.963],
  "vii7": [1.875, 2.25, 2.8125, 3.3333],

  // Major seventh chords
  "IM7": [1, 1.25, 1.5, 1.875],
  "IIM7": [1.125, 1.4063, 1.6875, 2.1094],
  "IIIM7": [1.25, 1.5625, 1.875, 2.3438],
  "IVM7": [1.3333, 1.6667, 2, 2.5],
  "VM7": [1.5, 1.875, 2.25, 2.8125],
  "VIM7": [1.6667, 2.0833, 2.5, 3.125],
  "VIIM7": [1.875, 2.3438, 2.8125, 3.5156],

  // Half-diminished seventh chords
  "iø7": [1, 1.2, 1.4142, 1.7778],
  "iiø7": [1.125, 1.35, 1.5909, 2],
  "iiiø7": [1.25, 1.5, 1.7678, 2.2222],
  "ivø7": [1.3333, 1.6, 1.8856, 2.3704],
  "vø7": [1.5, 1.8, 2.1213, 2.6667],
  "viø7": [1.6667, 2, 2.3571, 2.963],
  "viiø7": [1.875, 2.25, 2.6516, 3.3333],

  // Fully diminished seventh chords
  "i°7": [1, 1.2, 1.4142, 1.6818],
  "ii°7": [1.125, 1.35, 1.5909, 1.8921],
  "iii°7": [1.25, 1.5, 1.7678, 2.1024],
  "iv°7": [1.3333, 1.6, 1.8856, 2.2426],
  "v°7": [1.5, 1.8, 2.1213, 2.5228],
  "vi°7": [1.6667, 2, 2.3571, 2.8031],
  "vii°7": [1.875, 2.25, 2.6516, 3.1534],

  // Sus4 chords
  "Isus4": [1, 1.3333, 1.5],
  "IIsus4": [1.125, 1.5, 1.6875],
  "IIIsus4": [1.25, 1.6667, 1.875],
  "IVsus4": [1.3333, 1.7778, 2],
  "Vsus4": [1.5, 2, 2.25],
  "VIsus4": [1.6667, 2.2222, 2.5],
  "VIIsus4": [1.875, 2.5, 2.8125],

  // Add9 chords
  "Iadd9": [1, 1.25, 1.5, 1.125],
  "IIadd9": [1.125, 1.4063, 1.6875, 1.2656],
  "IIIadd9": [1.25, 1.5625, 1.875, 1.4063],
  "IVadd9": [1.3333, 1.6667, 2, 1.5],
  "Vadd9": [1.5, 1.875, 2.25, 1.6875],
  "VIadd9": [1.6667, 2.0833, 2.5, 1.875],
  "VIIadd9": [1.875, 2.3438, 2.8125, 2.1094],

  // Power chords (root and fifth only)
  "I5": [1, 1.5],
  "II5": [1.125, 1.6875],
  "III5": [1.25, 1.875],
  "IV5": [1.3333, 2],
  "V5": [1.5, 2.25],
  "VI5": [1.6667, 2.5],
  "VII5": [1.875, 2.8125],

  // Borrowed chords (from parallel minor/major)
  "♭III": [1.2, 1.5, 1.8],
  "♭VI": [1.6, 2, 2.4],
  "♭VII": [1.7778, 2.2222, 2.6667],

  // Neapolitan chord
  "♭II": [1.0667, 1.3333, 1.6],

  // Augmented sixth chords
  "It+6": [1, 1.25, 1.5874, 1.8042], // Italian
  "Fr+6": [1, 1.25, 1.5, 1.8042],    // French
  "Ger+6": [1, 1.25, 1.5874, 1.8042, 2], // German

  // Extended dominants
  "V9": [1.5, 1.875, 2.25, 2.6667, 3],
  "V13": [1.5, 1.875, 2.25, 2.6667, 3, 3.375, 4],

  // Altered dominants
  "V7♭5": [1.5, 1.875, 2.1213, 2.6667],
  "V7♯5": [1.5, 1.875, 2.3812, 2.6667],
  "V7♭9": [1.5, 1.875, 2.25, 2.6667, 2.8284],
  "V7♯9": [1.5, 1.875, 2.25, 2.6667, 3.1748],
  "V7alt": [1.5, 1.875, 2.1213, 2.6667, 2.8284], // Example alteration, can vary

  // Tritone substitution
  "♭II7": [1.0667, 1.3333, 1.6, 1.8889],

  // Sus2 chords
  "Isus2": [1, 1.125, 1.5],
  "Vsus2": [1.5, 1.6875, 2.25],

  // 6th chords
  "I6": [1, 1.25, 1.5, 1.6667],
  "i6": [1, 1.2, 1.5, 1.6667],

  // 6/9 chords
  "I6/9": [1, 1.25, 1.5, 1.6667, 1.125],

  // 9th chords (major and minor)
  "I9": [1, 1.25, 1.5, 1.7778, 1.125],
  "i9": [1, 1.2, 1.5, 1.7778, 1.125],

  // 11th chords
  "I11": [1, 1.25, 1.5, 1.7778, 1.125, 1.3333],
  "i11": [1, 1.2, 1.5, 1.7778, 1.125, 1.3333],

  // 13th chords
  "I13": [1, 1.25, 1.5, 1.7778, 1.125, 1.3333, 1.6667],
  "i13": [1, 1.2, 1.5, 1.7778, 1.125, 1.3333, 1.6667]
};

const scaleFrequencyRatios = {
  // Major scales and modes
  "Ionian (Major)": [1, 1.125, 1.25, 1.3333, 1.5, 1.6667, 1.875],
  "Dorian": [1, 1.125, 1.2, 1.3333, 1.5, 1.6667, 1.8],
  "Phrygian": [1, 1.0667, 1.2, 1.3333, 1.5, 1.6, 1.8],
  "Lydian": [1, 1.125, 1.25, 1.4063, 1.5, 1.6667, 1.875],
  "Mixolydian": [1, 1.125, 1.25, 1.3333, 1.5, 1.6667, 1.8],
  "Aeolian (Natural Minor)": [1, 1.125, 1.2, 1.3333, 1.5, 1.6, 1.8],
  "Locrian": [1, 1.0667, 1.2, 1.3333, 1.4142, 1.6, 1.8],

  // Minor scales
  "Harmonic Minor": [1, 1.125, 1.2, 1.3333, 1.5, 1.6, 1.875],
  "Melodic Minor (Ascending)": [1, 1.125, 1.2, 1.3333, 1.5, 1.6667, 1.875],
  "Melodic Minor (Descending)": [1, 1.125, 1.2, 1.3333, 1.5, 1.6, 1.8],

  // Pentatonic scales
  "Major Pentatonic": [1, 1.125, 1.25, 1.5, 1.6667],
  "Minor Pentatonic": [1, 1.2, 1.3333, 1.5, 1.8],

  // Blues scales
  "Blues Scale": [1, 1.2, 1.3333, 1.4, 1.5, 1.8],
  "Major Blues": [1, 1.125, 1.3333, 1.4, 1.5, 1.6667],

  // Diminished scales
  "Diminished (Half-Whole)": [1, 1.0667, 1.2, 1.25, 1.3333, 1.5, 1.6, 1.8],
  "Diminished (Whole-Half)": [1, 1.125, 1.2, 1.3333, 1.4142, 1.5, 1.6667, 1.8],

  // Other scales
  "Whole Tone": [1, 1.125, 1.25, 1.4142, 1.5, 1.6818],
  "Chromatic": [1, 1.0595, 1.1225, 1.1892, 1.2599, 1.3348, 1.4142, 1.4983, 1.5874, 1.6818, 1.7818, 1.8877],
  "Bebop Dominant": [1, 1.125, 1.25, 1.3333, 1.5, 1.6667, 1.7778, 1.875],
  "Bebop Major": [1, 1.125, 1.25, 1.3333, 1.5, 1.6667, 1.7778, 1.875],
  "Gypsy (Hungarian Minor)": [1, 1.125, 1.2, 1.5, 1.6, 1.8, 1.875],
  "Diatonic": [1, 1.125, 1.25, 1.3333, 1.5, 1.6667, 1.875]
};

const noteFrequencies = {
  // Octave 4 (Middle C and surrounding notes)
  "C4": 261.63,
  "C#4": 277.18,
  "Db4": 277.18,
  "D4": 293.66,
  "D#4": 311.13,
  "Eb4": 311.13,
  "E4": 329.63,
  "F4": 349.23,
  "F#4": 369.99,
  "Gb4": 369.99,
  "G4": 392.00,
  "G#4": 415.30,
  "Ab4": 415.30,
  "A4": 440.00,
  "A#4": 466.16,
  "Bb4": 466.16,
  "B4": 493.88,

  // Octave 3 (lower octave)
  "C3": 130.81,
  "C#3": 138.59,
  "Db3": 138.59,
  "D3": 146.83,
  "D#3": 155.56,
  "Eb3": 155.56,
  "E3": 164.81,
  "F3": 174.61,
  "F#3": 185.00,
  "Gb3": 185.00,
  "G3": 196.00,
  "G#3": 207.65,
  "Ab3": 207.65,
  "A3": 220.00,
  "A#3": 233.08,
  "Bb3": 233.08,
  "B3": 246.94,

  // Octave 5 (higher octave)
  "C5": 523.25,
  "C#5": 554.37,
  "Db5": 554.37,
  "D5": 587.33,
  "D#5": 622.25,
  "Eb5": 622.25,
  "E5": 659.25,
  "F5": 698.46,
  "F#5": 739.99,
  "Gb5": 739.99,
  "G5": 783.99,
  "G#5": 830.61,
  "Ab5": 830.61,
  "A5": 880.00,
  "A#5": 932.33,
  "Bb5": 932.33,
  "B5": 987.77
};

const chordProgressions = [
  { name: "Pop I-V-vi-IV", progression: ["I", "V", "vi", "IV"] },
  { name: "Jazz ii-V-I", progression: ["ii", "V", "I"] },
  { name: "Basic I-IV-V", progression: ["I", "IV", "V"] },
  { name: "Pop I-vi-IV-V", progression: ["I", "vi", "IV", "V"] },
  { name: "Minor i-VI-III-VII", progression: ["i", "VI", "III", "VII"] },
  { name: "Extended Major", progression: ["I", "V", "vi", "iii", "IV", "I", "IV", "V"] },
  { name: "Mixolydian Vamp", progression: ["I", "♭VII", "IV"] },
  { name: "vi-IV-I-V", progression: ["vi", "IV", "I", "V"] },
  { name: "Extended Major II", progression: ["I", "V", "vi", "iii", "IV", "I", "V"] },
  { name: "Minor i-iv-v", progression: ["i", "iv", "v"] },
  { name: "Pop I-IV-vi-V", progression: ["I", "IV", "vi", "V"] },
  { name: "Minor Descending", progression: ["i", "♭VII", "♭VI", "V"] },
  { name: "Major Diatonic", progression: ["I", "iii", "IV", "V"] },
  { name: "Pop with Dominant", progression: ["I", "V7", "vi", "IV"] },
  { name: "Minor with ♭VII", progression: ["i", "♭III", "♭VII", "IV"] },
  { name: "Jazz I-vi-ii-V", progression: ["I", "vi", "ii", "V"] },
  { name: "IV-V-iii-vi", progression: ["IV", "V", "iii", "vi"] },
  { name: "I-V-IV-IV", progression: ["I", "V", "IV", "IV"] },
  { name: "Minor with ♭VII and ♭III", progression: ["i", "iv", "♭VII", "♭III"] },
  { name: "I-IV-I-V", progression: ["I", "IV", "I", "V"] },
  { name: "vi-V-IV-III", progression: ["vi", "V", "IV", "III"] },
  { name: "Major with ♭VII and ♭VI", progression: ["I", "♭VII", "♭VI", "V"] },
  { name: "ii-IV-V", progression: ["ii", "IV", "V"] },
  { name: "I-vi-iii-V", progression: ["I", "vi", "iii", "V"] },
  { name: "IV-I-V-vi", progression: ["IV", "I", "V", "vi"] },
  { name: "Major with ♭VII", progression: ["I", "V", "♭VII", "IV"] },
  { name: "Minor with ♭VI and ♭III", progression: ["i", "♭VI", "♭III", "♭VII"] },
  { name: "I-iii-vi-IV", progression: ["I", "iii", "vi", "IV"] },
  { name: "V-IV-I", progression: ["V", "IV", "I"] },
  { name: "I-IV-ii-V", progression: ["I", "IV", "ii", "V"] },
  { name: "vi-IV-ii-V", progression: ["vi", "IV", "ii", "V"] },
  { name: "Major with ♭VII II", progression: ["I", "V", "♭VII", "IV"] },
  { name: "Minor i-♭VI-♭VII-i", progression: ["i", "♭VI", "♭VII", "i"] },
  { name: "I-vi-IV-I", progression: ["I", "vi", "IV", "I"] },
  { name: "Jazz ii-V-I-vi", progression: ["ii", "V", "I", "vi"] },
  { name: "Major with ♭III and ♭VII", progression: ["I", "♭III", "♭VII", "IV"] },
  { name: "IV-V-iii-IV", progression: ["IV", "V", "iii", "IV"] },
  { name: "Minor with ♭VII and ♭VI II", progression: ["i", "♭VII", "♭VI", "v"] },
  { name: "I-V7-IV-IV", progression: ["I", "V7", "IV", "IV"] },
  { name: "vi-IV-I-V7", progression: ["vi", "IV", "I", "V7"] },
  { name: "I-V-♭VII-I", progression: ["I", "V", "♭VII", "I"] },
  { name: "Jazz ii-V-I-IV", progression: ["ii", "V", "I", "IV"] },
  { name: "I-vi-ii-IV", progression: ["I", "vi", "ii", "IV"] },
  { name: "Minor i-iv-♭VII-♭VI", progression: ["i", "iv", "♭VII", "♭VI"] },
  { name: "Extended Dominant Cycle", progression: ["I", "V7", "vi", "V7", "ii", "V7", "I"] },
  { name: "Minor Circle of Fifths", progression: ["i", "V7", "iv", "V7", "♭VII", "V7", "♭III", "V7", "i"] },
  { name: "Major with ♭VII II", progression: ["I", "iii", "IV", "♭VII"] },
  { name: "Phrygian Vamp", progression: ["i", "♭VI", "♭VII", "i"] },
  { name: "Blues with Minor Plagal", progression: ["I", "I7", "IV", "iv"] },
  { name: "Backdoor Progression", progression: ["♭VI", "♭VII", "I"] },
  { name: "Phrygian i-♭II-♭III-♭II", progression: ["i", "♭II", "♭III", "♭II"] },
  { name: "Suspended Resolution", progression: ["I", "Vsus4", "V7", "I"] },
  { name: "Minor with Neapolitan", progression: ["i", "♭II", "vii°", "i"] },
  { name: "Major with Augmented", progression: ["I", "♯iv°", "V7", "I"] },
  { name: "Minor with Dominant", progression: ["i", "♭VI", "iv", "V7", "i"] },
  { name: "Jazz I-vi-ii7-V9", progression: ["I", "vi", "ii7", "V9"] },
  { name: "Jazz with Half-Diminished", progression: ["IM7", "vi7", "iiø7", "V7♭9"] },
  { name: "Blues with Minor IV", progression: ["I", "V7", "IV", "iv"] },
  { name: "Minor with ♭II7", progression: ["i", "♭III", "♭VI", "♭II7"] },
  { name: "Extended Diatonic Sevenths", progression: ["IM7", "iii7", "vi7", "ii7", "V7", "IM7"] },
  { name: "Rock Minor Descent", progression: ["i", "♭VII", "♭VI", "V7"] },
  { name: "I-V-V-IV", progression: ["I", "V", "V", "IV"] },
  { name: "Minor with i6", progression: ["i", "♭VI", "i6", "iv"] },
  { name: "Chromatic Mediants", progression: ["I", "♭III", "♭VI", "♭II"] },
  { name: "Aeolian Vamp", progression: ["i", "♭VII", "v", "iv"] },
  { name: "Ascending Chromatic", progression: ["I", "♭II", "♭III", "IV"] },
  { name: "Coltrane Changes", progression: ["IM7", "♭IIIM7", "♭VIM7", "♭IIM7"] },
  { name: "Minor with Neapolitan Complex", progression: ["i", "♭II", "vii°", "i6", "V"] },
  { name: "Diatonic Cycle", progression: ["I", "vi", "iii", "IV", "ii", "V", "I"] },
  { name: "Minor with Neapolitan and V", progression: ["i", "♭III", "♭VI", "♭II", "V"] },
  { name: "Mixolydian Blues", progression: ["I", "♭VII", "IV", "I"] },
  { name: "Minor Blues Extended", progression: ["i", "iv7", "♭VII7", "♭III7"] },
  { name: "Extended Cycle of Fifths", progression: ["I", "V7", "ii", "V7", "I"] },
  { name: "Epic Minor", progression: ["i", "♭VI", "♭III", "♭VII", "iv", "V"] },
  { name: "Major Sevenths Cycle", progression: ["IM7", "IVM7", "viiø7", "iii7"] },
  { name: "Tritone Substitutions", progression: ["i", "♭II7", "♭V7", "♭I7"] },
  { name: "Chromatic Passing Chord", progression: ["I", "iii7", "♭III7", "ii7"] },
  { name: "Dorian Vamp", progression: ["i", "♭VI", "♭VII", "i7"] },
  { name: "Power Chord Progression", progression: ["I", "IV", "♭VII", "♭VI"] },
  { name: "Phrygian Dominant", progression: ["i", "♭II", "♭III", "iv"] },
  { name: "Constant Structure", progression: ["IM7", "♭IIIM7", "♭VM7", "♭VIIM7"] },
  { name: "Chromatic Minor with Augmented", progression: ["i", "♭II", "vii°", "V"] },
  { name: "Extended Cycle II", progression: ["I", "iii", "vi", "ii", "V", "I"] },
  { name: "Minor with Major V", progression: ["i", "♭VI", "♭III", "V7", "i"] },
  { name: "Blues with Tritone Sub", progression: ["I", "♭II7", "I7", "IV"] },
  { name: "Descending Minor", progression: ["i", "♭VII", "♭VI", "V", "iv", "♭III", "♭II", "i"] },
  { name: "Lydian Flavor", progression: ["IM7", "♯iv°7", "viiø7", "iii7"] },
  { name: "Phrygian Cadential", progression: ["i", "♭II", "i", "♭VII", "♭VI", "V"] },
  { name: "Modal Mixture", progression: ["I", "♭III", "IV", "iv"] },
  { name: "Minor Plagal Cadence", progression: ["i", "♭VI", "♭VII", "iv6", "V"] },
  { name: "Altered Dominant", progression: ["IM7", "viø7", "iiø7", "V7alt"] },
  { name: "Minor with Sevenths", progression: ["i", "♭III7", "♭VI7", "♭II7", "i"] },
  { name: "Borrowed Chords", progression: ["I", "♭VI", "♭VII", "IV"] },
  { name: "Harmonic Minor Cadence", progression: ["i", "♭VI", "♭III", "V7♭9"] },
  { name: "Extended Major with Sevenths", progression: ["I", "IM7", "I7", "IV", "IVM7", "iv6"] },
  { name: "Minor Extended", progression: ["i", "i7", "iv", "iv7", "♭VII", "V7"] },
  { name: "Major with 6th", progression: ["I", "I6", "IV", "V7"] },
  { name: "Diatonic Sevenths Descent", progression: ["IM7", "viiø7", "iii7", "vi7"] },
  { name: "Minor with ♭II and V7♭9", progression: ["i", "♭III", "♭VI", "♭II", "V7♭9"] },
  { name: "Sus4 to Major 7", progression: ["I", "V7sus4", "V7", "IM7"] },
  { name: "Minor with Altered Dominant", progression: ["i", "♭VI", "♭III", "V7alt", "i"] },
  { name: "Jazz with Tritone Sub", progression: ["IM7", "♭VI7", "iim7", "V7♭9"] },
  { name: "Minor with V7♯9", progression: ["i", "♭VII", "♭VI", "V7♯9"] },
  { name: "Major with V7♭5", progression: ["I", "V7♭5", "I6", "IV"] },
  { name: "Minor with Tritone Subs", progression: ["i", "♭II7", "♭V7", "i7"] },
  { name: "Jazz with Altered Dominant", progression: ["IM7", "♭IIIM7", "♭VIM7", "V7alt"] },
  { name: "Minor with V7♭9 Resolution", progression: ["i", "♭VI", "♭III", "V7♭9", "i6"] },
  { name: "Rock with Sus4", progression: ["I", "♭VII", "IV", "V7sus4", "V7"] },
  { name: "Minor with V7♯5", progression: ["i", "iv", "♭VII", "V7♯5"] },
  { name: "Jazz with V13", progression: ["IM7", "vi7", "ii7", "V13"] },
  { name: "Minor with V7♭5 Resolution", progression: ["i", "♭VI", "♭III", "V7♭5", "i"] },
  { name: "Sus4 to ♭9 Resolution", progression: ["I", "V7sus4", "V7♭9", "I6"] },
  { name: "Minor with Altered Dominant II", progression: ["i", "♭II7", "V7alt", "i"] },
  { name: "Jazz with 6/9 Chord", progression: ["IM7", "IVM7", "♭VII7", "I6/9"] },
  { name: "Minor with V7♯9 Resolution", progression: ["i", "♭VI", "♭III", "V7♯9", "i"] },
  { name: "Chromatic with Altered Dominant", progression: ["I", "♭III", "♭VI", "V7alt", "I"] },
  { name: "Minor with V7♭5 to i6", progression: ["i", "iv", "V7♭5", "i6"] },
  { name: "Jazz with 6/9 Ending", progression: ["IM7", "vi7", "ii7", "V9", "I6/9"] },
  { name: "Minor with V7♯5 Resolution", progression: ["i", "♭VI", "♭III", "V7♯5", "i"] },
  { name: "Chromatic to Major 6", progression: ["I", "♭II7", "♭V7", "I6"] },
  { name: "Minor with V7♭9 to i6", progression: ["i", "iv", "V7♭9", "i6"] },
  { name: "Jazz with V13 and 6/9", progression: ["IM7", "♭IIIM7", "♭VIM7", "V13", "I6/9"] },
  { name: "Minor with Altered Dominant to i6", progression: ["i", "♭VI", "♭III", "V7alt", "i6"] },
  { name: "Rock with Sus4 Resolution", progression: ["I", "♭VII", "♭VI", "V7sus4", "V7", "I"] },
  { name: "Minor with V7♯9 II", progression: ["i", "iv", "♭VII", "V7♯9", "i"] },
  { name: "Jazz with V13 and 9", progression: ["IM7", "vi7", "ii7", "V13", "I9"] },
  { name: "Minor with V7♭5 to i6 II", progression: ["i", "♭VI", "♭III", "V7♭5", "i6"] },
  { name: "Chromatic with Altered Dominant to 6", progression: ["I", "♭III", "♭VI", "V7alt", "I6"] },
  { name: "Minor with V7♯5 II", progression: ["i", "iv", "♭VII", "V7♯5", "i"] },
  { name: "Jazz with V13 and 13", progression: ["IM7", "vi7", "ii7", "V13", "I13"] },
  { name: "Minor with V7♭9 to i6 II", progression: ["i", "♭VI", "♭III", "V7♭9", "i6"] },
  { name: "Chromatic to Major 9", progression: ["I", "♭II7", "♭V7", "I9"] },
  { name: "Minor with Altered Dominant to i6 II", progression: ["i", "iv", "V7alt", "i6"] },
  { name: "Jazz with V13 and 13 II", progression: ["IM7", "♭IIIM7", "♭VIM7", "V13", "I13"] },
  { name: "Minor with V7♯9 to i6", progression: ["i", "♭VI", "♭III", "V7♯9", "i6"] },
  { name: "Rock with Sus4 to 6", progression: ["I", "♭VII", "IV", "V7sus4", "V7", "I6"] },
  { name: "Minor with V7♭5 III", progression: ["i", "iv", "♭VII", "V7♭5", "i"] },
  { name: "Jazz with V13 and 6/9 II", progression: ["IM7", "vi7", "ii7", "V13", "I6/9"] },
  { name: "Minor with Altered Dominant to i7", progression: ["i", "♭VI", "♭III", "V7alt", "i7"] },
  { name: "Chromatic with V7♭9 to 6", progression: ["I", "♭III", "♭VI", "V7♭9", "I6"] },
  { name: "Minor with V7♯5 to i6 II", progression: ["i", "iv", "♭VII", "V7♯5", "i6"] }
];