var readlineSync= require("readline-sync")
var score=0
var userName= readlineSync.question("Enter your name :")
console.log("-----------------------------------------\n")
console.log("Welcome ",userName,"to DO You Know Deepanshu?\n")
console.log("-----------------------------------------")
console.log("You will be asked 10 questions about me\nFor each correct answer ,you will be awarded one point and for being wrong you  will be minus one point")
console.log("\n Let's play the game!!\n");

function play(ques,answer){
    var userAnswer=readlineSync.question(ques)
    if(userAnswer==answer){
      console.log("You are right!")
      score=score+1

    }
    else{
      console.log("You are wrong!")
      score=score-1
    }
    console.log("your score :",score)
    console.log("--------------------------")

  }


var questions=[
  { question: "What is my age? :",
    answer: 21
  },
  { question: "What is my favorite color? :",
    answer: "orange"
  },
  { question: "What is my favorite movie? :",
    answer: "a good year"
  },
  { question: "What is my favorite spot in the Capital? :",
    answer: "lodhi garden"
  },
   { question: "What sport do I like  play? :",
     answer: "basketball"
  },
   { question: "What am I afraid of? :",
     answer: "spiders"
  },
   { question: "What is the name of my startup? :",
    answer: "eon marketing and media"
  },
   { question: "What is my favorite dish? :",
     answer: "rajma chawal"
  },
   { question: "Who is my favorite musician? :",
     answer: "prateek kuhad"
  },
  { question: "Do I drink hard drinks? :",
     answer: "no"
  }
  ]

var highScore=[
  {
    name : "pari",
    score : 8
  },
  {
    name : "amy",
    score : 6
  }
 
]

  for(var i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer)
  }
  console.log("Your Final score :",score)
  
  console.log("\nHigh Score :")
   for(i=0;i<highScore.length;i++){
    console.log(highScore[i].name," :",highScore[i].score)
   }
  for(i=0;i<highScore.length;i++){
    if(score>highScore[i].score){
      console.log("--------------------------------")
      console.log("Yay!!!You broke ",highScore[i].name,"record\nplease send your score Screenshot so we can update highscore records")
      break;
    }
     
    
  }