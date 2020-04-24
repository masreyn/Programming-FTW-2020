// Exercise 12.1
let player;
let button1;
let button2;
let song;
let button;
let amp;
let witch;
let melting;

// Player with tone.js saw on ableton site-example on github
// https://loop.ableton.com/2017/program/activity/interactive-music-tonejs/
// https://tonejs.github.io/docs/r13/Players
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
  createCanvas(800, 650);
  song = loadSound("witch_music.wav", loaded);
  amp = new p5.Amplitude();
  background(51);
  // speech buttons
  button1 = createButton('Good Witch Bad Witch');
  button1.size(175, 30);
  button1.position(225, 375);
  button1.mousePressed(play1);

  button2 = createButton('I&#39;m Melting! I&#39;m Melting!');
  button2.size(175, 30);
  button2.position(450, 375);
  button2.mousePressed(play2);
}
// tornado play button - loaded function is the callback
// tornado-witch song not log enough for pause button
function loaded () {
  noStroke();
  fill('red');
  textSize(32);
  button = createButton('TORNADO');
  button.mousePressed(togglePlaying);
  button.size(125, 30);
  button.position(350, 300);
}
// tornado music
function togglePlaying () {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.7);
    button.html('Pause sTORNADO');
  } else {
    song.pause();
    button.html('TORNADO');
  }
}
function draw () {
  background(52);
  const vol = amp.getLevel();
  const diam = map(vol, 0, 0.7, 60, 600);
  fill(247, 9, 219);
  ellipse(200, 175, diam, diam);
  fill(171, 224, 66);
  ellipse(width / 2, 175, diam, diam);
  fill('red');
  ellipse(600, 175, diam, diam);
  fill('red');
  ellipse(200, 490, diam, diam);
  fill(171, 224, 66);
  ellipse(width / 2, 490, diam, diam);
  fill(247, 9, 219);
  ellipse(600, 490, diam, diam);
}
// tone.js player- example
function play1 () {
  player.get('witch').start();
}
function play2 () {
  player.get('melting').start();
}
