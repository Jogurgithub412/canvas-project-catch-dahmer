class Ball {
    constructor() {
        this.x = 0;
        this.y = 760;
        this.radius = 10;
        this.speed = Math.floor(Math.random() * 6) + 1;
        setInterval(() => {
            this.speed = Math.floor(Math.random() * 6) + 1;
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
