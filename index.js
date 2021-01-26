const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'personName',
    },
    {
        type: 'input',
        message: 'When is your birthday?',
        name: 'description',
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
        console.log(response.personName);
        console.log(response.description);
        const content = generateMarkdown(response);
    }); 
}

// function call to initialize program
init();
