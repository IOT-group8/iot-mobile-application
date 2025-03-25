const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// State management
const ukuleleState = {
  frets: {
    1: false,
    2: false,
    3: false,
    4: false
  },
  isStrumming: false
};

// Enable CORS
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Hello, Guitar Hero!');
});

// Get current state
app.get('/state', (req, res) => {
  res.json(ukuleleState);
});

// Fret press
app.post('/fret-press', (req, res) => {
  const { fretNumber } = req.body;
  ukuleleState.frets[fretNumber] = true;
  console.log(`Fret ${fretNumber} press received`);
  console.log('Current state:', ukuleleState);
  res.json({ 
    message: `Fret ${fretNumber} press acknowledged`,
    state: ukuleleState 
  });
});

// Fret release
app.post('/fret-release', (req, res) => {
  const { fretNumber } = req.body;
  ukuleleState.frets[fretNumber] = false;
  console.log(`Fret ${fretNumber} release received`);
  console.log('Current state:', ukuleleState);
  res.json({ 
    message: `Fret ${fretNumber} release acknowledged`,
    state: ukuleleState 
  });
});

// Strum press
app.post('/strum-press', (req, res) => {
  ukuleleState.isStrumming = true;
  console.log('Strum press received');
  console.log('Current state:', ukuleleState);
  res.json({ 
    message: 'Strum press acknowledged',
    state: ukuleleState 
  });
});

// Strum release
app.post('/strum-release', (req, res) => {
  ukuleleState.isStrumming = false;
  console.log('Strum release received');
  console.log('Current state:', ukuleleState);
  res.json({ 
    message: 'Strum release acknowledged',
    state: ukuleleState 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Initial state:', ukuleleState);
});