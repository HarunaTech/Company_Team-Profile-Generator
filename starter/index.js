const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { clear } = require("console");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let teamMembers = [];
function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email?",
      },
      {
        type: "input",
        name: "number",
        message: "What is your manager's office number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.number
      );
      teamMembers.push(manager);
      menuInfo();
    });
}

// This funtion is created for menuInfo
function menuInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message:
          "Would you like to add an Engineer, an intern or finish building the team?",
        choices: ["Engineer", "an intern", "finish building the team"],
      },
    ])
    .then((menuAnswers) => {
      console.log(menuAnswers);

      if (menuAnswers.menu === "Engineer") {
        engineerInfo();
      } else if (menuAnswers.menu === "an intern") {
        internInfo();
      } else {
        writeToFile("teamProfile.html", render(teamMembers));
      }
    });
}


function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your interns's school?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.ID,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      menuInfo();
    });
}


function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "Github",
        message: "What is your Github ?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.ID,
        answers.email,
        answers.Github
      );
      teamMembers.push(engineer);
      menuInfo();
    });
}


managerInfo();
