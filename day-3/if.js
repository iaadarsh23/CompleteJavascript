//excercises

//p1
// const hour= 6;
// if(hour>=6 && hour<=12){
//     console.log("Good morning");   
// }else if(hour>=13 && hour<=17){
//     console.log("Good afternoon");    
// }else{
//     console.log("Good night");   
// }

//p2
// const hour= 6;
// const name= 'Adarsh'
// if(hour>=6 && hour<=12){
//     console.log(`Good morning ${name}`);   
// }else if(hour>=13 && hour<=17){
//     console.log(`Good afternoon ${name}`);    
// }else{
//     console.log(`Good night ${name}`);   
// }


//p4
// const age= 15;
// if(age<=6|| age>=65){
//     console.log("lele discount");
    
// }else{
//     console.log('nhi dunga discount ja jo krna hai krle saade');
    
// }

//p5
// const age= 500;
// const holiday= false;
// if((age<=6 || age>=65) && (holiday=== false)){
//     console.log("lele discount");
    
// }else{
//     console.log('nhi dunga discount ja jo krna hai krle saade');
    
// }

//p6
 
const randomnum= Math.random();
const prob = randomnum<0.5 ? "heads": "tails"
const guess = 'heads';
const result= prob===guess ? "you win": "you loose";
console.log(result);
