/*

note:
- the interface is created in index.html
- you can style the interface in style.css

todo
- number input
- text input
- checkboxes
- radio field: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
- labels
- text area
- file upload
- accordions
- color picker
- export button

*/

/* - - Variables - - */

// 1: canvas
let canvasWidth = document.getElementById("canvas-width-slider");
let canvasHeight = document.getElementById("canvas-height-slider");
let zoom = document.getElementById("canvas-zoom-slider");

// 2: sketch
let size = document.getElementById("size-slider");
let outline = document.getElementById("outline-slider");
let bgColor = document.getElementById("color-select");
let textinput = document.getElementById("textinput");
let ellipseColor = 255;

let canvas;

/* - - Setup - - */
function setup() {
  // create canvas inside div
  canvas = createCanvas(canvasWidth.value, canvasHeight.value);
  canvas.parent("canvas");

  // initial canvas zoom
  canvasZoom();

  // initial canvas size
  canvasSize();

  // styling
  strokeWeight(0);

  // set up video export
  initRecorder(canvas);
}

/* - - Draw - - */
function draw() {
  background(bgColor.value);

  // draw our ellipse
  fill(ellipseColor);
  strokeWeight(outline.value);
  stroke(255, 0, 0);
  ellipse(width / 2, height / 2, size.value);

  // draw our text
  fill(255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(50);
  text(textinput.value, width / 2, 15);
}

/* - - Functions - - */

// function: random color
function randomColor() {
  ellipseColor = random(50, 255);
}

// update canvas size
canvasWidth.addEventListener("input", canvasSize); // check for input changes: width
canvasHeight.addEventListener("input", canvasSize); // check for input changes: height

function canvasSize() {
  resizeCanvas(canvasWidth.value, canvasHeight.value); // resize canvas
  document.getElementById("canvas-size").textContent =
    canvasWidth.value + "x" + canvasHeight.value; // update size info
}

// update canvas zoom
zoom.addEventListener("input", canvasZoom); // check for input changes

function canvasZoom() {
  document.getElementById("canvas").style.transform =
    "scale(" + zoom.value + ")"; // scale canvas
  document.getElementById("canvas-zoom").textContent = zoom.value; // update zoom info
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
