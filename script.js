// Color Management System in JavaScript
console.log("Initializing Color Management System...");

// Collection of primary color names
const primaryColorList = ['crimson', 'azure', 'emerald', 'golden', 'violet', 'coral', 'rose', 'ebony', 'ivory', 'silver'];

// Hexadecimal color palette
const colorPalette = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#E67E22', '#1ABC9C'];

// Color data structure using RGB values
const colorDatabase = [
    { red: 220, green: 20, blue: 60 },     // Crimson
    { red: 50, green: 205, blue: 50 },     // Lime Green  
    { red: 30, green: 144, blue: 255 },    // Dodger Blue
    { red: 255, green: 215, blue: 0 },     // Gold
    { red: 138, green: 43, blue: 226 }     // Blue Violet
];

// Retrieve a random color name from the collection
function pickRandomColorName() {
    const index = Math.floor(Math.random() * primaryColorList.length);
    return primaryColorList[index];
}

// Select a random hex color from the palette
function selectHexColor() {
    const position = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[position];
}

// Transform RGB values into hexadecimal format
function convertToHexFormat(red, green, blue) {
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

// Create random RGB color values
function createRandomRGBColor() {
    return {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256)
    };
}

// Show color details in console
function printColorDetails(colorTitle, hexCode) {
    console.log(`Color Name: ${colorTitle}`);
    console.log(`Hex Code: ${hexCode}`);
    console.log("==================");
}

// List all available color options
console.log("Available Color Names:");
primaryColorList.map(colorName => console.log(`• ${colorName}`));

console.log("\nHex Color Palette:");
colorPalette.map(hexValue => console.log(`• ${hexValue}`));

// Demonstrate color generation
console.log("\nColor Generation Examples:");
for (let count = 1; count <= 3; count++) {
    const selectedColorName = pickRandomColorName();
    const selectedHexColor = selectHexColor();
    const generatedRGB = createRandomRGBColor();
    const convertedHex = convertToHexFormat(generatedRGB.red, generatedRGB.green, generatedRGB.blue);
    
    console.log(`Example ${count}:`);
    console.log(`  Color Name: ${selectedColorName}`);
    console.log(`  Hex from Palette: ${selectedHexColor}`);
    console.log(`  Generated RGB: rgb(${generatedRGB.red}, ${generatedRGB.green}, ${generatedRGB.blue})`);
    console.log(`  Converted to Hex: ${convertedHex}`);
    console.log("  ---------------");
}

// Color brightness adjustment utility
function adjustBrightness(hexColor, brightnessLevel) {
    const colorValue = parseInt(hexColor.replace("#", ""), 16);
    const adjustment = Math.round(2.55 * brightnessLevel);
    const redChannel = Math.min(255, Math.max(0, (colorValue >> 16) + adjustment));
    const greenChannel = Math.min(255, Math.max(0, (colorValue >> 8 & 0x00FF) + adjustment));
    const blueChannel = Math.min(255, Math.max(0, (colorValue & 0x0000FF) + adjustment));
    
    return `#${((redChannel << 16) | (greenChannel << 8) | blueChannel).toString(16).padStart(6, '0')}`;
}

// Web page color application (browser environment)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('load', function() {
        console.log("Setting up page colors...");
        const pageBody = document.querySelector('body');
        if (pageBody) {
            const randomBackgroundColor = selectHexColor();
            pageBody.style.backgroundColor = randomBackgroundColor;
            console.log(`Page background updated to: ${randomBackgroundColor}`);
        }
    });
}

// System status report
console.log("Color Management System initialized successfully!");
console.log(`Color names loaded: ${primaryColorList.length}`);
console.log(`Hex colors available: ${colorPalette.length}`);
console.log(`RGB color templates: ${colorDatabase.length}`);
