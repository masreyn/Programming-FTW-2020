
// P5 METHOD 1 https://p5js.org/reference/#/p5/loadImage --page says Loading...
/* let img;
function preload() {
  img = loadImage('penguinCard100.jpg');
}
function setup() {
  image(img, 0, 0);
} */


// P5 METHOD 2 https://p5js.org/reference/#/p5/loadImage  

/* function setup() {
  // here we use a callback to display the image after loading
  loadImage('penguinCard100.jpg', img => {
    image(img, 0, 0);
  });
}

function draw() {
  background('yellow');
 // loadImage(path, [successCallback], [failureCallback]);
} */

//SNOWMAN METHOD  
 let card = undefined;


function setup(){
  createCanvas(1000, 800);
  background("#ccc");
  card = loadImage("penguinCard100.jpg");
}

function draw() {
  background(255);
  //snowman legs
  //fill("#f1f1f1");
  //stroke(100, 250, 100);
}

/*
> p5.js says: It looks like there was a problem loading your image. 
Try checking if the file path [https://editor.p5js.org//images/100px_grid.png] is correct, 
hosting the image online, or running a local server.
[https://github.com/processing/p5.js/wiki/Local-server] 
Event {isTrusted: true, constructor: Object}
isTrusted: true
<constructor>: "Event"loadImage(path, [successCallback], [failureCallback]) */