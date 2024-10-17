const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0 
};

updatescoreElement();

function playgame(playermove) {
    const computerchoice = pickcomputerchoice(); 
    let result = '';

    if (playermove === 'Rock') {
        if (computerchoice === 'Rock') {
            result = 'tie';
        } else if (computerchoice === 'Paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else if (playermove === 'Paper') {
        if (computerchoice === 'Rock') {
            result = 'You win';
        } else if (computerchoice === 'Paper') {
            result = 'tie';
        } else {
            result = 'You lose';
        }
    } else if (playermove === 'Scissors') {
        if (computerchoice === 'Rock') {
            result = 'You lose';
        } else if (computerchoice === 'Paper') {
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

    localStorage.setItem('score', JSON.stringify(score));

    updatescoreElement();
    document.querySelector('.js-result')
        .innerHTML= `${result}`;

    document.querySelector('.js-moves')
        .innerHTML= `You picked ${playermove}. Computer picked ${computerchoice}.`;

    
    

    
}

function updatescoreElement(){
    document.querySelector('.js-score')
        .innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickcomputerchoice() {
    const randomnumber = Math.floor(Math.random() * 3);
    
    if (randomnumber === 0) {
        return 'Rock';
    } else if (randomnumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    
    updatescoreElement();

    window.alert("Game Reset! All scores set to 0.");
}
