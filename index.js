const inquirer = require("inquirer");


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
    name: 'txtcolor',
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
    name: 'shpcolor',
},
];

async function init() {

    console.log("Starting (Generated)logo.svg generator...");

    const answers = await inquirer.prompt(questions);
    console.log(answers);
}

init();