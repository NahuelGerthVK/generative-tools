// Capture canvas stream with MediaRecorder API
// basically this: canvas.elt.captureStream(30);

/*
use a conververter from .webm to .mp4
e.g. https://www.xconvert.com/convert-webm-to-mp4

- Chrome creates .webm
- Safari creates .mp4
*/

let recorder;
let recordedChunks = [];
let isRecording = false;
let recorderReady = false;

function initRecorder(p5Canvas) {
  const stream = p5Canvas.elt.captureStream(30); // 30 fps

  let options = { mimeType: "video/webm" };

  // fallback for Safari or unsupported types
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.warn("video/webm not supported. Trying video/mp4...");
    options = { mimeType: "video/mp4" };
  }

  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    alert("⚠️ Your browser doesn't support video recording via MediaRecorder.");
    return;
  }

  recorder = new MediaRecorder(stream, options);

  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  };

  recorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: options.mimeType });
    const url = URL.createObjectURL(blob);

    const timestamp =
      "vid " +
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
      nf(second(), 2);

    const a = document.createElement("a");
    a.href = url;
    a.download =
      timestamp + (options.mimeType === "video/mp4" ? ".mp4" : ".webm");
    a.click();

    document.getElementById("start-video-button").classList.add("visible");
    document.getElementById("stop-video-button").classList.remove("visible");
  };

  recorderReady = true;
  console.log("📹 MediaRecorder initialized with " + options.mimeType);
}

function startRecording() {
  if (!recorderReady || isRecording) {
    console.warn("Recorder not ready.");
    return;
  }

  recordedChunks = [];
  recorder.start();
  isRecording = true;

  // Toggle class
  document.getElementById("start-video-button").classList.remove("visible");
  document.getElementById("stop-video-button").classList.add("visible");

  console.log("▶️ Recording started");
}

function stopRecording() {
  if (!recorder || !isRecording) return;

  recorder.stop();
  isRecording = false;
  console.log("🛑 Recording stopped");
}
