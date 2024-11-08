//creating an array

const myArray= [10,'adarsh','ayush'];
function array(){
    const newElement=document.createElement('button');
    let result= document.getElementById('js-result');
    newElement.innerText= 'click to see output of an array';
    document.body.appendChild(newElement);
    newElement.addEventListener('click', data);

    function data(){
        const dataPushed= myArray.push(100)
        result.innerHTML=myArray;
    }
}
array();