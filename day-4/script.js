
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
