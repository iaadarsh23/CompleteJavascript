// function clock(){
//     const date= new Date();
//     const getTime= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
//     document.getElementById('show-time').innerText= getTime;
// }
// let interval= setInterval(clock,1000);

// Get input and elements
const userInput = document.getElementById('Set');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const result = document.getElementById('show-time');

let interval; // Declare interval variable outside for scope access

start.addEventListener('click', () => {
    // Clear any existing interval to prevent multiple intervals
    clearInterval(interval);
    
    let countdown = parseInt(userInput.value, 10); // Convert input to number
    
    if (isNaN(countdown) || countdown < 0) { // Validate input
        result.innerText = "Please enter a valid number!";
        return;
    }

    result.innerText = countdown; // Display starting number

    // Start countdown
    interval = setInterval(() => {
        countdown--; // Decrement countdown
        result.innerText = countdown; // Update UI

        if (countdown <= 0) { // Stop countdown at 0
            clearInterval(interval);
            result.innerText = "Time's up!";
        }
    }, 1000); // 1000ms = 1 second
});

stop.addEventListener('click', () => {
    clearInterval(interval); // Stops the countdown
});
