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
const inquirer= require('inquirer')
const Manager= require ('./lib/Manager')
const Engineer= require('./lib/Engineer')
const Employee= require('./lib/Employee')
const Intern= require('./lib/Intern')
const fs = require('fs')
const generateHTML=require('./utils/generatehtml')
// const HTML=require('./utils/team')
// const { write } = require('ieee754')

// const fs=requre('fs')
// const generateHTML=require('dist/team.html')
const members= []
//Create array of user inputs
const questions=
inquirer.prompt([
    {
        type:'input',
        name:'mgrname',
        message: "What is the team managers' name?",
    },
    {
        type:'input',
        name:'mgrid',
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
        choices:['Engineer','Intern','I do not want to add any more team members.', ],  
}])

// If selection is Engineer ask the following questions
.then(answers=>{
    if (answers.member==='Engineer'){
        inquirer.prompt([
            {
            type: 'input',
            name:'engName',
            message:"What is the Engineers' name"
            },
    
            {
            type:'input',
            name:'engId',
            message: "What is the Engineers' ID?",
            },
            {    
            type:'input',
            name:'engEmail',
            message: "What is the Engineers' email?",
            },
            {
            type:'input',
            name: 'github',
            message:"What is the Engineers' Github username",
            }
        ])
    } 
    
// If selection is Engineer ask the following questions
    else if (answers.member==='Intern'){
        inquirer.prompt([
            {     
            type: 'input',
            name:'internName',
            message:"What is the Interns' name?"
            },
    
            {
            type:'input',
            name:'internId',
            message: "What is the interns' ID?",
            },
            {    
            type:'input',
            name:'internEmail',
            message: "What is the interns' email?",
            },
            {
            type:'input',
            name: 'school',
            message:"What school is the intern currently attending?",
            }
    ])
}
        // .then(response=>{
        //     const mgr= new manager (answers.mgrname, answers.mgrid, answers.email, answers.office)
        //     members.push(mgr)
        //     console.log (mgr)
        // })
        // .then(response=>{
        //     const eng= new Engineer (answers.name, answers.engId, answers.engEmail, answers.github)
        //     members.push(eng)
        //     console.log(eng)
        // })
        // .then(response=>{
        //     const intern= new Intern (answers.internName, answers.internId, answers.internEmail, answer.school)
        //     members.push(intern)
        //     console.log(intern)
        // })
    },

  
function write(data){
    fs.writeFile('team.html', generateHtml(data), err=>{
    if (err) throw new Error(err);
    console.log('HTML complete! Reference TEAM.html to see the results')
})
},

function init(){
    inquirer.prompt (questions)
    // .then (data=>{
    
    //     write(data)
    })

