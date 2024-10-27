const url= 'https://api.currencyapi.com/v3/latest?apikey=cur_live_y6aSoz6FLB1i9tELlUQz0eFz6plIHrnr5KhIRZN2';




const getData= async () => {
   

    try{
        let response= await fetch(url);
        if(!response.ok){
            throw new Error(`there is an error ${response.status}`)

        }
        const fromCurrency= document.querySelector('#from-currency').value; 
        const toCurrency= document.querySelector('#to-currency').value; 
        const usersInput= document.querySelector('.js-from').value;
        const convert= document.querySelector('.js-convert-btn');
        const result= document.querySelector('.js-to').value;

        let data=  await response.json()
        console.log(data)

    }catch(error){
        console.error(error.message)
    }
    
    
}
convert.addEventListener('click', getData);