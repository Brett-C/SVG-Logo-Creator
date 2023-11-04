const shapes = require('./lib/shapes');
const inquirer = require('inquirer');

const shapeQuestion = 'What shape would you like your logo to be?'
const shapeColorQuestion = 'What color would you like your shape to be? If using a hex number, remember to include the "#"'
const textQuestion = 'What 3 letters would you like to use for your svg logo? Please enter 3 leters'
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
        name: 'logo_text',
        type: 'input',
        message: textQuestion,
    },
    {
        name: 'text_color',
        type: 'input',
        message: textColorQuestion,
    }

])
}

module.exports = shapes;



logoCreator();


// dark green hex code: #013220
// white hex code: #FFFFFF
