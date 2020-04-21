// 2d array cells - strange eyes
// translate(p5.Vector.fromAngle(millis() / 1000, 40));
// let x = 0;
// let y = 0; 
let cols = 20;
let rows = 25;
let colors = [];
function setup() {
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < cols; i++) {
colors[i] = [];
for (let j =0; j < rows; j++) {
colors[i][j] = random(255)
}  
} 
}  
function draw() {
background(153, 204, 0);
translate(p5.Vector.fromAngle(millis() / 1000, 40));
// 2d array
for (let i = 0; i < cols;  i++) {
for (let j =0; j < rows; j++) {
let x = i * 90;
let y = j * 80; 
fill(colors [i] [j]);
//ellipseMode(CORNER); 
ellipse(x, y, 58, 30); 
ellipseMode(CORNER); 
fill('red'); // Set fill to gray
ellipse(x, y, 15, 15); 
}
} 
}