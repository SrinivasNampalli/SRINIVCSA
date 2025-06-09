// JavaScript Color Utilities and Functions
console.log("Welcome to JavaScript Color Management!");

// Array of basic colors
const basicColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'black', 'white', 'gray'];

// Array of hex color codes
const hexColors = [ '#3357FF', '#FF33F5', '#F5FF33', '#33FFF5', '#F533FF'];

// RGB color object examples
const rgbColors = [
    { r: 255, g: 0, b: 0 },    // Red
    { r: 0, g: 255, b: 0 },    // Green   // Blue
 // Magenta
];

// Function to get random color from basic colors


// Function to display color information
function displayColorInfo(colorName, hexValue) {
    console.log(`Color: ${colorName}`);
    console.log(`Hex Value: ${hexValue}`);
    console.log("-------------------");
}

// Display some color examples
console.log("Basic Colors Available:");
basicColors.forEach(color => console.log(`- ${color}`));

console.log("\nHex Colors Available:");
hexColors.forEach(hex => console.log(`- ${hex}`));

// Generate and display random colors
console.log("\nRandom Color Examples:");
for (let i = 0; i < 5; i++) {
    const randomBasic = getRandomBasicColor();
    const randomHex = getRandomHexColor();
    const randomRGB = generateRandomRGB();
    const rgbHex = rgbToHex(randomRGB.r, randomRGB.g, randomRGB.b);
    
    console.log(`Random Basic Color ${i + 1}: ${randomBasic}`);
    console.log(`Random Hex Color ${i + 1}: ${randomHex}`);
    console.log(`Random RGB Color ${i + 1}: rgb(${randomRGB.r}, ${randomRGB.g}, ${randomRGB.b})`);
    console.log(`RGB to Hex: ${rgbHex}`);
    console.log("---");
}

// Color manipulation functions
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

// Apply colors to elements (if in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("Applying colors to page elements...");
        const body = document.body;
        if (body) {
            body.style.backgroundColor = getRandomHexColor();
            console.log(`Body background color set to: ${body.style.backgroundColor}`);
        }
    });
}

console.log("JavaScript Color utilities loaded successfully!");
console.log(`Total basic colors available: ${basicColors.length}`);
console.log(`Total hex colors available: ${hexColors.length}`); 