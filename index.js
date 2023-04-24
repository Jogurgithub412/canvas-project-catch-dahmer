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


/*function copyImageToCanvas()
//{
let image = document.querySelector("logo-img");
let canvas = document.querySelector("canvas");

ctx.drawImage(
image,
50,50 
)
}*/