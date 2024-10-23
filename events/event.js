const newElement= document.querySelector('.js-bt');
const imgElement= document.querySelector('#js-img');

//toggle effect

let isred= false;
newElement.addEventListener('click', changecolor)

function changecolor(){
    if(isred){
        document.body.style.backgroundColor='black';
        imgElement.src='/lightbulb.png';
        newElement.innerHTML='Muje Dabao';
        // document.querySelector('#js-img')
        //     .outerHTML='<img  id="js-img" src="/lightbulb.png" >'    
    }
    else{
        document.body.style.backgroundColor='red';
        imgElement.src='/light-bulb.png';
        newElement.innerHTML='Daba Diya';
        // document.querySelector('#js-img')
        //     .outerHTML='<img  id="js-img" src="/light-bulb.png" >'
    }
isred=!isred;

}    