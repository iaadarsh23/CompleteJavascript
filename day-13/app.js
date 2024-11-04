// //promises

// const newPromise= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('this is adarsh tripathi')
//     },5000);
//     resolve('ho gya kaam sara')
// })

// console.log('this is my first promise code')


//reject vala
const secPromise= new Promise((resolve, reject)=>{
    const btn= document.createElement('button');
    btn.innerText='click me';
    btn.addEventListener('click',()=>{
        console.log('aa rha hai....')
        setTimeout(()=>{
            console.log('u have clicked a btn that has a setTime out in it')
        },5000)
    })
    document.body.appendChild(btn);
    reject(new Error('yeh nhin hoga pass'))
})