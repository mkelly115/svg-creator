const inquirer = require('inquirer');
const colorList = require('color-name-list');
const fs = require('fs');
const generateShapes = require('./lib/shapes.js'); 

const validateColor = (input) => {

    const isValidColorName = colorList.some((color) => color.name.toLowerCase() === input.toLowerCase());
    const isValidHexCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);

    return isValidColorName || isValidHexCode ? true : 'Please enter a valid color or hexadecimal code';
};

const validateChar = (input) => {
    if (input.length !== 3) {
        return 'Please enter exactly 3 characters';
    }
    return true;
};

const questions = [
    {
        type: 'input',
        message: 'Please select 3 Characters',
        name: 'char',
        validate: validateChar,
    },
    {
        type: 'input',
        message: 'Please select character text color',
        name: 'charColor',
        validate: validateColor,
    },
    {
        type: 'list',
        message: 'Please select a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please select a shape color',
        name: 'shapeColor',
        validate: validateColor,
    },
];

function writeToFile(fileName, content) {
    fs.writeFileSync(fileName, content, 'utf-8');
    console.log(`Generated ${fileName}`);
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const userSvg = generateShapes(answers); 
        writeToFile("logo.svg", userSvg); 

    });
}

init()


