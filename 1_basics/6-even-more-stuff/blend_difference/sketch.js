function setup() {
  createCanvas(900, 900);
  noStroke();
  noCursor();
}

function draw() {

  blendMode(BLEND);
  background("white");

  blendMode(DIFFERENCE);
  fill("white");
  ellipse(width / 2, height / 2, 500, 500);
  ellipse(mouseX, mouseY, 500, 500);
}