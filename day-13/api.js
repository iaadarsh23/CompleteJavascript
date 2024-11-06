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

// async function fetchUserData(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         if(!response.ok){
//             throw new Error('network is not ok');
//         }
//         const users= await response.json();
//         users.forEach(user => console.log(user.name)
            
//         );



//     } catch (error) {
//         console.error('there is a  error', error)
//     }
// }

// q3
//  async function fetchPost() {
//      const response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
//      if(!response.ok){
//         throw new Error('network is not ok')

//      }
//      const title1= await response.json()
//      console.log(title1.title)
//  }

// //q4

 
// async function fetchTodos() {
//     const response= await fetch('https://jsonplaceholder.typicode.com/todos')
//     if(!response.ok){
//         throw new Error('network is not ok')
//     }
//     const todos= await response.json();
//    //using the filter 
//    const completedTodo= todos.filter(todo=> todo.completed)
//    console.log(completedTodo);   
// }

//post call

async function postTest() {
    try {
        let response= await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'Adarsh',
              body: 'Adarsh is a handsome young smart boi',
              userId: 23,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

         if(!response.ok){
            throw new Error('network is not fine')
         } 
         let result= await response.json()

         console.log(result)
    } catch (error) {
        console.error('there is a error')
        
    }
}
postTest()