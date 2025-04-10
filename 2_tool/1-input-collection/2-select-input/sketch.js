/* - - Variables - - */
let circleColor = document.getElementById("color-select");

/* - - Setup - - */
function setup() {
  // create canvas inside div
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  noStroke(0);
}

/* - - Draw - - */
function draw() {
  background(0);

  // draw our ellipse
  fill(circleColor.value);
  ellipse(width / 2, height / 2, 400);
}
