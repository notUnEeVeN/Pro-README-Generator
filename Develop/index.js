// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated!');
    });
        
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
