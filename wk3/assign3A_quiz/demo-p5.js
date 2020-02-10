// p5 dom is a library add-on allows you to create htnl elements in js--use js file to create html elements

let heading;
let button;
let input;
let message = 'type something to change me';

//let inputField;
//temp fn
//function sayHi() {
//alert('Hi');
//}

// removed alert cuz no one likes alerts
/*function sayMessage() {
  console.log('help');
  alert(input.value());
  input.value(''); // this clears out the inout box
}*/

function sayMessage() {
  message = input.value();
  input.value('');
}

// using theDOM libray for function setup
function setup () {
  createCanvas(800, 600);
  //background('lightblue');
  heading = createElement('h2', ['Howdy']);
  heading.position(100, 200);
  //button = createButton('Say Hi');
  button = createButton('alert message');
  button.size(100, 16);
  button.position(100, 275);
  //button.mousePressed(sayHi);
  button.mousePressed(sayMessage);
  input = createInput('');
  input.position(100, 250);
}

function draw () {
  background('lightblue');
  textSize(28);
  fill('purple');
  //text('Ken is super cool', 100, 400);
  text(message, 100, 400);
}

// making buttons

// listening to button events--we have create a mousePressed event

// making inputs

// using input values
//--------------------------

// using text (doesn't need DOM library

/*
-we have create a mousePressed event
done we have created an event now we're
13:46
gonna go into a lot more details in with
13:49
events in the very near future but for
13:53
right now what we're doing is we're
13:56
created this mousepressed event we've
13:59
got this button that's listening for a
14:02
mouse press and when that occurs it
14:05
triggers this function this function
14:08
basically takes the value of input and
14:14
alerts out and we can do different
14:17
things with that and then resets input
14:20
to nothing an empty string so far so */

//create canvas, create element, create input, create button, 