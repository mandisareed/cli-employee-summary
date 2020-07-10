const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//add a main() to cycle through these questions based on type of employee being entered
managerInput();

function managerInput() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "name",
    },

    {
      type: "input",
      message: "What is your manager's id?",
      name: "id",
    },

    {
      type: "input",
      message: "What is your manager's email?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your manager's office number",
      name: "officeNumber",
    },

    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "employeetype",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I don't want to add more team members",
      ],
    },
  ])
  .then
   (answers =>
  {
  console.log(answers);
  

  switch (answers.employeetype) {
    case "Manager":
      managerInput()
      break;

    case "Engineer":
      engineerInput()
      break;

    case "Intern":
      internInput()
      break;

    case "I don't want to add more team members":
      console.log(answers);
  }
  });
}

function engineerInput() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "name",
    },

    {
      type: "input",
      message: "What is your engineer's id?",
      name: "id",
    },

    {
      type: "input",
      message: "What is your engineer's email?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your engineer's Github username?",
      name: "github",
    },

    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "employeetype",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I don't want to add more team members",
      ],
    },
  ])
  .then(answers => {
      console.info(answers);

      switch (answers.employeetype) {
        case "Manager":
          managerInput()
          break;
    
        case "Engineer":
          engineerInput()
          break;
    
        case "Intern":
          internInput()
          break;
    
        case "I don't want to add more team members":
          console.log(answers);
      }
    });
}

function internInput() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name",
    },

    {
      type: "input",
      message: "What is your intern's id?",
      name: "id",
    },

    {
      type: "input",
      message: "What is your intern's email?",
      name: "email",
    },

    {
      type: "input",
      message: "What school does your intern attend?",
      name: "school",
    },

    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "employeetype",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I don't want to add more team members",
      ],
    },
  ])
  .then(answers => {
      console.log(answers);

      switch (answers.employeetype) {
        case "Manager":
          managerInput()
          break;
    
        case "Engineer":
          engineerInput()
          break;
    
        case "Intern":
          internInput()
          break;
    
        case "I don't want to add more team members":
          console.log(answers);
      }

    });
  // return this.internQuestions(answers);
}
