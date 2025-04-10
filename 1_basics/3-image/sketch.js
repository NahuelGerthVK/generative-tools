/* - - Variables - - */
let papagei;

/* - - Preload - - */
function preload() {
  papagei = loadImage("parrot.jpg");
}

/* - - Setup - - */
function setup() {
  /* insta 4/5 */
  createCanvas(720, 900);
}

/* - - Draw - - */
function draw() {
  image(papagei, 0, 0, mouseX, mouseY);
}
