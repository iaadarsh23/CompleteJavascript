function calculatePrice(){
    let inputElement= document.querySelector('.js-input');
    let cost= Number(inputElement.value);
    
      
    if(cost<40){
        cost= cost+10;
        console.log(cost);
        
    }
    
    document.querySelector('.js-result')
        .innerHTML= `  Your total cost is $${cost}`;

}

15