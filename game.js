let question = document.getElementById('question'); //pulling in questions
const choices = Array.from(document.getElementsByClassName('choice-text')); //pulls in array of question choices queryselectorall
const progressText = document.getElementById('progressText');  //pulls in progress bar text "question 1/10"
const scoreText = document.getElementById('score'); //pulls in display score
const progressBarFull = document.getElementById('progressBarFull'); //pulls in progress bar
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let questions = [];

fetch(
    'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
    //    return questions = loadedQuestions.results.map(loadedQuestion => loadedQuestion);
       for (let i=0; i < loadedQuestions.results.length; i++) {
           console.log(i)
           questions.push(loadedQuestions.results[i])
       }     console.log(questions)
       return questions

    })
   console.log(questions)

   .catch(err=>console.log(err))
