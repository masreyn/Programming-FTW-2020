// Player with tone.js saw on ableton site-example on github
// https://loop.ableton.com/2017/program/activity/interactive-music-tonejs/
// https://tonejs.github.io/docs/r13/Players
// https://tonejs.github.io/ set tones to master
// class -> https://tonejs.github.io/docs/r13/Tone
// constructors -> https://tonejs.github.io/docs/
// Tone.Synth is a basic synthesizer with a single envelope and single oscillator.
/*  ADSR envelope component ▵ - triggerAttackRelease is a combination of two methods:
   triggerAttack when the amplitude >↑ and triggerRelease <↓ amplitude */

// Exercise 12.1
let player;
let button1;
let button2;
let song;
let button;
let amp;
let witch;
let melting;

// Tone.js sets .wav to a master
function preload () {
  player = new Tone.Players({
    witch: 'witch.wav',
    melting: 'melting.wav',
  // // add these later
  // brain: "brain.wav",
  // curtain: "curtain.wav",
  }).toMaster();
}
function setup () {
  createCanvas(800, 725);
  noStroke();
  textSize(30);
  textFont('Ubuntu', 'sans-serif');
  song = loadSound('witch_music.wav', loaded);
  amp = new p5.Amplitude();
  background(51);
  // speech buttons
  button1 = createButton('Good or Bad Witch');
  button1.size(190, 40);
  button1.position(190, 385);
  button1.mousePressed(play1);
  button2 = createButton('I&#39;m Melting!!!');
  button2.size(175, 40);
  button2.position(450, 385);
  button2.mousePressed(play2);
}
// tornado play button - loaded function is the callback
// tornado-witch song not long enough for pause button to make sense-
function loaded () {
  textSize(30);
  noStroke();
  button = createButton('TORNADO START');
  button.mousePressed(togglePlaying);
  button.size(150, 45);
  button.position(330, 300);
}
// tornado music
function togglePlaying () {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.7);
    // button.html('TORNAD0 TOGGLE/PAUSE');
    button.html('TORNADO TOGGLE');
  } else {
    song.pause();
    button.html('TORNADO');
  }
}
function draw () {
  background(54, 69, 79);
  const vol = amp.getLevel();
  const diam = map(vol, 0, 0.7, 60, 600);
  textFont('Merriweather', 'serif');
  textSize(28);
  fill('#fff3e3');
  noStroke();
  text('Wizard of Oz', 65, 75);
  fill(247, 9, 219);
  ellipse(200, 175, diam, diam);
  fill(171, 224, 66);
  ellipse(width / 2, 175, diam, diam);
  fill('red');
  ellipse(600, 175, diam, diam);
  fill('red');
  ellipse(200, 510, diam, diam);
  fill(171, 224, 66);
  ellipse(width / 2, 510, diam, diam);
  fill(247, 9, 219);
  ellipse(600, 510, diam, diam);
}
// tone.js player- example
function play1 () {
  player.get('witch').start();
}
function play2 () {
  player.get('melting').start();
}
