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
