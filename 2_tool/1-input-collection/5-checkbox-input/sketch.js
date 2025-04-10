/* - - Variables - - */
let checkbox = document.getElementById("checkbox");

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
  background(255);

  // show when checkbox is checked
  if (checkbox.checked) {
    fill(0, 0, 255);
    ellipse(width / 2, height / 2, width * 0.7);
  } else {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(width / 2, height / 2, width * 0.7);
  }
}
