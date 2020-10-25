// required packages
const fs = require ("fs");
const inquirer = require("inquirer");
const util = require("util");
const open = require("open");
const generateMarkdown = require("./utils/generateMarkdown")

// turn the writefile into a promise structure
const writeAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
    {
        type : "input",
        name : "title",
        message: "What is the project title?"

    },

    {
        type : "input",
        name : "description",
        message: "Please provide a description about the project."

    }, 
    
    {
        type : "input",
        name : "requirements",
        message: "What are the steps required for installation?"

    },  
    
    {
        type : "input",
        name : "usage",
        message: "What are examples for the use of your project?"

    },  
    
    {
        type : "input",
        name : "credits",
        message: "List any collaborators and links to profiles."

    },  
    
    {
        type : "input",
        name : "license",
        message: "Provide a license to the project"

    },  
];

// function to write README file
async function writeToFile(fileName, data) {
    // write file with fileName and date
    await writeAsync (fileName, data);

    // if there is error

}

// function to initialize program
async function init() {

    // save response to variable
    const answers = await inquirer.prompt(questions);

    // generate markdown to format the data set up as html page
    const htmlString = generateMarkdown(answers);

    // call writeToFile function passing answer data
    await writeAsync(answers.title + ".md", htmlString );

}

// function call to initialize program
init();
