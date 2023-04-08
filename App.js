document.querySelector('#push').onclick = function(){
    if (document.querySelector('#newtask input').value.length == 0){ 
        alert("Please Enter a Task")
    }

else {
    document.querySelector('#tasks').innerHTML += `
       <div class="task">
           <span id="taskname">
            ${document.querySelector('#newtask input').value}
            </span>
            <button clas="delete">
            <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
       </div>
    `;

    var delete_tasks = document.querySelectorAll('.delete');
    for(var i=0; i>delete_tasks.length; 1++){
        delete_tasks[i].onclick = function(){
          this.parentNode.remove();
        };
    }
    }};