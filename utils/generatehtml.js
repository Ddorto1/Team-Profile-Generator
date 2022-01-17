function generateHtml(data){
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <div class= "card">
        <h1>MANAGER</h1>
        <h2 class= "mgr-name"> ${answers.mgrname}</h2>
        <h3 class= "mgr-id">${answers.mgrid}</h3>
        <h3 class= "mgr-email"> ${answers.email}</h3>
        <h3 class= "mgr-office">${answers.office}</h3>
    </div>
    <div class= "engcard">
        <h1>ENGINEER</h1>
        <h2 class= "eng-name"> ${answers.engName}</h2>
        <h3 class= "eng-id">${answers.engId}</h3>
        <h3 class= "eng-email"> ${answers.engEmail}</h3>
        <h3 class= "github">${answers.github}</h3>
    </div>
    <div class= "intcard">
        <h1>INTERN</h1>
        <h2 class= "int-name"> ${answers.internName}</h2>
        <h3 class= "int-id">${answers.internId}</h3>
        <h3 class= "int-email"> ${answers.internEmail}</h3>
        <h3 class= "school">${answers.school}</h3>
    </div>
</body>
</html>`
}

module.exports= generateHtml