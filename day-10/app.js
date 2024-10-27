const url= 'https://api.currencyapi.com/v3/latest?apikey=cur_live_y6aSoz6FLB1i9tELlUQz0eFz6plIHrnr5KhIRZN2';

const getData= async () => {
    try{
        let response= await fetch(url);
        if(!response.ok){
            throw new Error(`there is an error ${response.status}`)

        }
        let data=  await response.json()
        console.log(data)
    }catch(error){
        console.error(error.message)
    }
    
    
}