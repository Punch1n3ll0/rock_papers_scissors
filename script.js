document.addEventListener('DOMContentLoaded', () => {
    const gameButtons = document.querySelectorAll('.game-button');
    gameButtons.forEach(button => {
        button.addEventListener('click', () => playGame(button.value));
    });
});

let computerScore = 0;
let humanScore = 0;
let currentRound = 0;

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function determineRoundWinner(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return 'Tie';
    } else if (
        (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && humanChoice === 'Paper') ||
        (computerChoice === 'Paper' && humanChoice === 'Rock')
    ) {
        return 'Computer';
    } else {
        return 'Human';
    }
}

function updateDisplay(humanChoice, computerChoice, winner) {
    document.querySelector('.player-choice').textContent = `You chose: ${humanChoice}`;
    document.querySelector('.computer-choice').textContent = `Computer chose: ${computerChoice}`;
    document.querySelector('.current-round').textContent = `Round: ${currentRound}`;
    document.querySelector('.round-outcome').textContent = `Round winner: ${winner}`;
    document.querySelector('.score').textContent = `Score - Computer: ${computerScore}, Human: ${humanScore}`;
}

function playGame(humanChoice) {
    if (currentRound >= 5) {
        alert('Game over! Click OK to start a new game.');
        computerScore = 0;
        humanScore = 0;
        currentRound = 0;
    }

    currentRound++;
    const computerChoice = getComputerChoice();
    const winner = determineRoundWinner(computerChoice, humanChoice);

    if (winner === 'Computer') {
        computerScore++;
    } else if (winner === 'Human') {
        humanScore++;
    }

    updateDisplay(humanChoice, computerChoice, winner);

    if (currentRound === 5) {
        setTimeout(() => {
            let message;
            if (computerScore > humanScore) {
                message = 'Computer wins the game!';
            } else if (humanScore > computerScore) {
                message = 'You win the game!';
            } else {
                message = 'The game is a tie!';
            }
            alert(message);
            window.location.reload(); // This line reloads the page after the alert is dismissed
        }, 100);
    }
}