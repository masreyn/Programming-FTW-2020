  function setup () {
  createCanvas(600, 600);
}

function createTile (orginX, orginY, primaryColor, secondaryColor, quatrefoilCircles, electronCircles) {
  translate(orginX, orginY);
  // mine
  fill(primaryColor);
  rect(0, 0, 200, 200);
  // rondelle circle 2- large
  noFill();
  stroke(secondaryColor);
  strokeWeight(4);
  circle(100, 100, 165);
  // quatrefoil circles
  noStroke();
  fill(quatrefoilCircles);
  circle(100, 60, 70);
  circle(60, 100, 70);
  circle(140, 100, 70);
  circle(100, 140, 70);
  // electronCircles
  noStroke();
  fill(electronCircles)
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
  // center circle 2- middle
  noStroke();
  fill('cyan')
  circle(100, 100, 40);
  // triangles- make star
  fill('#333');
  triangle(90, 110, 100, 85, 110, 110);
  triangle(90, 90, 110, 90, 100, 115);
  // center circle- smallest
  noStroke();
  fill('red')
  circle(100, 100, 8);
}

function draw () {
  createTile(0, 0, 'gray', 'white', 'coral', 'cyan');
  createTile(0, 200, 'coral', 'cyan', 'teal', 'white');
  createTile(0, 200, 'cyan', 'yellow', ' teal', 'gray');
  createTile(200, -400, 'cyan', 'yellow', 'teal', 'gray');
  createTile(0, 200, 'gray', 'white', 'coral', 'cyan');
  createTile(0, 200, 'coral', 'cyan', 'teal', 'white');
  createTile(200, -400, 'coral', 'cyan', 'teal', 'white');
  createTile(0, 200, 'cyan', 'yellow', 'teal', 'gray');
  createTile(0, 200, 'gray', 'white', 'coral', 'cyan');
}
