const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const fs = require("fs");

let questions = [{
    type: 'input',
    message: 'Enter any text (max 3 characters):',
    name: 'text',
    validate: function(input) {
        if (input.length > 3) {
            return 'Logo text length cannot be greater than 3 characters'
        }
        return true;
    }
},
{
    type: 'input',
    message: 'What should your text color be? (Enter color keyword or hexadecimal number)',
    name: 'textColor',
},
{
    type: 'list',
    message: 'Which shape do you prefer?',
    name: 'shape',
    choices: ['Triangle', 'Circle', 'Square']
},
{
    type: 'input',
    message: 'What color should your shape be?',
    name: 'shapeColor',
},
];

async function init() {

    console.log("Starting (Generated)logo.svg generator...");

    const answers = await inquirer.prompt(questions);
    console.log(answers);
    generateSvgLogo(answers);
}

function generateSvgLogo(data) {
    let svgShape;
    switch (data.shape) {
        case "Triangle":
            svgShape = new Triangle(data.text, data.textColor, data.shapeColor);
          break;
        case "Circle":
            svgShape = new Circle(data.text, data.textColor, data.shapeColor);
          break;
        case "Square":
            svgShape = new Square(data.text, data.textColor, data.shapeColor);
          break;
      }
    
    // Call the render() method of the svgShape object to generate the logoSpecs variable
    const logoSpecs = svgShape.render();
    
    // Save the SVG string to a file named "logo.svg"
    fs.writeFile("./examples/logo.svg", logoSpecs, function (err) {
        if (err) {
        console.error(err);
        } else {
        console.log("Generated logo.svg");
        }
    });
}


init();