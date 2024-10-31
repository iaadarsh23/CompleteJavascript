const newDiv= document.createElement('div');
newDiv.addEventListener('click', press)

function press(event){
    for(let i=0;i<100;i++){
        const newPara= document.createElement('p');
        newPara.textContent= 'JAI MATA DI'+i    
        newPara.addEventListener('click',function(event){
            console.log('happy diwali')
        })
        newDiv.appendChild(newPara)
    }
    
}
