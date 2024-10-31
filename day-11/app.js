const newDiv= document.createElement('div');

for(let i=0;i<100;i++){
    const newPara= document.createElement('p');
    newPara.textContent= 'JAI MATA DI'+i    
    newPara.addEventListener('click',function(event){
        console.log('happy diwali')
    })
    newDiv.appendChild(newPara)
}
document.body.appendChild(newDiv);