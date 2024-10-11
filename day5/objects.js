//object creation

const student ={
    name: 'Adarsh',
    branch: 'Aiml',
    rollno: 11
}
console.log(student);
console.log(student.name);

//updating the value
student.name='Akanksha';
console.log(student.name);
console.log(student);

//adding the new property

student.newproperty= 'section';
console.log(student);


//deleting the property

delete student.newproperty;
console.log(student  );
