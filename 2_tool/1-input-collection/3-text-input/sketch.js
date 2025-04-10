/* - - Variables - - */
let textinput = document.getElementById("textinput");

/* - - Setup - - */
function setup() {
  // create canvas inside div
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  strokeWeight(0);
}

/* - - Draw - - */
function draw() {
  background(0);

  // draw our text
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  text(textinput.value, width / 2, height / 2);
}
