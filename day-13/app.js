// //promises

// const newPromise= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('this is adarsh tripathi')
//     },5000);
//     resolve('ho gya kaam sara')
// })

// console.log('this is my first promise code')


//reject vala
// const secPromise= new Promise((resolve, reject)=>{
//     const btn= document.createElement('button');
//     btn.innerText='click me';
//     btn.addEventListener('click',()=>{
//         console.log('aa rha hai....')
//         setTimeout(()=>{
//             console.log('u have clicked a btn that has a setTime out in it')
//         },5000)
//     })
//     document.body.appendChild(btn);
//     resolve('ho gya bhaiya')
// })
// secPromise.then((value)=>{
//     console.log(2+3)
// });

// promises one after another

const iceCream= new Promise((resolve, reject)=>{
    
    const btn= document.createElement('button');
        btn.innerText='ice cream';
        btn.addEventListener('click',()=>{
            console.log('kya khayega?')
            setTimeout(()=>{
                const heading1=document.createElement('h1');
                heading1.innerText='kuch bhi ';
                document.body.appendChild(heading1);
            },5000)
        })
        document.body.appendChild(btn);
        resolve('khila di ')
} )

const sec=iceCream.then(()=>{
    const new2= new Promise((resolve, reject)=>{
        const btn2= document.createElement('button');
        btn2.innerText=' samose khayega?';
        
        btn2.addEventListener('click',()=>{
            setTimeout(()=>{
                const heading=document.createElement('h1');
                heading.innerText='ha khila do me toh kha lunga';
                
                document.body.appendChild(heading);
            },3000)
        })
        resolve('ho gya')
        document.body.appendChild(btn2);
    })
  return new2
})

sec.then((value)=> console.log(value));
