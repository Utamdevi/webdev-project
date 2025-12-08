const answer = [
  "It is certain.",
  "Yes definitely.",
  "chances are good.",
  "signs point to yes.",
  "My source say no.",
  "Chances are not so good.",
  "Very doubtful.",
  "404 Error: Fate not found.",
  "Only if you do a little dance first.",
  "You are about die!",
  "The stars say ... Meh.",
  "Ask your dog, they know better.",
  "Computer says no.",
  "I'm on a coffee break, ask later.",
  "Yes, but you won't like the consequences. ",
  "You need to consult a doctor.",
  "Your WiFi connection to destiny is weak.",
  "Fate is currently Stuck...",
  "Chances are great... for someone else.",
];

const getAnswerButton = document.querySelector("#get-answer-btn");
const answerDisplay = document.querySelector("#answer");
function showRandowAnswer() {
  const randomIndex = Math.floor(Math.random() * answer.length);
  const randomAnswer = answer[randomIndex];
  answerDisplay.textContent = randomAnswer;
}

getAnswerButton.addEventListener("click", showRandowAnswer);
