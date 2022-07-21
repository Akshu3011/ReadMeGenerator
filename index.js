// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const fs= require('fs');
const markdown=require('./Develop/utils/generateMarkdown');
const { inherits } = require('util');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: "Please provide project Title:",
    },
    {
        type:'input',
        name:'overview',
        message: "Please provide project Overview:",
    },
    {
        type:'input',
        name:'desc',
        message: "Please provide project Description:",
    },
    {
        type:'input',
        name:'installation',
        message: "Please provide project Installation steps:",
    },
    {
        type:'input',
        name:'usage',
        message: "Please provide project Usage:",
    },
 
    {
        type:'list',
        name:'licenses',
        message: "Which license you want to add",
        choices:['MIT','GPLv3','Apache License 2.0','None']
    },

    {
        type:'input',
        name:'tests',
        message: "Please provide the tests:",
    },
    {
        type:'input',
        name:'email',
        message: "Please provide your email id:",
    },
    {
        type:'input',
        name:'github',
        message: "Please provide your Github username:",
    },
];

const [title,desc,acceptanceCriteria,features,installation,credits,licenses]=questions;

// TODO: Create a function to write README file
//var readmeData='';

function writeToFile(fileName, data) {  
  const readmeData=generateMarkdown(data);
 fs.writeFileSync(fileName,readmeData,(err) => err ? console.log(err) : console.log('File Created'));
}

// TODO: Create a function to initialize app

    inquirer.prompt(questions).then((data)=> writeToFile("./ReadMe.md",data)).catch((err)=> console.error(err));
    

// Function call to initialize app


