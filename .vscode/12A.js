// Assigment 12A
// https://tonejs.github.io/ set tones to master
// Tone.Synth is a basic synthesizer with a single envelope and single oscillator.
/*  ADSR envelope component ▵ - triggerAttackRelease is a combination of two methods:
   triggerAttack when the amplitude >↑ and triggerRelease <↓ amplitude */
 
// keycodes https://keycode.info/

let poly;
const c = ['C4'];
const d = ['D4'];
const e = ['E4'];
const f = ['F4'];
const g = ['G4'];
const a = ['A4'];
const b = ['B4'];
let h = ['C5'];

var tremolo = new Tone.Tremolo(9, 0.75).toMaster().start();
//var oscillator = new Tone.Oscillator().conn//ect(tremolo).start();

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(800, 700);
  //vibrato = new p5.Oscillator();
  poly = new Tone.PolySynth(3, Tone.Synth).toMaster();
  poly.set({
    oscillator: {
      type: 'sawtooth'
       //type: 'sine'
    }
  });
}
function draw () {
  // background(255, 164, 70);
  //background(241, 196, 15);
  //background(110, 217, 220);
  //background(22, 160, 133);
  //background(90);
 // background(240, 244, 101);4
 // backgound(160, 160, 160);
  background(189, 195, 199);
  background(54, 69, 79);
  fill(255);
  //fill('white');
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  // text('Press Number Keys 1 - 8 to Play Scale', width / 2, 600);
  text('Play the Scale - Press Number Keys 1 - 8', width / 2, 585);
  textSize(18);
  text('Scale Starts @ Piano Middle C', width / 2, 620);
  // map key sound to shapes
  if (keyCode === 49) {
    noStroke();
    // fill('Fuchsia');
    fill(247, 9, 219);
    ellipse(125, 450, 90, 90);
    textSize(32);
    text('C', 125, 530);
  }
  else if (keyCode === 50) {
    noStroke();
    fill('LawnGreen');
    ellipse(220, 400, 95, 80);
    textSize(32);
    text('D', 220, 480);
  }
  else if(keyCode === 51) {
    fill('DeepSkyBlue');
    // fill('CornFlowerBlue');
    rect(275, 310, 90, 90, 20);
    textSize(32);
    text('E', 320, 440);
  }
    else if (keyCode === 52) {
    fill('OrangeRed');
    ellipse(375, 315, 90);
    textSize(32);
    text('F', 375, 395);
    }
  else if(keyCode === 53) {
    fill('lime');
    rect(400, 230, 95, 90, 20);
    textSize(32);
    text('G', 445, 355);
  } 
  else if(keyCode === 54) {
    fill(255, 165, 0);
    ellipse(499, 230, 97, 80);
    textSize(32);
    text('A', 499, 310);
  }
  else if (keyCode === 55) {
    fill('Fuchsia');
    ellipse(590, 195, 90);
    textSize(32);
    text('B', 595, 280);
  }
  else if (keyCode === 56) {
    // fill('Cyan');
    fill('DarkTurquoise');
    rect(650, 100, 95, 96, 20);
    textSize(32);
    text('C', 700, 230);
  }
} // end fnx draw

function keyPressed() {
  if (keyCode === 49) {
    poly.triggerAttackRelease(c, 0.50);
  } else if (keyCode === 50) {
    poly.triggerAttackRelease (d, 0.50);
  } else if(keyCode === 51) {
    poly.triggerAttackRelease(e, 0.50);
  } else if(keyCode === 52) {
    poly.triggerAttackRelease(f, 0.50);
  } else if (keyCode === 53) {
    poly.triggerAttackRelease(g, 0.50);
  } else if(keyCode === 54) {
    poly.triggerAttackRelease(a, 0.50);
  } else if(keyCode === 55) {
    poly.triggerAttackRelease(b, 0.50);
  } else if(keyCode === 56) {
   // poly.triggerAttackRelease(['C5', 'E4', 'G4'], 0.50);
   poly.triggerAttackRelease(h, 0.50);
  }
}


  // console.log(keyCode)

