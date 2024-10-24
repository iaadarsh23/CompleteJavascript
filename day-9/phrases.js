const select= document.querySelector('.js-p');
select.addEventListener('click', scrolled, true)

 function scrolled(event){
    event.target.style.color='red';
    
 }