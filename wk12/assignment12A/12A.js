// Assigment 12A
// Player with tone.js saw examples p5.js & ableton site-examples on github
// https://editor.p5js.org/asd0999/sketches/Hy__xQcjX 
// class -> https://tonejs.github.io/docs/r13/Tone
// constructors -> https://tonejs.github.io/docs/
// https://tonejs.github.io/ set tones to master
// Tone.Synth is a basic synthesizer with a single envelope and single oscillator.
/*  ADSR envelope component ▵ - triggerAttackRelease is a combination of two methods:
   triggerAttack when the amplitude >↑ and triggerRelease <↓ amplitude 
   Tone.js standard piano octave notes set to note frequencies */
// keycodes https://keycode.info/
// https://p5js.org/reference/#/p5/midiToFreq
// https://www.guitarland.com/MusicTheoryWithToneJS/EditSynth.html
// https://newt.phys.unsw.edu.au/jw/notes.html

const c = ['C4'];
const d = ['D4'];
const e = ['E4'];
const f = ['F4'];
const g = ['G4'];
const a = ['A4'];
const b = ['B4'];
const h = ['C5'];

// var tremolo = new Tone.Tremolo(9, 1).toMaster().start(); -- > needs constructor
// var osc = new Tone.Oscillator(440, "sine").toMaster().start(); //  <---THIS IS A TEST! Musical note 'A' ocatve 4  440 freq sounds correct
function setup () {
  createCanvas(800, 700);
  poly = new Tone.PolySynth(6, Tone.Synth).toMaster();
  poly.set({
    oscillator: {
      //type: 'fatsawtooth'
      type: 'sine'
    }
  });
    // ampEnvelope
    ampEnvelope = new Tone.AmplitudeEnvelope({
      "attack": 2,
      "decay": 1.6, // 0.5,
      "sustain": 1, //(normal range 0.0 - 1.0)
      "release": 2
    }).toMaster();
}
function draw () {
  background(189, 195, 199);
  background(54, 69, 79);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(34);
  text('Play an Octave - Press Number Keys 1 - 8', width / 2, 585);
  textSize(18);
  text('Scale Starts @ Piano Middle C ( no sharps or flats )', width / 2, 620);
  // map the notes/keys/sound to the shapes
  if (keyCode === 49) {
    noStroke();
    fill(247, 9, 219);
    ellipse(125, 450, 90, 90);
    textSize(32);
    text('C', 125, 529);
  } else if (keyCode === 50) {
    noStroke();
    fill('LawnGreen');
    ellipse(220, 400, 95, 80);
    textSize(32);
    text('D', 220, 475);
  } else if (keyCode === 51) {
    fill('DeepSkyBlue');
    rect(275, 310, 88, 88, 20);
    textSize(32);
    text('E', 319, 435);
  } else if (keyCode === 52) {
    fill('OrangeRed');
    ellipse(375, 315, 90);
    textSize(32);
    text('F', 375, 393);
  } else if (keyCode === 53) {
    fill(171, 224, 66); 
    fill('lime');
    rect(400, 230, 88, 88, 20);
    textSize(32);
    text('G', 444, 353);
  } else if (keyCode === 54) {
    fill(255, 165, 0);
    ellipse(499, 230, 94, 80);
    textSize(32);
    text('A', 499, 304);
  } else if (keyCode === 55) {
    fill('Fuchsia');
    ellipse(590, 195, 90);
    textSize(32);
    text('B', 593, 273);
  } else if (keyCode === 56) {
    fill('DarkTurquoise');
    rect(650, 100, 88, 88, 20);
    textSize(32);
    text('C', 695, 223);4
  }
} // end fnx draw
  // function keyPressed play note/chord - trigger Attack Release here
function keyPressed () {
  if (keyCode === 49) {
    poly.triggerAttackRelease(c, 0.60);
  } else if (keyCode === 50) {
    poly.triggerAttackRelease (d, 0.60);
  } else if (keyCode === 51) {
    poly.triggerAttackRelease(e, 0.60);
  } else if (keyCode === 52) {
    poly.triggerAttackRelease(f, 0.60);
  } else if (keyCode === 53) {
    poly.triggerAttackRelease(g, 0.60);
  } else if (keyCode === 54) {
    poly.triggerAttackRelease(a, 0.60);
  } else if (keyCode === 55) {
    poly.triggerAttackRelease(b, 0.60);
  } else if (keyCode === 56) {
    poly.triggerAttackRelease(['C5', 'E4', 'G4'], 1);
  }
}
