const select= document.querySelector('.js-p');
select.addEventListener('click', scrolled,true)
isclicked= false;
 function scrolled(event){
    if(isclicked){
        select.innerHTML='because u r chutiya';
    }
    else{
        select.innerHTML='why the fuck i am not working hard?';
    }
    isclicked=!isclicked 
 }