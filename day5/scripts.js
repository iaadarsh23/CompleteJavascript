const score={
    wins:0,
    losses:0,
    ties:0
}

function playgame(playermove){
    const computerchoice= pickcomputerchoice();// global varible it avoids naming conflicts

                let result = '';
                if (playermove==='Rock'){
                    if (computerchoice === 'Rock') {
                        result = 'tie';
                    } else if (computerchoice === 'paper') {
                        result = 'You lose';
                    } else {
                        result = 'You win';
                    }
                   

                }

                else if(playermove==='paper'){
                    if (computerchoice === 'Rock') {
                        result = 'You win';
                    } else if (computerchoice === 'paper') {
                        result = 'tie';
                    } else {
                        result = 'You lose';
                    }
                    
                }

                else if(playermove==='scissor'){
                    if (computerchoice === 'Rock') {
                        result = 'You lose';
                    } else if (computerchoice === 'paper') {
                        result = 'You win';
                    } else {
                        result = 'tie';
                    }


                    
                }

                else{
                    alert('Your score is reseted');
                    score.wins=0,
                    score.losses=0,
                    score.ties=0;
                    
                }
                if(result==='You win'){
                    score.wins+=1;
                }else if(result==='You lose'){
                    score.losses+=1;
                }
                else if(result==='tie'){
                    score.ties+=1;
                }
                



                alert(`You have picked ${playermove}. Computer picked ${computerchoice}. ${result}
wins: ${score.wins}, losses: ${score.losses}, tie: ${score.ties}`);

                
            
}

function pickcomputerchoice(){
    const randomnumber = Math.floor(Math.random() * 3);
    let computerchoice = '';//global variable
    if (randomnumber === 0) {
        computerchoice = 'Rock';   
    } else if (randomnumber === 1) {
        computerchoice = 'paper';
    } else {
        computerchoice = 'scissor';
    }
    return computerchoice;                    
}
