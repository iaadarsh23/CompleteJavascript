const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function playgame(playermove) {
    const computerchoice = pickcomputerchoice(); // Computer's random move

    let result = '';
    if (playermove === 'Rock') {
        if (computerchoice === 'Rock') {
            result = 'tie';
        } else if (computerchoice === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else if (playermove === 'Paper') {
        if (computerchoice === 'Rock') {
            result = 'You win';
        } else if (computerchoice === 'paper') {
            result = 'tie';
        } else {
            result = 'You lose';
        }
    } else if (playermove === 'Scissors') {
        if (computerchoice === 'Rock') {
            result = 'You lose';
        } else if (computerchoice === 'paper') {
            result = 'You win';
        } else {
            result = 'tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    }

    const message = `You picked ${playermove}. Computer picked ${computerchoice}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    showAlert(message);
}

function pickcomputerchoice() {
    const randomnumber = Math.floor(Math.random() * 3);
    let computerchoice = '';
    if (randomnumber === 0) {
        computerchoice = 'Rock';
    } else if (randomnumber === 1) {
        computerchoice = 'Paper';
    } else {
        computerchoice = 'Scissors';
    }
    return computerchoice;
}

// Function to show custom alert
function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");

    alertMessage.textContent = message;
    alertBox.classList.remove("hidden");
    alertBox.classList.add("visible");

    // Hide after 3 seconds
    setTimeout(() => {
        closeAlert();
    }, 3000);
}

function closeAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.classList.add("hidden");
    alertBox.classList.remove("visible");
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    showAlert("Game Reset! All scores set to 0.");
}
