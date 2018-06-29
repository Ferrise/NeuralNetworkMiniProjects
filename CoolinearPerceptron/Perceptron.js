class Perceptron {
    constructor(numWeights = 2) {
        this.weights = []

        // Initialize weights randomly
        for(let i = 0; i < numWeights; i++) {
            this.weights.push(Math.random() * 2 - 1)
        }
    }
    
    /**
     * Converts a given value to 1 or -1 (the activation function).
     * @param {number} value The number to be processed.
     * @return {number} The converted value.
     */
    activate(value) {
       return value > 0 ? 1 : -1
    }

    /**
     * Guesses whether a point is on a line.
     * @param {Array.number} inputs Point coordinates in the form [x, y].
     * @return {number} The outputted value of the perceptron.
     */
    guess(inputs) {
        let sum = 0
        //Calculate weighted sum of inputs
        this.weights.forEach(
            (weight, index) => sum += inputs[index] * weight
        )
        return this.activate(sum)
    }
}