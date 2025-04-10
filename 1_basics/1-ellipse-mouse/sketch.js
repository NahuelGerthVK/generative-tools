/* - - Setup - - */
function setup() {
  /* insta 4/5 */
  createCanvas(720, 900);

  // initial styling
  background(200);
}

/* - - Draw - - */
function draw() {
  background(200); // 0—255, 0 = black, 255 = white

  // draw our ellipse
  fill(255);
  ellipse(mouseX, mouseY, 200, 200);
}
