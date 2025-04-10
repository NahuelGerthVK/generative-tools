/*

note:
- the interface is created in index.html
- you can style the interface in style.css

*/

/* - - Variables - - */
let size = document.getElementById("size-slider");
let outline = document.getElementById("outline-slider");
let textinput = document.getElementById("textinput");
let canvas;

/* - - Setup - - */
function setup() {
  // create canvas inside div
  canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // styling
  strokeWeight(0);

  // set up video export
  initRecorder(canvas);
}

/* - - Draw - - */
function draw() {
  background(255);

  // draw our ellipse
  fill(0);
  strokeWeight(outline.value);
  stroke(255, 0, 0);
  ellipse(width / 2, height / 2, size.value);

  // draw our text
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(50);
  text(textinput.value, width / 2, 15);
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
