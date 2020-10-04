//Make sure the html is loaded before running script
$(document).ready(function() {

    // Get start button by ID
    const startButton = document.getElementById('start-btn');

    // Listen for start button click
    $(startButton).on('click', startGame)
    
    // Function to start game
    function startGame() {
        console.log('Started');
    }

    // Function to switch to next question
    function setNextQuestion(){

    }

    // Answer function
    function selectAnswer(){

    }





});