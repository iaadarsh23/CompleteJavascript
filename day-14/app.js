// const x = ()=>{
//     let name= 'adarsh';
//     const y= ()=>{
//         let name= 'sonu';
//         console.log(name)
//     }
//     //means we are returning the y function in another variable outsidè  the scope
//      return y;
// }
// const z= x();
// console.log(z)

//here z becomes a fn because it holds the reference oy fn y
// z();

//case-2

const a= ()=>{
    let name= 'adarsh';
    const b= ()=>{
        let naam='sonu';
        const c= ()=>{
            console.log(name,naam);
        }
        return c;
    }
    return b;
}

const z= a();
console.log(z)
z();