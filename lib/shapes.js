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
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
                    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${charColor}" font-size="20">${char}</text>
                 </svg>`;
    return svg;
}

function generateTriangle(char, charColor, shapeColor) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,30 240,170 60,170" fill="${shapeColor}" />
                    // <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${charColor}" font-size="20">${char}</text>
                 </svg>`;
    return svg;
}

function generateSquare(char, charColor, shapeColor) {
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="240" height="160" x="30" y="20" fill="${shapeColor}" />
                    <text x="50==7%" y="50%" text-anchor="middle" dy="0.3em" fill="${charColor}" font-size="20">${char}</text>
                 </svg>`;
    return svg;
}

module.exports = generateShapes;

