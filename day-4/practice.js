//parameters

// function volume(length, breadth , height){
//     console.log( length*breadth*height)
// }
// volume(10,20,40);

//excercises-

//p1
// function greet(name = 'there!', greetings= 'Hello'){
//    console.log(`${greetings} Mr ${name}`);
   
// }
// greet('Adarsh',"good morning");
// greet('Adarsh');
// greet(undefined,'good evening');


//p2

// function convertTemperature(degree,unit){
//     if(unit==='C'){
//         const convert= convertToFahrenheit(degree);
//     }
//     else{
//         const convert = convertToCelsius(degree);
//     }
// }
// convertTemperature(100,'C')

// function convertToFahrenheit(celsius){
//     const conversionInFahrenheit = (celsius*9/5)+32;
//     console.log(conversionInFahrenheit);
    
// }

// function convertToCelsius(Fahrenheit){
//     const conversionIncelsius = (Fahrenheit-32)*5/9;
//     console.log(conversionIncelsius);
    
// }
//p4

function convertLength(length, from, to){
    if(from==='miles'){
        convertfrommiles(length, from, to);
    }
    else if(from==='km'){
        convertfromkm(length, from, to);
    }
    else if(from==='feet'){
        convertfromfeet(length, from, to);
    }
    else{
        console.log(`Invalid ${to}`);
    }
}

convertLength(5,'km','kllufdhfsdkif');









function convertfromkm(length, from, to){
    if(to==='miles'){
        console.log(`${(length*0.621371)} ${to}`);
        
    }else if(to==='ft'){
        console.log(`${(length*3281)} ${to}`);
        
    }else{
        console.log(`Invalid ${to}`);
    }
}

function convertfrommiles(length, from, to){
    if(to==='km'){
        console.log(`${(length*1.6)} ${to}`);
        
    }else if(to==='ft'){
        console.log(`${(length*5280)} ${to}`);
        
    }else{
        console.log(`Invalid ${to}`);
    }
}
function convertfromfeet(length, from, to){
    if(to==='km'){
        console.log(`${(length*0.0003048)} ${to}`);
        
    }else if(to==='miles'){
        console.log(`${(length*0.000189394)} ${to}`);
        
    }else{
        console.log(`Invalid ${to}`);
    }
}

