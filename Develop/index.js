// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated




//Include packages needed for this application
const Manager= require ('../lib/Manager')
const Engineer= require('../lib/Engineer')
const Employee= require('../lib/Employee')
const Intern= require('../lib/Intern')
const inquirer= require('inquirer')
const fs=requre('fs')
const generateHTML=require('../dist/team.html')

//Create array of user inputs
const questions=[
    {
        type:'input',
        name:'name',
        message: "What is the team managers' name?",
    },
    {
        type:'input',
        name:'id',
        message: "What is the team managers' ID?",
    },
    {    
        type:'input',
        name:'email',
        message: "What is the team managers' email?",
    },
    {    
        type:'input',
        name:'office',
        message: "What is the team managers' office number",
    },
    {    
        type:'list',
        name:'member',
        message: "Which type of team member would you like to add?",
        choices:[
            {name: 'Engineer'},
            {name: 'Intern'},
            {name: 'I do not want to add any additional team members'},
        ]
    },
    {    
        type:'input',
        name:'id',
        message: "What is the team managers' ID",
    },
    {    
        type:'input',
        name:'id',
        message: "What is the team managers' ID",
    },
]
