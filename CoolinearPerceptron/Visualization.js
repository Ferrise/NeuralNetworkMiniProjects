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

    for(let i = 0; i < 150; i++) {
        points.push(new Point(f));
    }
}

function draw() {
    background(255);
    line(0, 0, WIDTH, HEIGHT);

    points.forEach((point) => {
        point.show();

        let target = point.label;
        let inputs = [point.x, point.y];

        (perceptron.guess(inputs) === target) ? fill(0, 255, 0)
            : fill(255, 0, 0);
        ellipse(point.x, point.y, 16, 16);
    });

}

function handleTraining(ev) {
    points.forEach((point) => {
        let target = point.label;
        let inputs = [point.x, point.y];

        perceptron.train(inputs, target);
    });
}

window.onload = function() {
    const button = document.querySelector('button');
    button.addEventListener('click', (ev) => handleTraining(ev));
}