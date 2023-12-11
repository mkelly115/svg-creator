const inquirer = require('inquirer');
const fs = require('fs');
const generateShapes = require('./lib/shapes.js'); 
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const questions = [
    {
        type: 'maxlength-input',
        message: 'Please select 3 Characters',
        name: 'char',
        maxLength: '3',
    },
    {
        type: 'input',
        message: 'Please select character text color',
        name: 'charColor',
    },
    {
        type:"list",
        message: "Please select a shape",
        choices: ["circle","triangle","square"],
        name: "shape"
    },
    {
        type: 'input',
        message: 'Please select a shape color',
        name: 'shapeColor',
    },
];

function writeToFile(fileName, content) {
    fs.writeFileSync(fileName, content, 'utf-8');
    console.log(`${fileName} created successfully!`);
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const userSvg = generateShapes(answers); 
        writeToFile("output.svg", userSvg); 

    });
}

init()