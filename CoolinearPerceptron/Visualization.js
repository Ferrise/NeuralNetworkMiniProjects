let perceptron = undefined;
var WIDTH = 640;
var HEIGHT = 640;
let points = [];

function f(x) {
    return x;
}

//PS5 callbacks
function setup() {
    createCanvas(WIDTH, HEIGHT);
    perceptron = new Perceptron();
    let inputs = [-0.74, 0.5];
    let guess = perceptron.guess(inputs);

    for(let i = 0; i < 150; i++) {
        points.push(new Point(f));
    }
}

function draw() {
    background(255);
    line(0, 0, WIDTH, HEIGHT)
    points.forEach((point) => point.show());

}
