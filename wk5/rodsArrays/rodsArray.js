// gram pos rods | Anthrax
let cells = [];

function setup () {
  createCanvas(600, 400);
  for (var i = 0; i < 20; i++) {
    cells[i] = new Cell(300, 200);
  }
}

function draw() {
  background('#00304A');
  for (let i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  }
}

class Cell {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  move () {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }

  show () {
    noStroke();
    fill('#af35a3');
    rect(this.x, this.y, 37, 18, 20);
  }
}