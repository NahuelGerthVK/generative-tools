/* - - Setup - - */
function setup() {
  /* insta 4/5 */
  createCanvas(720, 900);

  noStroke(); // no contour
  noCursor(); // hide default cursor
}

/* - - Draw - - */
function draw() {
  background("black");

  // ellipse avoiding mouse
  noFill();
  stroke("white");
  strokeWeight(60);
  ellipse(width - mouseX, height - mouseY, 600, 600);

  // ellipse on mouse
  fill("#B8BE24");
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}
