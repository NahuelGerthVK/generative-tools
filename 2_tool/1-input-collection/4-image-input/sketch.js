// works with gifs too!

/* - - Variables - - */
let img;

/* - - Preload - - */
function preload() {
  img = loadImage("default.jpg"); // default image
}

/* - - Setup - - */
function setup() {
  // create canvas inside div
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");

  // get our image
  let uploadElement = document.getElementById("imageUpload");
  uploadElement.addEventListener("change", handleImageUpload);

  // styling
  background(255);
}

/* - - Draw - - */
function draw() {
  // no background
  // background(255);

  // draw our image
  image(img, 0, 0, mouseX, mouseY);
}

/* - - Functions - - */
function handleImageUpload(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();

    reader.onload = function (e) {
      // Set preview image
      document.getElementById("imagePreview").src = e.target.result;

      // Load image into p5
      img = loadImage(e.target.result);
    };

    reader.readAsDataURL(file);
  }
}
