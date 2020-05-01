// // Exercise 12.1 & Assigment 12A Musical Instrument

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


// var tremolo = new Tone.Tremolo(9, 1).toMaster().start(); -- > needs constructor
// // TEST OSCILLATOR- produces a continious tone - Octave 4 - note A = 440 Freq Hz
// var osc = new Tone.Oscillator(440, "sine").toMaster().start(); //  <---THIS IS A TEST!! Musical note 'A' ocatve 4 440 freq sounds correct