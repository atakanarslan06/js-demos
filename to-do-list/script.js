document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').nodeValue.length == 0){
        alert("Please enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `<div class="task">
        <span id="taskname">
            ${document.querySelector('#newtasks input').value}
            </span>
            <button class="delete">
            <i class="fa-regular fa-trash"></i>
            </button>
        </div>
    `;
    }
}
