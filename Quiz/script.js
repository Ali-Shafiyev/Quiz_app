const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

const questions = [
    {
      question: 'What does HTML stand for?',
      answers: [
        { text: 'Hyper Text Markup Language', correct: true },
        { text: 'Hyperlink and Text Markup Language', correct: false },
        { text: 'Home Tool Markup Language', correct: false },
        { text: 'Hyper Transfer Markup Language', correct: false }
      ]
    },
    {
      question: 'Which programming language is known as the "mother of all languages"?',
      answers: [
        { text: 'Python', correct: false },
        { text: 'C++', correct: false },
        { text: 'Java', correct: false },
        { text: 'C', correct: true }
      ]
    },
    // Add more questions...
    {
      question: 'What is the result of 2 + 2 * 3?',
      answers: [
        { text: '6', correct: true },
        { text: '8', correct: false },
        { text: '10', correct: false },
        { text: '12', correct: false }
      ]
    }
  ];
  
function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) {
    // Implement scoring or feedback for correct answers
  }
  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none';
  } else {
    // Implement quiz completion logic
  }
});

showQuestion(questions[currentQuestionIndex]);
function selectAnswer(answer) {
    const correct = answer.correct;
    const buttons = answerButtons.querySelectorAll('.btn');
  
    buttons.forEach(button => {
      if (answer.correct && answer.text === button.innerText) {
        button.classList.add('correct');
      } else if (!answer.correct && answer.text === button.innerText) {
        button.classList.add('incorrect');
      }
      button.disabled = true;
    });
  
    nextButton.style.display = 'block';
  }
// ... (existing code)

function finishQuiz() {
    questionElement.innerText = 'Quiz Completed!';
    answerButtons.innerHTML = '';
  
    const score = calculateScore();
    const resultText = `You answered ${score.correctCount} out of ${questions.length} questions correctly.`;
  
    const resultElement = document.createElement('p');
    resultElement.innerText = resultText;
    questionElement.appendChild(resultElement);
  }
  
  function calculateScore() {
    let correctCount = 0;
    questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      if (selectedAnswer === question.answers.findIndex(answer => answer.correct)) {
        correctCount++;
      }
    });
    return { correctCount };
  }

  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
      nextButton.style.display = 'none';
    } else {
      finishQuiz();
    }
  });

  


    