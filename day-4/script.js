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
                    alert(`You have picked ${playermove}. Computer picked ${computerchoice}. ${result}`);

                }
                else if(playermove==='paper'){
                    if (computerchoice === 'Rock') {
                        result = 'You win';
                    } else if (computerchoice === 'paper') {
                        result = 'tie';
                    } else {
                        result = 'You lose';
                    }
                    alert(`You have picked ${playermove}. Computer picked ${computerchoice}. ${result}`);
                }
                else if(playermove==='scissor'){
                    if (computerchoice === 'Rock') {
                        result = 'You lose';
                    } else if (computerchoice === 'paper') {
                        result = 'You win';
                    } else {
                        result = 'tie';
                    }
                    alert(`You have picked ${playermove}. Computer picked ${computerchoice}. ${result}`);
                }
                
            
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
