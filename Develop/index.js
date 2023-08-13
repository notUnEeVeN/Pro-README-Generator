// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//this is just using the inquirer npm package formatting to prompt the user in the terminal to input the appropriate information about their readme 
//for all input types, the user types out a response, but for the list type, the user selects the options from a list using the arrow and enter keys
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
//this function just creates a file using the title and data that its given, here the title will always be README.md and the data will be whatever the generateMarkdown function exports
function writeToFile(fileName, data) {
    // there is also a third prompt for error, that will inform the user if an error occurs, if no error then it console logs a statement to inform the user that the program successfully worked
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated!');
    });
        
}

// TODO: Create a function to initialize app
//this is the function we run at the bottom of the page, it executes the inquirer questions in the terminal, then once the data is returned, calls the writetoFile function with the filename of README, and the data form the generateMarkdown data which uses the data from the prompted questions to format the page
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
