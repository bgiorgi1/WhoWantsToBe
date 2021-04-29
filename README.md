# Who Wants To Be a Software Engineer?

Explanation of the game that was built and the deployed link will go here.

Who Wants To Be a Software Engineer (WWTBSE) is a single player trivia game, that you can win by getting at least 5 questions right/recieve a score of 500 and above. 

Access the live deployed game:
https://bgiorgi1.github.io/WhoWantsToBe/


# HOW TO PLAY
This game is played by:
1) Clicking the "Play" button on the first screen displayed.
![start](Start.png)
2) You will then be presented a question with four choices.  From here, you select which answer you think is correct.
![questions](Questions.png)
3) Once you select your answer, you click "next" button to access the next question.
4) You continue to answer 10 questions. for each questions that you answer correctly, you recieve 100pts.
5) Once you reach the last question, a pop up will appear notifying you of your win or loss. 
6) From here, you may select "try again" in order to play the game again.

# HOW TO INSTALL

1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code

# HOW IT WORKS
One of the first tasks was fetching the API I wanted to use and making that information come to life on the page.  Here's how I did it:
```Javascript
fetch(
  "https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple"
)
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    //    return questions = loadedQuestions.results.map(loadedQuestion => loadedQuestion);
    for (let i = 0; i < loadedQuestions.results.length; i++) {
      loadedQuestions.results[i]["possible_answers"] =
        loadedQuestions.results[i]["incorrect_answers"]; //this shows loadedquestions as possible answers
      loadedQuestions.results[i]["possible_answers"].push(
        loadedQuestions.results[i]["correct_answer"]
      ); //pushing correct answer to array
      shuffle(loadedQuestions.results[i]["possible_answers"]);
      questions.push(loadedQuestions.results[i]);
    }
    showQuestions(0, questions);
  })
```
After the questions and answers were appearing on the page, I added a function so that they would light up green or red depending on whether your answer was correct or not.  This function also shows how the questions are being scored (for every question right, you receieve 100pts).
```javascript
 function answerQuestion(selectedAnswer, questionNumber, quiz, button) {
  if (selectedAnswer === quiz[questionNumber].correct_answer) {
    //finds correct/incorrect answers
    choices[button].classList.add("correct");
    score += 100;
    scoreText.innerHTML = score;
  } else {
    choices[button].classList.add("incorrect");
    console.log("wrong");
  }
```

If you get the question correct, the button lights up green
![Correct](correct.png)
If you get the question wrong, the button lights up red.
![incorrect](Incorrect.png)

The last part of this project was adding a modal to display whether you won or lost.
```javascript
function gameFinal (){
    if (score >= 500){
    modalText.textContent = "You Win! You are a software engineer!"
    modal.style.display = "block";
} else {
    modalText.textContent = "You Lose!"
    modal.style.display = "block";
}
}
```
If you lose the game, You receive a message that you lost, with a button to try again.
![youlost](Youlost.png)
If you win the game, you receive a message that you won, with a button to try again.
![youwin](youwin.png)


# FUTURE CONSIDERATIONS
Going forward I would like to add:
* A progress bar in the upper left hand corner that visually relects how many questions you have left.
* A high score end page
* A timer to complete the game in less than 2 minutes



