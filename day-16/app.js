//lets make a todo list
 let dataArray= [];
function toDo(){
    const userInput= document.getElementById('data');
    const addTaskbtn= document.getElementById('add');
    const delTaskbtn= document.getElementById('Delete');
    const result= document.getElementById('js-result');
    
    addTaskbtn.addEventListener('click', adding);
    delTaskbtn.addEventListener('click',deleted)
 
    function adding(){
        dataArray.push(userInput.value);
        renderList();
        userInput.value='';
    }
    function deleted(){
        dataArray.pop(userInput.value);
        renderList();
    }
    //showing each item one after another
    function renderList(){
        result.innerHTML='';
        for(let i= 0;i<dataArray.length;i++){
            //at every iteration we will create a html list and update the list;
            const newList = document.createElement('li');
            newList.textContent=dataArray[i];
            result.appendChild(newList);

        
        }
    }


}
toDo();