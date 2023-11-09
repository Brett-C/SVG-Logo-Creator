const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Square, Triangle } = require('./lib/shapes');

const { default: generate } = require('@babel/generator');
const { validate } = require('@babel/types');

const shapeQuestion = 'What shape would you like your logo to be?'
const shapeColorQuestion = 'What color would you like your shape to be? If using a hex number, remember to include the "#"'
const textQuestion = 'What  letters would you like to use for your svg logo? Please enter up to 3 leters'
const textColorQuestion = 'What color would you like your text to be? If using a hex number, remember to include the "#"'

function validateLength(input) {
    if (input.length !== 3) {
        return "Characters must contain 3 letters."
    }
    return true;
};

function validateAnswer(input) {
    if (input == "") {
        return "Choice can not be empty."
    }
    return true;
}
function logoCreator() {
    inquirer.prompt([
        {
            name: "shape",
            type: "rawlist",
            message: shapeQuestion,
            choices: [
                'Circle',
                'Triangle',
                'Square'
            ]
        },
        {
            name: 'shape_color',
            type: 'input',
            message: shapeColorQuestion,
            validate: validateAnswer
        },
        {
            name: 'characters',
            type: 'input',
            message: textQuestion,
            validate: validateLength
        },
        {
            name: 'text_color',
            type: 'input',
            message: textColorQuestion,
            validate: validateAnswer
        }

    ])

        .then((answer) => {
            const shapes = {
                Circle: Circle,
                Square: Square,
                Triangle: Triangle
            }
            const chosenShapeClass = shapes[answer.shape];

            const shape = new chosenShapeClass(answer.shape_color, answer.characters, answer.text_color);

            writeToFile("./example/logo.svg", shape.render());
        })



}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log('no errors')
    })
};


logoCreator();


// dark green hex code: #013220
// white hex code: #FFFFFF
