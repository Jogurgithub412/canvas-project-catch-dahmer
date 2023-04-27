class Ball {
  constructor() {
    this.x = 0;
    this.y = 960;
    this.radius = 10;
    this.speed = Math.floor(Math.random() * 0) + 1;

    let ballImg = new Image();
    ballImg.src = "docs/assets/images/dahmer.png";
    this.img = ballImg; 
  }

  update() {
    this.x += this.speed;
    if (this.x > 605) {
      this.x = 0;
      this.speed = Math.floor(Math.random() * 0) + 1;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(
      this.img,
      this.x - 50,
      this.y - 45,
      this.radius * 9,
      this.radius * 9
    );
  }
}

class Square {
  constructor(width, height, x, y, speed) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.resetMethod = false;

    let squareImg = new Image();
    squareImg.src = "docs/assets/images/handcuff.png";
    this.img = squareImg;
  }

  update() {
    this.y += this.speed;

    // square bottom of the canvas
    if (this.y + this.height > canvas.height) {
      this.speed += 0.03;
    }
  }

  reset() {
    this.x = canvas.width / 2 - 35;
    this.y = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  draw(ctx) {
    ctx.closePath();
    ctx.drawImage(
      this.img,
      this.x - 3,
      this.y - 10,
      this.width + 20,
      this.height - 145
    );
  }

  moveLeft() {
    if (!this.resetMethod && this.x > -35) {
      // Square inside left border
      this.x -= 10;
    }
  }

  moveRight() {
    if (!this.resetMethod && this.x + this.width < canvas.width + 35) {
      // Square inside right border
      this.x += 10;
    }
  }

  moveDown() {
    if (!this.resetMethod) {
      this.y += 30;
    }
  }
}

class Obstacle {
  constructor() {
    this.width = 150;
    this.height = 20;
    this.x = canvas.width - this.width / 2; //right middle center canvas
    this.y = canvas.width - this.height / 2 - 200;
    this.speed = -(Math.floor(Math.random() * 1) + 1); // random speed

    let obstacleImg = new Image();
    obstacleImg.src = "docs/assets/images/Knife.png";
    this.img = obstacleImg;
  }

  update() {
    this.x += this.speed;
    if (this.x < -this.width) {
      // out of the canvas, reset
      this.width = 150;
      this.height = 20;
      this.x = canvas.width - this.width / 2;
      this.y = canvas.width - this.height / 2 - 200;
      this.speed = -(Math.floor(Math.random() * 1) + 1);
    }
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x + 10, this.y, this.width - 10, this.height);
  }
  draw(ctx) {
    ctx.closePath();
    ctx.drawImage(
      this.img,
      this.x - 3,
      this.y - 10,
      this.width - 20,
      this.height - 150
    );
  }
}

class Obstacle1 {
  constructor() {
    this.width = 125;
    this.height = 20;
    this.x = canvas.width - this.width / 2; //right middle center canvas
    this.y = canvas.width - this.height / 2 + 200;
    this.speed = -(Math.floor(Math.random() * 2) + 1); // random speed

    let obstacleImg = new Image();
    obstacleImg.src = "docs/assets/images/acid.png";
    this.img = obstacleImg;
  }

  update() {
    this.x += this.speed;
    if (this.x < -this.width) {
      // out of the canvas, reset
      this.width = 125;
      this.height = 20;
      this.x = canvas.width - this.width / 2;
      this.y = canvas.width - this.height / 2 + 200;
      this.speed = -(Math.floor(Math.random() * 2) + 1);
    }
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  draw(ctx) {
    ctx.closePath();
    ctx.drawImage(
      this.img,
      this.x - 3,
      this.y - 10,
      this.width - 20,
      this.height - 145
    );
  }
}

class Obstacle2 {
  constructor() {
    this.width = 150;
    this.height = 20;
    this.x = canvas.width - this.width / 2; //right middle center canvas
    this.y = canvas.width - this.height / 2;
    this.speed = -(Math.floor(Math.random() * 3) + 1); // random speed

    let obstacleImg = new Image();
    obstacleImg.src = "docs/assets/images/axe.png";
    this.img = obstacleImg;
  }

  update() {
    this.x += this.speed;
    if (this.x < -this.width) {
      // out of the canvas, reset
      this.width = 150;
      this.height = 20;
      this.x = canvas.width - this.width / 2;
      this.y = canvas.width - this.height / 2;
      this.speed = -(Math.floor(Math.random() * 3) + 1);
    }
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  draw(ctx) {
    ctx.closePath();
    ctx.drawImage(
      this.img,
      this.x - 3,
      this.y - 10,
      this.width - 20,
      this.height - 145
    );
  }
}
