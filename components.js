class Ball {
    constructor() {
        this.x = 0;
        this.y = 760;
        this.radius = 10;
        this.speed = Math.floor(Math.random() * 10) + 1;
        setInterval(() => {
            this.speed = Math.floor(Math.random() * 25) + 1;
        }, 500);
    }

    update() {
        this.x += this.speed;
        if (this.x > 600) {
            this.x = 0;
            this.speed = Math.floor(Math.random() * 10) + 1;
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
      this.isResetting = false;
    }
  
    update() {
      if (this.isResetting) {
        return;
      }
  
      this.y += this.speed;
  
      // check square hiting the bottom of the canvas
      if (this.y + this.height > canvas.height) {
        this.speed += 1;
        
        //  half a second delay
        this.isResetting = true;
        setTimeout(() => {
          this.reset();
          setTimeout(() => {
            this.isResetting = false;
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
      if (!this.isResetting) {
        this.x -= 10;
      }
    }
  
    moveRight() {
      if (!this.isResetting) {
        this.x += 10;
      }
    }
  
    moveDown() {
      if (!this.isResetting) {
        this.y += 50;
      }
    }
  }
  