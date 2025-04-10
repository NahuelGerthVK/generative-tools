/* - - Variables - - */
let niceBlue = "#0000FF"; // red

/* - - Setup - - */
function setup() {
  /* insta 4/5 */
  createCanvas(720, 900);

  // initial styling
  background(200);
}

/* - - Draw - - */
function draw() {
  background(200); // 0—255, 0 = black, 255 = white

  // a line with styling
  stroke("#3C2F85");
  strokeWeight(10);
  line(0, 0, width, height);

  // ellipse with styling
  fill(255);
  noStroke();
  ellipse(200, 200, 250);

  // rectangle with styling
  noFill();
  stroke(niceBlue);
  strokeWeight(10);
  rect(400, 80, 250, 250);

  // triangle with styling
  fill(niceBlue);
  stroke(255);
  strokeWeight(10);
  triangle(100, 850, 360, 530, 620, 850);

  // text with styling
  textSize(200);
  textAlign(CENTER, CENTER);
  fill("white");
  noStroke();
  text("Aa", width / 2, height / 2 - 30);
}
