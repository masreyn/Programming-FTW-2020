// Assignment 11A -Themes of Computational Aesthetics
// Sketch 1 - Repeat w. Translate
// 2D array  cells in shaker- target drug -  weird eyes
// translate(p5.Vector.fromAngle(millis() / 1000, 40));

let cols = 10;
let rows = 10;
let x = 0;
let y = 0;
const colors = [];

function setup () {
createCanvas(700, 600);
  for (let i = 0; i < cols; i++) {
    colors[i] = [];
    for (let j = 0; j < rows; j++) {
      colors[i][j] = random(255)
    }
  }
}
function draw () {
  background(153, 204, 0);
  translate(p5.Vector.fromAngle(millis() / 1000, 100));
  // 2d array
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 70;
      let y = j * 70;
      fill(colors[i][j]);
      ellipse(x, y, 58, 30);
      ellipseMode(CORNER);
      fill('red');
      ellipse(x, y, 14, 14);
      noStroke();
    }
  }
}