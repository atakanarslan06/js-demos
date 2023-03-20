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

    var current_tasks = document.
    querySelectorAll(".delet");
    for(var i=0 ;i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    var tasks = document.querySelectorAll(".tasks");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    }
}
