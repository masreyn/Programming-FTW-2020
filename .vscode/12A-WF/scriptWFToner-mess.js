// Assigment 12A
// https://tonejs.github.io/ set tones to master
// Tone.Synth is a basic synthesizer with a single envelope and single oscillator.
/*  ADSR envelope component ▵ - triggerAttackRelease is a combination of two methods:
   triggerAttack when the amplitude >↑ and triggerRelease <↓ amplitude */
// keycodes https://keycode.info/

var level;
let poly;
//let player;
let amp;
const c = ['C4'];
const d = ['D4'];
const e = ['E4'];
const f = ['F4'];
const g = ['G4'];
const a = ['A4'];
const b = ['B4'];
//let c2 = ['C5'];

//var tremolo = new Tone.Tremolo(9, 0.75).toMaster().start();
//var oscillator = new Tone.Oscillator().conn//ect(tremolo).start();

function setup() {
  createCanvas(1200, 800);
  // // p5 below -----
  // amplitude = new p5.Amplitude();
  poly = new Tone.PolySynth(3, Tone.Synth).toMaster();
  poly.set({
    oscillator: {
      // type: 'sawtooth'
       type: 'sine'
    }
  });
}
// // TONER.JS DOCUMENTATION --HOW IS THIS RELATED TO VOLUME??? 
  /* var ampEnv = new Tone.AmplitudeEnvelope({
	"attack": 0.1,
	"decay": 0.2,
	"sustain": 1.0,
	"release": 0.8
}).toMaster();
//create an oscillator and connect it
var osc = new Tone.Oscillator().connect(ampEnv).start();
} */ 
function draw () {
  background(189, 195, 199);
  // // WORKS W P5 --> amplitude = new p5.Amplitude();   WHERE CAN THIS BE DONE .setVolume(0.7);
  // //  THIS DOESN'T WORK WITH TONER.JS
              // const vol = 1.5 * amp.getLevel();
            // const diam = map(vol, 0, 0.7, 60, 600);
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  text(
    'Press Number Keys 1 - 8 to Play Scale',
    width / 2,
    height / 2
  );
  // // map key sound to shapes
  if (keyCode === 49) {
    noStroke();
    fill('purple');
    //   ellipse(200, 510, diam, diam); WON'T WORK WITH TONER.JS SYNTH
    ellipse(130, 30, 80, 80);
    textSize(32);
    text('C', 150, 225);
  }
  else if (keyCode === 50) {
    noStroke();
    fill('green');
    ellipse(240, 145, 100, 80);
    //text('B', 122, 100);
  }
  else if(keyCode === 51) {
    fill('blue');
    rect(230, 20, 55, 55, 20);
  }
  else if (keyCode === 52) {
    fill('red');
    beginShape();
    vertex(80, 100);
    quadraticVertex(245, 30, 400, 140);
    bezierVertex(430, 360, 200, 170, 130, 310);
    endShape(CLOSE);
  }
  else if(keyCode === 53) {
    fill('pink');
    rect(230, 20, 55, 55, 20);
  } 
  else if(keyCode === 54) {
    fill('lime');
    ellipse(350, 130, 100, 80);
  }
  else if (keyCode === 55) {
    fill('magenta');
    ellipse(850, 230, 100, 200);
  }
  else if (keyCode === 56) {
    fill('turquoise');
    rect(550, 230, 100, 100);
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
    poly.triggerAttackRelease(['C5', 'E4', 'G4'], 0.50);
  }
}


  // console.log(keyCode)

