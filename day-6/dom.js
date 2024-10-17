function subscribe(){
    const buttonElement= document.querySelector('.bt');
    if(buttonElement.innerHTML==='Subscribe'){
        buttonElement.innerHTML='Subscribed';

        displayConfetti();

    }else{
        buttonElement.innerHTML='Subscribe';
    }   
}

function displayConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.classList.add('show'); // Add class to display confetti
    
    // Remove the confetti after 3 seconds (or however long you want the celebration)
    setTimeout(() => {
        confetti.classList.remove('show');
    }, 3000);
}