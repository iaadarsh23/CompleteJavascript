// //object creation

// const student ={
//     name: 'Adarsh',
//     branch: 'Aiml',
//     rollno: 11
// }
// console.log(student);
// console.log(student.name);

// //updating the value
// student.name='Akanksha';
// console.log(student.name);
// console.log(student);

// //adding the new property

// student.newproperty= 'section';
// console.log(student);


// //deleting the property

// delete student.newproperty;
// console.log(student  );

//bracket notation
/*const product2={
    name: 'adarsh',
    ['dilevery-adress']: 2515
}
console.log(product2['name']);
console.log(product2["dilevery-adress"]);

*/

//nested objects

/* const product3={
    name: 'socks',
    ratings: {
        stars: 4.5,
        count: 87,
        people:{
            views: '1 lakh',
            engagement: 1000
        }
    }
}
console.log(product3.ratings.count);
console.log(product3.ratings.people.engagement);

*/

//functions in objects is called the methods

const product4={
    name:'adarsh',
    section: 5,
    branch: 'AIML',
    sum: function add(num1, nums2){
       console.log(num1**nums2);
    }
}
product4.sum(4,5);

//builtin objects

    //json objects

    //1.this will convert js objects to json
        /*const obtojson= JSON.stringify(product4);
        console.log(obtojson);
        //this will not include functions and all the properties will be in double quotes

        //2. json to objects conversion

        console.log(JSON.parse(obtojson));
        */
    //    

    //localStorage

    localStorage.setItem('message','hello');
    console.log(localStorage.getItem('message'));
    console.log(1+2);
    
    