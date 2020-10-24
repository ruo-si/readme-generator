// required packages
const fs = require ("fs");
const inquirer = require("inquirer");
const util = require("until");
const open = require("open");
const generateMarkdown = require("./utils/generateMarkdown")

// turn the writefile into a promise structure
const writeAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
    // list of questions 
];

// function to write README file
function writeToFile(fileName, data) {
    // write file with fileName and date

    // if there is error

}

// function to initialize program
async function init() {

    // save response to variable
   
    // generate markdown to format the data set up as html page

    // call writeToFile function passing answer data

}

// function call to initialize program
init();
