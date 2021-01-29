const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const filename = "GENERATED_README.md"

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'fullName',
    },
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
        default: 'npm i'
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
        default: 'N/A'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test'
    },
    {
        type: 'list',
        message: 'Which type of license would you like your project to have?',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License 3.0', 'Apache License 2.0'],
        default: 'MIT'
    }
];

// function to write README file
function writeToFile(filename, data) {
    const content = generateMarkdown(data);
    fs.writeFile(filename, content, (err) => {
        err ? console.log(err) : console.log('Generating README...');
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        writeToFile(filename, response);
    }); 
}

// function call to initialize program
init();
