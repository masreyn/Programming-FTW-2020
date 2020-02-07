function setup () {
  createCanvas(200, 200);
}

function createTile () {
  translate(0, 0);
  fill('coral');
  rect(0, 0, 200, 200);

  // rondelle circle 1-larger
  noFill();
  stroke('cyan');
  strokeWeight(7);
  circle(100, 100, 225);

  // rondelle circle 2- large
  noFill();
  stroke('cyan');
  strokeWeight(4);
  circle(100, 100, 165);

  // quadrofoil circles
  noStroke();
  fill('teal');
  circle(100, 60, 70);
  circle(60, 100, 70);
  circle(140, 100, 70);
  circle(100, 140, 70);

  // small circles sides
  noStroke();
  fill('white')
  circle(45, 45, 30);
  circle(45, 155, 30);
  circle(155, 45, 30);
  circle(155, 155, 30);

  // lines
  stroke('tan');
  strokeWeight(4);
  line(50, 100, 150, 100);
  line(100, 50, 100, 150);

  // points
  stroke('pink');
  strokeWeight(15);
  point(45, 100);
  point(155, 100);
  point(100, 50);
  point(100, 150);

  // center circle 1- largest
  noStroke();
  fill('yellow')
  circle(100, 100, 50);

  // center circle2- middle
  noStroke();
  fill('cyan')
  circle(100, 100, 40);

  // triangles- make star
  fill('#333');
  triangle(90, 110, 100, 85, 110, 110);
  triangle(90, 90, 110, 90, 100, 115);

  // center circle-smallest
  noStroke();
  fill('red')
  circle(100, 100, 8);
}

function draw () {
  createTile();
  noLoop();
}