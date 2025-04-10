/* - - Variables - - */
let colorpicker = document.getElementById("color-picker");

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
  fill(colorpicker.value);
  ellipse(width / 2, height / 2, 400);
}
