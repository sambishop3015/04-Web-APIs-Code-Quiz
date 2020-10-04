//Make sure the html is loaded before running script
$(document).ready(function() {

    // Get start button by ID
    const startButton = document.getElementById('start-btn');
    const cardHeader = document.getElementById('card-header');
    const cardBody = document.getElementById('answer-buttons');
    const cardFooter = document.getElementsByClassName('card-footer'); 
    const nextButton = document.getElementById('nextBtn');
    const questionElement = document.getElementById('question-number');
    const answerButtonsElement = document.getElementsByClassName('answers'); //may be button name??


    let shuffledQuestions, currentQuestionIndex;

    // Listen for start button click
    $(startButton).on('click', startGame)
    
    // Function to start game
    function startGame() {
        console.log('Started');
        $(startButton).addClass("hide");
        // startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        $(cardHeader).removeClass("hide");
        $(cardBody).removeClass("hide");
        $(cardFooter).removeClass("hide");
        $(nextButton).removeClass("hide");    
        setNextQuestion();
    }

    // Function to switch to next question
    function setNextQuestion(){
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn') //may be a different than 'btn'
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer);
            // answerButtonsElement.appendChild(button);
        })
    }

    // Answer function
    function selectAnswer(){

    }

    const questions = [
        {
            question: 'What is 2 + 2?',
            answers: [
                { text: '4', correct: true },
                { text: '22', correct: false }
            ]
        }
    ]




});