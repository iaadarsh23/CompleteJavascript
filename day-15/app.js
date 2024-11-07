// setTimeout(()=>{
//     console.log('hello this is adarsh')
// },5000);

// const x=(y)=>{
//     console.log('he is a great programmer');
//     y();
// }
// x(function y(){
//     console.log('he will get a high package job');
// });

function testing(){
    let count=0;
    const newElement= document.createElement('button');
    newElement.innerText='click me';
    document.body.appendChild(newElement);
    newElement.addEventListener('click',()=>{
        console.log('jai mata di' , count++);
    });
}
testing();