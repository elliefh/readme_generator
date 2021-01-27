const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be run to install necessary dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please write instructions and examples for project use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list your collaborators github username, as well as any tutorials or third-party assets you used for the project.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which type of license would you like your project to have?',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License 3.0', 'Apache License 2.0']
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        console.log(response.userName);
        console.log(response.email);
        console.log(response.projectName);
        console.log(response.description);
        console.log(response.license);


        // const content = generateMarkdown(response);
    }); 
}

// function call to initialize program
init();
