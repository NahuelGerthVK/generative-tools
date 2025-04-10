/* - - Setup - - */
function setup() {
  // create canvas inside div
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(300);
}

/* - - Draw - - */
function draw() {
  background(0);

  // draw our text
  text("Aa", width / 2, height / 2);
}

// function: export image
function exportImage() {
  console.log("export image");

  save(
    "img " +
      year() +
      "-" +
      nf(month(), 2) +
      "-" +
      nf(day(), 2) +
      " at " +
      nf(hour(), 2) +
      "-" +
      nf(minute(), 2) +
      "-" +
      nf(second(), 2) +
      ".jpg"
  );
}
