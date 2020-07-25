const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project.'
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'How should the user use your project?'
    },
    {
        type: 'checkbox', 
        name: 'license',
        message: 'What license do you need to include for your project?',
        choices: ['MIT', 'BSD', 'Apache 2.0', 'GPL', 'MPL 2.0', 'None']

    },
    {
        type: 'input', 
        name: 'contribution', 
        message: 'How can users contribute to your project?'
    },
    {
        type: 'input', 
        name: 'tests',
        message: 'Give users instructions on how to test your project.'
    },
    {
        type: 'input', 
        name: 'github', 
        message: 'What is your GitHub username?'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email address?'
    }

    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log("Generating your README!");
        writeToFile("README.md", generateMarkdown({...responses}));
      })
}

// function call to initialize program
init();
