// bubble
let bubble1;
let bubble2;
let bubble3;

function setup () {
  createCanvas(500, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  // console.log(bubble.x, bubble.y);  shows coordinates
}

function draw() {
  background('grey');
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
}

class Bubble {
  constructor () {
    this.x = 250;
    this.y = 200;
  }

  move () {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }
  show () {
    stroke(255);
    strokeWeight(4);
    fill("red");
    ellipse(bubble1.x, bubble1.y, 150, 150);
    stroke(255);
    strokeWeight(4);
    fill("Maroon");
    ellipse(bubble1.x, bubble1.y, 50,50);
    stroke(255);
    strokeWeight(4);
    fill("Lime");
    ellipse(bubble3.x, bubble3.y, 25, 25);
  }
}