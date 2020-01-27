let grid = undefined;
let fill1 = prompt("What color should the whites of the snowman's eyes be? Enter a basic color name in lower case", "white");
//let stroke1 = prompt("What color so you want for snowman's outline?", "silver" ); // Enter a basic color name in lower case "#a4ceee", "silver"
let fill2 = prompt("What color should the tree be? Enter a basic color name in lower case", "green");
let fill3 = prompt("What color do you want for the snowman's nose? Enter a basic color name in lower case", "orange");

    //snow start- The random() Function - p5.js Tutorial. The random() function at the bottom - layering
    let spot={
      x: 1,
      y: 1,
      };

    let  col = {
      r: 255,
      g: 255, 
      b: 255, 
      };
    //snow end-  

function setup(){
createCanvas(1000, 800);
background("#2980b9");
grid = loadImage("images/100px_grid.png");
}

function draw() {
//background(grid);

//mountain background
fill("#eff8ff");
strokeWeight(5);
stroke("#a4ceee"); 
triangle(1, 800, 1000, 800, 70, 40);
  
//snowman-anatomy
fill("#eff8ff");
strokeWeight(5);
stroke("#a4ceee");
//stroke(stroke1); default gray is jarrring with other stroke coors
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
//left appendage
stroke("#111");
strokeWeight(6);
line(260, 300, 300, 342);

//right arm
stroke("#111");
strokeWeight(6);
line(620, 355, 775, 315);

//therometer
stroke("#a4ceee");
strokeWeight:(4);
fill(255);
rect(745, 209, 23, 160, 20);

//thermometer-temp reading
stroke("#a4ceee");
strokeWeight:(4);
fill(255,0,0);
rect(745, 315, 23, 40);

//thermometer bulb
stroke("#a4ceee");
strokeWeight:(4);
fill(255,0,0);
ellipse(757, 360, 50,50); 

//right appendage
stroke("#111");
strokeWeight(6);
line(700, 335, 760, 280);

// hat brim
//stroke("#c0392b");
stroke("red");
strokeWeight(35);
line(400,120,600,120);
//hat body
fill("red");
noStroke();
quad(425, 35, 575, 35, 565, 120, 445, 120);

//eyes
//eyes ellipse -whites-schlera
stroke("#333");
//fill(255);
fill(fill1);
strokeWeight(4);
///left eye ellipse
ellipse(460, 190, 35, 50);
//right eye ellipse
ellipse(545, 190, 35, 50);

//eyes-black-iris
stroke("#111111");
strokeWeight(25);
//point(464, 200);
//point(549, 200);
point(465, 200);
point(550, 200);
  
//eyes hvs
stroke(255);
noFill();
strokeWeight(5);
//left eye hv
point(468, 200);
//right eye hv
point(553, 200);

//mouth
strokeWeight(4);
stroke(0);
noFill();
arc(505, 245, 70, 35, 0, PI);

//carrot
noStroke(0);
//fill("orange");
fill(fill3);
triangle(510, 199, 625, 280, 500, 217);

//tree2
fill(fill2);
stroke("#a4ceee");
strokeWeight(4);
triangle(170, 35, 220, 400, 120, 400);

//snow function - The random() Function - p5.js Tutorial. The random() function here z-index-layering
  col.r = random (225, 255);
  col.g = (255,255);
  col.b = random (255, 255);
  spot.x = random(0, width);
  spot.y = random(0, height); 
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(spot.x, spot.y, 24, 24);
//snow end

}
