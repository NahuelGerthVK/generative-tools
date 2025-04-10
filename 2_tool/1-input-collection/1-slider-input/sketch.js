/* - - Variables - - */
let size = document.getElementById("size-slider");

/* - - Setup - - */
function setup() {
  // create canvas inside div
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  noStroke(0);
  fill(255);
}

/* - - Draw - - */
function draw() {
  background(0);

  // draw our ellipse
  ellipse(width / 2, height / 2, size.value);
}
