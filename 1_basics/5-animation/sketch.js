/* - - Variables - - */
let speed = 0.05;

/* - - Setup - - */
function setup() {
  /* insta 4/5 */
  createCanvas(720, 900);

  // initial styling
  noStroke();
}

/* - - Draw - - */
function draw() {
  background("#FFBA00");

  fill(255);
  ellipse(width / 2, height / 2, map(sin(frameCount * speed), -1, 1, 0, 500));
}
