class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.ball = new Ball();
        this.square = new Square(70, 40, canvas.width / 2 - 35, 0, 2); // create the square
        this.isRunning = false;
        this.score = 0;
        this.lifes = 3;

        // listen for arrow keys and down key
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
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

        // update and draw the ball
        this.ball.update();
        this.ball.draw(this.context);

        // update and draw the square
        this.square.update();
        this.square.draw(this.context);

        //*if (/* future condition for increasing score */) { -----------------------------------------------------
        //    this.score++;
        //}

        // increase life if conditions met
        //if (/* future condition for decreasing life */) { ------------------------------------------------------------
        //    this.lifes--;
        //}                                                        

        // draw the score and lifes
        this.context.fillStyle = "#fff";
        this.context.fillRect(20, 20, 140, 40);
        this.context.font = "20px Arial";
        this.context.fillStyle = "#333";
        this.context.fillText(`Score: ${this.score}; Lifes: ${this.lifes}`, 25, 45);

        requestAnimationFrame(() => {
            this.animate();
        });
    }

    handleKeyDown(event) {
        const keyCode = event.keyCode;
        if (keyCode === 37) { // left arrow
            this.square.moveLeft();
        } else if (keyCode === 39) { // right arrow
            this.square.moveRight();
        } else if (keyCode === 40) { // down arrow
            this.square.moveDown();
        }
    }
}
