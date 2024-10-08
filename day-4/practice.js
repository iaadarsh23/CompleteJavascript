//parameters

function volume(length, breadth , height){
    console.log( length*breadth*height)
}
volume(10,20,40);

//excercises-

//p1
function greet(name = 'there!', greetings= 'Hello'){
   console.log(`${greetings} Mr ${name}`);
   
}
greet('Adarsh',"good morning");
greet('Adarsh');
greet(undefined,'good evening');


//p2
