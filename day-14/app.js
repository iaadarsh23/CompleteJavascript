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
//here we are making three nested fns and testing whetther we can access variables of outermost fn through inner most fn - ans is yes.
// const a= ()=>{
//     let name= 'adarsh';
//     const b= ()=>{
//         let naam='sonu';
//         const c= ()=>{
//             console.log(name,naam);
//         }
//          c();
//     }
//     return b;
// }
// const z= a();
// z();

function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();