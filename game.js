class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.ball = new Ball();
        this.square = new Square(70, 40, canvas.width / 2 - 35, 0, 2); // create the square
        this.obstacle = new Obstacle();
        this.isRun = false;
        this.score = 0;
        this.lifes = 3;
        


        // listen for arrow keys and down key
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    start() {
        this.isRun = true;
        this.animate();
    }

    animate() {
        if (!this.isRun) {
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // update + draw ball
        this.ball.speed = Math.floor(Math.random()*5)+1;
        this.ball.update();
        this.ball.draw(this.ctx);

        // update + draw square
        this.square.update();
        this.square.draw(this.ctx);

        this.obstacle.update(); // update obstacle
        this.obstacle.draw(this.ctx); // draw obstacle
        //if (/ future condition for increasing score /) { -----------------------------------------------------
        //    this.score++;
        //}

        // increase life if conditions met
        //if (/ future condition to decrease life */) { ------------------------------------------------------------
        //    this.lifes--;
        //}

        // draw the score and lifes
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(20, 20, 200, 40);
        this.ctx.font = "bold 20px Arial";
        this.ctx.fillStyle = "#333";
        this.ctx.fillText(`Score: ${this.score}; Lifes: ${this.lifes}`, 25, 45);
        
        if (this.square.y + this.square.height >= this.canvas.height) {
            this.lifes--;
            this.square.x = canvas.width / 2 - 35;
            this.square.y = 5; //--------------------------------------------------------------------------
          }
      

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
