// function clock(){
//     const date= new Date();
//     const getTime= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
//     document.getElementById('show-time').innerText= getTime;
// }
// let interval= setInterval(clock,1000);

const userInput= document.getElementById('Set').value; 
const start= document.getElementById('start'); 
const stop= document.getElementById('stop');
const result= document.getElementById('show-time') 
start.addEventListener('click',stopWatch);  
function stopWatch(){
    for(let i=userInput;i>=0;i--){
        result.innerText=i;
    }
}

let interval= setInterval(stopWatch,1000)