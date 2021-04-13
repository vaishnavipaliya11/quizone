var readlineSync = require('readline-sync')
var readlineSync=require("readline-sync");
var userName=readlineSync.question("May i have your name? ");
console.log("hello "+userName,"welcome to the QUIZ");
console.log("Rules:")
console.log("1.you have to answer each and every question asked to you.")
console.log("2.correct answer will increase your point by 1 and wrong answer   will decrease your point by 1.")
console.log("-----------")
var score=0;


var questions=[{
  question:"where do i live? ",
  answer:"umred"},
  {
    question:"what is my age?? ",
    answer:"21"
  },
  {
    question:"what's my fav color?? ",
    answer:"pink"
  },
  {
    question:"which is my fav dish? ",
    answer:"pani-puri"
  },
  {
    question:"what is my fav book? ",
    answer:"subtle art "
  }
  ];

function quiz(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log("you're right!");
    score=score+1;
    // console.log("your score is "+score);
  }
  else{
    console.log("you're wrong! ");
    console.log("correct ans is: "+answer);
    score=score-1

  }
  console.log("-----------------");
}

  for(var i=0;i<questions.length;i++)
  {
    var currentQue=questions[i];
    quiz(currentQue.question,currentQue.answer)
  }

console.log( "your score is :",+score)

