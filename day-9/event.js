const select = document.querySelectorAll('.js-h2');
for(let i= 0; i<select.length; i++){
    select[i].addEventListener('click', colorChanged);
}
let isRed = false;

function colorChanged(event) {
    const target = event.target;

    // Toggle text color between red and black
    target.style.color = (target.style.color === 'red') ? 'black' : 'red';
    
    // Toggle background color
    if (isRed) {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }
    
    isRed = !isRed;
}


