class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.ball = new Ball();
    this.square = new Square(70, 40, canvas.width / 2 - 35, 0, 2); // create the square
    this.obstacle = new Obstacle();
    this.obstacle1 = new Obstacle1();
    this.obstacle2 = new Obstacle2();
    this.isRun = false;
    this.score = 0;
    this.lives = 3;

    // listen for arrow keys and down key
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  start() {
    this.isRun = true;
    this.animate();
  }
  /*   createBackground() {
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
  } */

  animate() {
    if (!this.isRun) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // update ball
    this.ball.speed = Math.floor(Math.random() * 5) + 1;
    this.ball.update();
    this.ball.draw(this.ctx);

    // update square
    this.square.update();
    this.square.draw(this.ctx);

    // update obstacle
    this.obstacle.update();
    this.obstacle.draw(this.ctx);

    // update obstacle
    this.obstacle1.update();
    this.obstacle1.draw(this.ctx);

    // update obstacle
    this.obstacle2.update();
    this.obstacle2.draw(this.ctx);

    // Draw score / lives board
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(10, 15, 255, 40);
    this.ctx.font = "bold 25px Monospace";
    this.ctx.fillStyle = "#333";
    this.ctx.fillText(`Score:${this.score}`, 15, 45);
    this.ctx.fillStyle = "red";
    this.ctx.fillText(`Lives:${this.lives}`, 15, 75);


    // square hits bottom canvas
    if (this.square.y + this.square.height - 60 >= this.canvas.height) {
      this.lives--;
      this.square.x = canvas.width / 2 - 35;
      this.square.y = 5;
      setTimeout(() => {
        this.animate();
      }, 500);
    }

    // square hits obstacle
    else if (
      this.square.y + this.square.height >= this.obstacle.y &&
      this.square.x + this.square.width >= this.obstacle.x &&
      this.square.x <= this.obstacle.x + this.obstacle.width &&
      this.square.y <= this.obstacle.y + this.obstacle.height
    ) {
      this.lives--;
      this.square.x = canvas.width / 2 - 35;
      this.square.y = 5;
      this.obstacle.x = canvas.width - this.obstacle.width / 2;
      setTimeout(() => {
        this.animate();
      }, 500);
    }

    // square hits obstacle1
    else if (
      this.square.y + this.square.height >= this.obstacle1.y &&
      this.square.x + this.square.width >= this.obstacle1.x &&
      this.square.x <= this.obstacle1.x + this.obstacle1.width &&
      this.square.y <= this.obstacle1.y + this.obstacle1.height
    ) {
      this.lives--;
      this.square.x = canvas.width / 2 - 35;
      this.square.y = 5;
      this.obstacle1.x = canvas.width - this.obstacle1.width / 2;
      setTimeout(() => {
        this.animate();
      }, 500);
    }

    // square hits obstacle2
    else if (
      this.square.y + this.square.height >= this.obstacle2.y &&
      this.square.x + this.square.width >= this.obstacle2.x &&
      this.square.x <= this.obstacle2.x + this.obstacle2.width &&
      this.square.y <= this.obstacle2.y + this.obstacle2.height
    ) {
      this.lives--;
      this.square.x = canvas.width / 2 - 35;
      this.square.y = 5;
      this.obstacle2.x = canvas.width - this.obstacle2.width / 2;
      setTimeout(() => {
        this.animate();
      }, 500);
    }

    // square hits ball
    else if (
      this.square.y < this.ball.y + this.ball.radius * 2 &&
      this.square.x + this.square.width > this.ball.x &&
      this.square.x + 5 < this.ball.x + this.ball.radius * 2 &&
      this.square.y - 27 + this.square.height > this.ball.y
    ) {
      this.score++;
      this.square.x = canvas.width / 2 - 35;
      this.square.y = 5;
      this.ball.x = 0;
      this.ball.y = 960;
      setTimeout(() => {
        this.animate();
      }, 500);
    }

    // lives is 0, game over
    else if (this.lives === 0) {
      this.isRun = false;
      const img = new Image();
      img.src = "docs/assets/images/Game_over.png";
      img.onload = () => {
        const maxWidth = Math.min(img.width, this.canvas.width);
        const maxHeight = Math.min(img.height, this.canvas.height);
        const x = (this.canvas.width - maxWidth) / 2;
        const y = (this.canvas.height - maxHeight) / 2;
        this.ctx.drawImage(img, x, y, maxWidth, maxHeight);
      };
    } else {
      requestAnimationFrame(() => {
        this.animate();
      });
    }
  }

  handleKeyDown(event) {
    const keyCode = event.keyCode;
    if (keyCode === 37) {
      // left arrow
      this.square.moveLeft();
    } else if (keyCode === 39) {
      // right arrow
      this.square.moveRight();
    } else if (keyCode === 40) {
      // down arrow
      this.square.moveDown();
    }
  }
}
