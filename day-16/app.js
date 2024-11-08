//lets make a todo list
function toDo(){
    const userInput= document.getElementById('data');
    const addTaskbtn= document.getElementById('add');
    const delTaskbtn= document.getElementById('Delete');
    const result= document.getElementById('js-result');
    let dataArray= [];
    addTaskbtn.addEventListener('click', adding);
    delTaskbtn.addEventListener('click',deleted)
    function adding(){
        dataArray.push(userInput.value);
        result.innerHTML=dataArray;
         
    }
    
    function deleted(){
        dataArray.pop(userInput.value);
        result.innerHTML=dataArray;
         
    }
}

toDo();