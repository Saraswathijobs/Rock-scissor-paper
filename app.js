 document.addEventListener('DOMContentLoaded', () => {
    const userChoiceDisplay = document.getElementById('userChoice');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const resultDisplay = document.getElementById('result');
    const possibleChoices = document.querySelectorAll('button');
    let userChoice;
    let computerChoice;
    let result;

    possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = `You chose: ${userChoice}`;
        generateComputerChoice();
        getResult();
    }));

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            computerChoice = 'rock';
        } else if (randomNumber === 1) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
        computerChoiceDisplay.innerHTML = `Computer chose: ${computerChoice}`;
    }

    function getResult() {
        if (computerChoice === userChoice) {
            result = 'It\'s a draw!';
        } else if ((computerChoice === 'rock' && userChoice === 'scissors') ||
                   (computerChoice === 'scissors' && userChoice === 'paper') ||
                   (computerChoice === 'paper' && userChoice === 'rock')) {
            result = 'You lose!';
        } else {
            result = 'You win!';
        }
        resultDisplay.innerHTML = `Result: ${result}`;
    }
});


