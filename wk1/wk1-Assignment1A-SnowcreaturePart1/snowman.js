let grid = undefined;

function setup(){
createCanvas(1000, 800);
background("#2980b9");
grid = loadImage("images/100px_grid.png");
}

function draw() {
background(grid);

//ground
fill("#eff8ff");
strokeWeight(5);
stroke("#a4ceee"); 
//rect(1000, 800, 1000, 800);
rect(800, 800, 800, 800); 
// A rectangle
rect(1, 700, 1000, 800);

 // tree1
 fill("#1abc9c");
 stroke("#a4ceee");
 strokeWeight(4);
 triangle(100, 710, 700, 710, 310, 2);

//snowman-anatomy
fill("#eff8ff");
strokeWeight(5);
stroke("#a4ceee");

//body-lower
ellipse(500, 640, 320, 290);
//body-torso
ellipse(500, 415, 260, 250);
//head
ellipse(500, 200, 210, 200);

//left arm
stroke("#111");
strokeWeight(6);
line(240, 330, 405, 370);

//right arm
stroke("#111");
strokeWeight(6);
line(620, 355, 775, 315);

//eyes
//eyes-black-iris
stroke("#111111");
strokeWeight(25);
//point(464, 200);
//point(549, 200);
point(465, 200);
point(550, 200);
  


//mouth
strokeWeight(4);
stroke(0);
noFill();
//arc(505, 245, 70, 35, 0, PI);
 //arc(505, 245, 45, 45, 0, PI + QUARTER_PI,);
 arc(500, 250, 70, 70, 0, PI + QUARTER_PI, CHORD);

// hat brim
//stroke("#c0392b");
stroke("red");
strokeWeight(35);
line(400,120,600,120);
//hat body
fill("red");
stroke(3);
quad(425, 35, 575, 35, 565, 120, 445, 120);

//carrot
noStroke(0);
fill(0);
ellipse(505, 205, 35,35);


//tree2
fill("green");
stroke("#a4ceee");
strokeWeight(4);
triangle(100, 35, 220, 400, 20, 400);



}





