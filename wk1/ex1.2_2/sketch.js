
function setup() {
    createCanvas(640, 480);
  }
  
  
  function draw() {
    if (mouseIsPressed) {
      fill("red");
      ellipse(mouseX, mouseY, 160, 50);
    } else {
      fill(64,224,208);
      stroke("silver")
      rect(mouseX, mouseY, 160, 15,);
    }
    //ellipse(mouseX, mouseY, 80, 80);
  }
  

