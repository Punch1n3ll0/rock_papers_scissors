// Event listener that runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with class 'game-button'
    const gameButtons = document.querySelectorAll('.game-button');
    // Add click event listeners to each button
    gameButtons.forEach(button => {
        button.addEventListener('click', () => playGame(button.value));
    });
});

// Initialize game scores and round counter
let computerScore = 0;
let humanScore = 0;
let currentRound = 0;

// Function to randomly select computer's choice
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Function to determine the winner of a round
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

// Function to update the display with current game information
function updateDisplay(humanChoice, computerChoice, winner) {
    document.querySelector('.player-choice').textContent = `You chose: ${humanChoice}`;
    document.querySelector('.computer-choice').textContent = `Computer chose: ${computerChoice}`;
    document.querySelector('.current-round').textContent = `Round: ${currentRound}`;
    document.querySelector('.round-outcome').textContent = `Round winner: ${winner}`;
    document.querySelector('.score').textContent = `Score - Computer: ${computerScore}, Human: ${humanScore}`;
}

// Main game function
function playGame(humanChoice) {
    // Check if game is over (5 rounds played)
    if (currentRound >= 5) {
        alert('Game over! Click OK to start a new game.');
        computerScore = 0;
        humanScore = 0;
        currentRound = 0;
    }

    currentRound++;
    const computerChoice = getComputerChoice();
    const winner = determineRoundWinner(computerChoice, humanChoice);

    // Update scores based on round winner
    if (winner === 'Computer') {
        computerScore++;
    } else if (winner === 'Human') {
        humanScore++;
    }

    updateDisplay(humanChoice, computerChoice, winner);

    // Check if game is finished (5th round just played)
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
            window.location.reload(); // Reload the page to start a new game
        }, 100);
    }
}