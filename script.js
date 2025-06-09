// JavaScript file with random functions and code lines
console.log("Welcome to the JavaScript file!");

// Function to generate random numbers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of random colors
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];

// Function to get random color
function getRandomColor() {
    const randomIndex = generateRandomNumber(0, colors.length - 1);
    return colors[randomIndex];
}

// Object with random properties
const randomObject = {
    name: "Random Object",
    value: 42,
    isActive: true,
    description: "This is a random object with various properties"
};

// Function to display object info
function displayObjectInfo(obj) {
    console.log(`Name: ${obj.name}`);
    console.log(`Value: ${obj.value}`);
    console.log(`Active: ${obj.isActive}`);
    console.log(`Description: ${obj.description}`);
}

// Loop to generate random numbers
for (let i = 0; i < 5; i++) {
    const randomNum = generateRandomNumber(1, 100);
    console.log(`Random number ${i + 1}: ${randomNum}`);
}

// Arrow function example
const multiply = (a, b) => a * b;

// Async function example
async function fetchData() {
    console.log("Fetching data...");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

// Event listener example (if running in browser)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM is ready!");
    });
}

// Class example
class RandomClass {
    constructor(name) {
        this.name = name;
        this.createdAt = new Date();
    }
    
    greet() {
        console.log(`Hello from ${this.name}!`);
    }
    
    getAge() {
        const now = new Date();
        return now - this.createdAt;
    }
}

// Create instance and call methods
const instance = new RandomClass("MyInstance");
instance.greet();

// More random variables
let counter = 0;
const maxCount = 10;
const isEnabled = true;

// Another loop
while (counter < maxCount) {
    counter++;
    if (counter % 2 === 0) {
        console.log(`Even number: ${counter}`);
    } else {
        console.log(`Odd number: ${counter}`);
    }
}

// Final message
console.log("JavaScript file execution completed!");
console.log(`Final counter value: ${counter}`);
console.log(`Random color: ${getRandomColor()}`);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateRandomNumber,
        getRandomColor,
        RandomClass,
        multiply
    };
} 