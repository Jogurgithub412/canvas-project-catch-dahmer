class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.ball = new Ball();
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.animate();
    }

    animate() {
        if (!this.isRunning) {
            return;
        }

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.update();
        this.ball.draw(this.context);

        requestAnimationFrame(() => {
            this.animate();
        });
    }
}
