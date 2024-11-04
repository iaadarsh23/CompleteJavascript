//fetch api

// async function testApi(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         let result= await response.json();

//         console.log(result);

//     } catch (error) {
//         console.error('there is a error',error)
//     }
// }

//q2

async function fetchUserData(){
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error('network is not ok');
        }
        const users= await response.json();
        users.forEach(user => console.log(user.name)
            
        );



    } catch (error) {
        console.error('there is a  error', error)
    }
}