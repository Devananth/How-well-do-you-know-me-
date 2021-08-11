var readLine = require('readline-sync')

var chalk = require('chalk')

console.log(chalk.bgYellow("Hello , Welcome to the CLI World ! \n"))

var name = readLine.question("Enter your name : ")

console.log("\nWelcome ,", chalk.bgYellow(name), " !!\n \nLet's see how well do you know ", chalk.bgYellow.bold("Deva"), "..?!.,\n");

var questions = [{
  quiz: "What is the full name of Deva ?",
  ans: "DEVANANTH"
},
{
  quiz: "How old is he?",
  ans: "20"
},
{
  quiz: "Where is his native place?",
  ans: "NAMAKKAL"
},
{
  quiz: "Where he is studying ?(Place not college)",
  ans: "CHENNAI"
},
{
  quiz: "What does he play during school days ?",
  ans: "VOLLEYBALL"
}]

var score = 0

for (var i = 0; i < questions.length; i++) {
  var userAnswer = readLine.question((i + 1) + "." + chalk.grey.bgWhiteBright(questions[i].quiz) + "  ");

  if (userAnswer.toUpperCase() === questions[i].ans.toUpperCase()) {
    console.log(chalk.bgGreenBright.bold.red("\nWow ! Correct \n"));
    score += 1;
  }
  else {
    console.log(chalk.white("\nNope ! Wrong , the correct answer is "), chalk.underline.white.bold.white(questions[i].ans + "\n"));
  }

  console.log("+-------------------------------------------+\n");

}

console.log("Thanks , for spending ur valuable time by playing the game!<");


