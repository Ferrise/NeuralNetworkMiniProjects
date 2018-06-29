let perceptron = null;
var WIDTH = 640;
var HEIGHT = 640;

//PS5 callbacks
function setup() {
    size(640, 640);
    perceptron = new Perceptron();
    let inputs = [-0.74, 0.5];
    let guess = perceptron.guess(inputs);
}

function draw() {

}