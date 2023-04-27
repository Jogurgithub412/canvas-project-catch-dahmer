const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  const startButton = document.getElementById("start-button");
  startButton.onclick = () => {
    startButton.style.display = "none";
    const game = new Game(canvas, ctx);
    game.start();
  }; 
};
let playing = true
  const muteButton = document.getElementById("mute-button");
  muteButton.onclick = () => {
    const audio = document.getElementById("audio");
    console.log("outside", playing)
    if (playing) {
      audio.pause();
      playing = false
      console.log("if playing", playing)
    } else {
      playing = true
      audio.play()
      console.log("else", playing)
    }
  }

