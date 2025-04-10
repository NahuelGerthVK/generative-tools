/* - - Variables - - */
let ellipseColor = 255;

/* - - Setup - - */
function setup() {
  // create canvas inside div
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  noStroke();
}

/* - - Draw - - */
function draw() {
  background(0);

  // draw our ellipse
  fill(ellipseColor);
  ellipse(width / 2, height / 2, 400);
}

/* - - Functions - - */

// function: random color
function randomColor() {
  // random values for R, G, B
  ellipseColor = color(random(0, 255), random(0, 255), random(0, 255));
}
