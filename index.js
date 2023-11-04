const inquirer = require('inquirer');
const fs = require('fs')
const Circle = require('./lib/shapes');
const { default: generate } = require('@babel/generator');

const shapeQuestion = 'What shape would you like your logo to be?'
const shapeColorQuestion = 'What color would you like your shape to be? If using a hex number, remember to include the "#"'
const textQuestion = 'What  letters would you like to use for your svg logo? Please enter up to 3 leters'
const textColorQuestion = 'What color would you like your text to be? If using a hex number, remember to include the "#"'


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
        },
        {
            name: 'characters',
            type: 'input',
            message: textQuestion,
        },
        {
            name: 'text_color',
            type: 'input',
            message: textColorQuestion,
        }

    ])

        .then((answer) => {
            console.log(answer.shape)
            console.log(answer.shape_color)
            console.log(answer.characters)
            console.log(answer.text_color)
            let circle = new Circle(answer.shape_color, answer.characters, answer.text_color)
            circle.generate();
            console.log(circle.generate())
        })

}


logoCreator();


// dark green hex code: #013220
// white hex code: #FFFFFF
