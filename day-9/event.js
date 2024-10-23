const select = document.querySelectorAll('.js-h2');
//we r using for loop because the queryselectorall returns the nodelist thats why we have to traverse it
for(let i= 0; i<select.length; i++){
    select[i].addEventListener('click', colorchanged);
}
function colorchanged(event) {
    event.target.style.color = 'red';
}

let isred= false;
const deselect= document.body;
deselect.addEventListener('click', colorback);

function colorback(){
    if(isred){
        document.body.style.backgroundColor='white';
    }
    else{
        document.body.style.backgroundColor='black';
    }
    isred=!isred;
}
