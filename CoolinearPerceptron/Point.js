var Point = class {
    constructor(lineFunction) {
        //WIDTH and HEIGHT are from Visualization.js
        this.x = Math.random() * WIDTH;
        this.y = Math.random() * HEIGHT;

        if(Math.abs(lineFunction(this.x) - this.y) <= 16) {
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    show() {
        stroke(0);
        this.label === 1 ? fill(255) : fill(0);
        ellipse(this.x, this.y, 32, 32)
    }
}