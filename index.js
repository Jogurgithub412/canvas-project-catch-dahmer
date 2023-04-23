document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const startButton = document.getElementById("start-button");
    const game = new Game(canvas);

    startButton.addEventListener("click", () => {
        startButton.style.display = "none";
        game.start();
    });
});
