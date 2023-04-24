class Ball {
    constructor() {
        this.x = 0;
        this.y = 760;
        this.radius = 10;
        this.speed = Math.floor(Math.random() * 0) + 1;
        setInterval(() => {
            this.speed = Math.floor(Math.random() * 5) + 1;
        }, 500);
    }

    update() {
        this.x += this.speed;
        if (this.x > 600) {
            this.x = 0;
            this.speed = Math.floor(Math.random() * 0) + 1;
        }
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
    }
}

class Square {
    constructor(width, height, x, y, speed) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.resetMethod = false;
    }
  
    update() {
      if (this.resetMethod) {
        return;
      }
  
      this.y += this.speed;
  
      // square bottom of the canvas
      if (this.y + this.height > canvas.height) {
        this.speed += 0.2;
        
        //  half a second delay
        this.resetMethod = true;
        setTimeout(() => {
          this.reset();
          setTimeout(() => {
            this.resetMethod = false;
          }, 500);
        }, 500);
      }
    }
  
    reset() {
      this.x = canvas.width / 2 - 35;
      this.y = 0;
    }
  
    draw(context) {
      context.fillStyle = "red";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  
    moveLeft() {
      if (!this.resetMethod) {
        this.x -= 10;
      }
    }
  
    moveRight() {
      if (!this.resetMethod) {
        this.x += 10;
      }
    }
  
    moveDown() {
      if (!this.resetMethod) {
        this.y += 50;
      }
    }
  }

  class Obstacle {
    constructor() {
      this.width = Math.floor(Math.random() * 201) + 100;
      this.height = 20;
      this.x = canvas.width - this.width / 2; //right middle center canvas
      this.y = 400 - this.height / 2;
      this.speed = -(Math.floor(Math.random() * 6) + 1); // random speed 
    }
  
    update() {
      this.x += this.speed;
      if (this.x < -this.width) {
        // out of the canvas, reset
        this.width = Math.floor(Math.random() * 101) + 100;
        this.height = 20;
        this.x = canvas.width - this.width / 2; 
        this.y = 400 - this.height / 2;
        this.speed = -(Math.floor(Math.random() * 6) + 1); 
      }
    }
  
    draw(context) {
      context.fillStyle = "blue";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  
  