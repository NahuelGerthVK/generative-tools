/* - - Variables - - */

// 1: canvas
let canvasWidth = document.getElementById("canvas-width-slider");
let canvasHeight = document.getElementById("canvas-height-slider");
let zoom = document.getElementById("canvas-zoom-slider");

// 2: sketch
let lines = document.getElementById("lines-slider");
let weight = document.getElementById("weight-slider");
let bgColor = document.getElementById("color-select");
let textinput = document.getElementById("textinput");

let canvas;

// font
let myFont;

// bezier
let lineLength;
let offset = 0;
let maxOffset = 250;

/* - - Preload - - */
function preload() {
  myFont = loadFont("Adapter_bold.otf");
}

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
  textFont(myFont);
  textAlign(LEFT, BOTTOM);
  textSize(30);

  // line length
  lineLength = width * 0.4 - 30;

  // set up video export
  initRecorder(canvas);
}

/* - - Draw - - */
function draw() {
  background(bgColor.value);

  /* - - Bezier lines - - */
  push();
  translate(width / 2, height / 2); // center canvas

  // bezier values
  lineLength = width * 0.4 - 30; // line length
  offset = map(sin(frameCount * 0.03), -1, 1, -maxOffset, maxOffset); // bezier control point offset
  circleSize = map(sin(frameCount * 0.03), -1, 1, 5, 40); // circle size

  // bezier styling
  noFill();
  stroke(255);
  strokeWeight(weight.value);
  strokeCap(SQUARE); // set stroke cap to square

  // loop through our lines
  for (let i = 0; i < lines.value; i++) {
    // rotation
    rotate(radians(360 / lines.value));

    // start point, control point 1, control point 2, end point
    let startPoint = { x: 0, y: 0 };
    let endPoint = { x: 0, y: lineLength };

    bezier(
      // start
      startPoint.x,
      startPoint.y,

      // anchor start
      offset,
      0 + lineLength * 0.1,

      // anchor end
      offset,
      lineLength * 0.9,

      // end
      endPoint.x,
      endPoint.y
    );
  }

  pop();

  // draw our text
  fill(255);
  noStroke();
  text(textinput.value, width * 0.05, height * 0.95);
}

/* - - Functions - - */

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
