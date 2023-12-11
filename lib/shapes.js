function generateShapes(answers) {
    const { char, charColor, shape, shapeColor } = answers;

    let svgContent = '';

    // Add SVG content based on the selected shape
    switch (shape) {
        case 'circle':
            svgContent = generateCircle(char, charColor, shapeColor);
            break;
        case 'triangle':
            svgContent = generateTriangle(char, charColor, shapeColor);
            break;
        case 'square':
            svgContent = generateSquare(char, charColor, shapeColor);
            break;
        default:
            console.error('Invalid shape selected.');
    }

    return svgContent;
}

function generateCircle(char, charColor, shapeColor) {
    const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="${shapeColor}" />
                    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${charColor}" font-size="15">${char}</text>
                 </svg>`;
    return svg;
}

function generateTriangle(char, charColor, shapeColor) {
    const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,10 90,90 10,90" fill="${shapeColor}" />
                    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${charColor}" font-size="15">${char}</text>
                 </svg>`;
    return svg;
}

function generateSquare(char, charColor, shapeColor) {
    const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height="80" x="10" y="10" fill="${shapeColor}" />
                    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${charColor}" font-size="15">${char}</text>
                 </svg>`;
    return svg;
}
// why is the link needed above to make this function - it does function now but I do not understand why I need a weblink

module.exports = generateShapes;

