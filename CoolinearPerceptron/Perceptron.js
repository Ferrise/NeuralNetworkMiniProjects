class Perceptron {
    constructor(numWeights = 2) {
        this.weights = []

        // Initialize weights with random numbers between -1 and 1
        for(let i = 0; i < numWeights; i++) {
            this.weights.push(Math.random() * 2 - 1)
        }


    }
}