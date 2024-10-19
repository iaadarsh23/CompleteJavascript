// //getElementByID
// console.log(document.getElementById('js-p'));

//  //getElementByclass
//  // it is a collectiin(array like objects= "node-list")'
//  console.log(typeof document.getElementsByClassName('js-h1'));
//  console.log(document.querySelectorAll('js-h1'));

//  const newButton= document.querySelector('.js-h1');
//  newButton.innerHTML= '<button>click me</button>';

//  //outerHtml

//  const outerHtml= document.querySelector('p');
//  const innerhtml=outerHtml.outerHTML= '<div> <p> this is use case of outerhtml</p></div>'
// console.log(innerhtml.innerHTML= ' i have used innerhtml under the outerhtml');

//adding new element

const content= document.querySelector('.js-h1');

console.log(content);

const addNewElement= document.createElement('button');
const newElemetAdded=content.appendChild(addNewElement);


newElemetAdded.innerHTML= 'new bt '
console.log(newElemetAdded.innerHTML);
newElemetAdded.outerHTML= '<a href= "www.google.com" class="nc">link</a>'




