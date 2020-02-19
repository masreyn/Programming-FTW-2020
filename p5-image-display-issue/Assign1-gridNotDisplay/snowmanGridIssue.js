let grid = undefined;


function setup(){
  createCanvas(1000, 800);
  background("#ccc");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  background(grid);
  //snowman legs
  fill("#f1f1f1");
  stroke(100, 250, 100);
}



/*p5.js says: It looks like there was a problem loading your image. 
Try checking if the file path [https://editor.p5js.org//images/100px_grid.png] is correct, 
hosting the image online, or running a local server.
[https://github.com/processing/p5.js/wiki/Local-server] 
Event {isTrusted: true, constructor: Object}
isTrusted: true
<constructor>: "Event" */