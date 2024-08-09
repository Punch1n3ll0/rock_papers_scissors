function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase(); // Normalize input
    const validChoices = ['Rock', 'Paper', 'Scissors'];
    
    while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:");
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    }
    
    return choice;
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

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const winner = determineRoundWinner(computerChoice, humanChoice);

        console.log(`Round ${i + 1}:`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Round winner: ${winner}`);

        if (winner === 'Computer') {
            computerScore++;
        } else if (winner === 'Human') {
            humanScore++;
        }

        console.log(`Score - Computer: ${computerScore}, Human: ${humanScore}`);
        console.log('--------------------------');
    }

    console.log('Final Result:');
    if (computerScore > humanScore) {
        console.log('Computer wins the game!');
    } else if (humanScore > computerScore) {
        console.log('Human wins the game!');
    } else {
        console.log('The game is a tie!');
    }
}

