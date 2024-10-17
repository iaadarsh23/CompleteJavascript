function subscribe(){
    const buttonElement= document.querySelector('.bt');
    if(buttonElement.innerHTML==='Subscribe'){
        buttonElement.innerHTML='Subscribed';
    }else{
        buttonElement.innerHTML='Subscribe';
    }   
}