const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)



//add a main() to cycle through these questions based on type of employee being entered
main ()
function main() {
    //if user chooses "Manager", display manager prompts
    //else if user chooses "Engineer", display engineer prompts
    //else if user chooses "Intern", display engineer prompts,
    //else if user choose no more ppl, console log and/or return the answers
   managerInput();

    if (answers.choices === "Manager") {
        managerInput();
    }
    else if (answers.choices === "Engineer") {
        engineerInput();
    }
    else if (answers.choices === "Intern") {
        internInput();
    }
    else if (answers.choices === "I don't want to add more team members") {
        console.log(answers)
    }
};

function managerInput() {
    const managerQuestions = 
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
     .then(answers => {
    //     console.info(answers);
    return (answers);  
})
.catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
  };
  

  function engineerInput() {
    const engineerQuestions = 
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
    // .then(answers => {
    //     console.info(answers);
    //   });
    // return this.engineerQuestions(answers);
  }

  function internInput() {
    const internQuestions = 
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
    // .then(answers => {
    //     console.log(answers);
    //   });
    // return this.internQuestions(answers);
  }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
