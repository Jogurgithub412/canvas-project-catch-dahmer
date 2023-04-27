class Ball {
    constructor() {
        this.x = 0;
        this.y = 80;
        this.radius = 10;
        this.speed = Math.floor(Math.random() * 0) + 1;
    }
  }
       const ballImg = new Image()
        ballImg.src = './image/dahmer.png'
        this.img = ballImg

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
        ctx.drawImage(this.img, this.x, this.y-50, this.radius*12,this.radius*12);
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
  
     this.y += this.speed;
  
      // square bottom of the canvas
      if (this.y + this.height > canvas.height) {
        this.speed += 0.2;
        
       
      }
    }
  
    reset() {
      this.x = canvas.width / 2 - 35;
      this.y = 0;
    }
  
    draw(context) {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
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
        this.y += 100;
      }
    }
  }

  class Obstacle {
    constructor() {
      this.width = 150;
      this.height = 20;
      this.x = canvas.width - this.width / 2; //right middle center canvas
      this.y = 400 - this.height / 2;
      this.speed = -(Math.floor(Math.random() * 6) + 1); // random speed 
    }
  
    update() {
      this.x += this.speed;
      if (this.x < -this.width) {
        // out of the canvas, reset
        this.width = 150;
        this.height = 20;
        this.x = canvas.width - this.width / 2; 
        this.y = 400 - this.height / 2;
        this.speed = -(Math.floor(Math.random() * 6) + 1); 
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  