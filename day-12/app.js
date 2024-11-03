// function clock(){
//     const date= new Date();
//     const getTime= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
//     document.getElementById('show-time').innerText= getTime;
// }
// let interval= setInterval(clock,1000);

const start= document.getElementById('start'); 
const stop= document.getElementById('stop');
const result= document.getElementById('show-time') 
start.addEventListener('click',stopWatch); 


function stopWatch(){
    let interval;
    clearInterval(interval);
    let countdown= parseInt(document.getElementById('Set').value,10)

    if(isNaN(countdown)||countdown<=0){
        result.innerHTML='Please enter a valid  postive number';
    }

    result.innerHTML=countdown;

    interval= setInterval(()=>{
        countdown--
        result.innerHTML=countdown;

        if(countdown<=0){
            clearInterval(interval);
            result.innerHTML='Times Up!';
        }
    },1000);

    function stopp(){
        clearInterval(interval);
    }
    stop.addEventListener('click',stopp)

    
}


