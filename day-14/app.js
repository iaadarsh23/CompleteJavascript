const x = ()=>{
    let name= 'adarsh';
    const y= ()=>{
        let name= 'sonu';
        console.log(name)
    }
    //means we are returning the y function in another variable outsidè  the scope
     return y;
}
const z= x();
console.log(z)

//here z becomes a fn because it holds the reference oy fn y
z();