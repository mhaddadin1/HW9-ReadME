// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "what is the name of your project",
  },
  {
    name: "description",
    type: "input",
    message: "enter description of project",
  },
  {
    name: "installation",
    type: "input",
    message: "description of the project installation",
  },
  {
    name: "usage",
    type: "input",
    message: "instructions on how to use your project",
  },
  {
    name: "license",
    type: "list",
    message: "what kind of license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    name: "contributing",
    type: "input",
    message: "how to contribute to your project",
  },
  {
    name: "tests",
    type: "input",
    message: "how to test your project",
  },
  {
    name: "github link",
    type: "input",
    message: "enter github repo link",
  },
  {
    name: "github pages",
    type: "input",
    message: "enter github pages link",
  },
  {
    name: "email",
    type: "input",
    message: "enter email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Done")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
