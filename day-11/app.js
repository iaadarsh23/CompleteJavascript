// // measuring the performance of code in js
// let t1= performance.now()
// const newDiv= document.createElement('div');
// for(let i=0;i<100;i++){
//     const newPara= document.createElement('p');
//     newPara.textContent= 'JAI MATA DI'+i    
//     newPara.addEventListener('click',function(event){
//         console.log('happy diwali')
//     })
//     newDiv.appendChild(newPara)
// }
// document.body.appendChild(newDiv);
// let t2= performance.now()
// console.log('this took ' + (t2-t1) + "ms");


let t1= performance.now()
const userInput= document.querySelector('.js-int');
const btn= document.querySelector('.js-bt');
const result= document.querySelector('.js-p'); 
btn.addEventListener('click', tables);


function tables(event){
    result.innerHTML='';
    let number= parseInt(userInput.value)

    const fragment= document.createDocumentFragment();
    for(let i=1;i<=10;i++){
        let results= number * i;
        let line= document.createElement('div')
        
        line.innerHTML += `The multiplication table of ${number} is ${number} x ${i} = ${results} <br>`;
        fragment.appendChild(line);
    }
    result.appendChild(fragment) // 1 reflow and 1 repaint   
}
let t2 = performance.now()
console.log(t2-t1)    

