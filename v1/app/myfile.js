
$(() => {
    function addTodos(todo){
        $("#todos").append(`
            <h4> ${todo.name} </h4>
            <p>  ${todo.description} </p>`)
    }
    
    function getTodos(){
        $("#todos").empty();
        $.get('http://localhost:3000/todos', (data) => {
        data.forEach(addTodos);
        })
    }
    
    function sendTodo(todo){
        $.post('http://localhost:3000/todos', todo)
    }
    $("#send").click(()=>{
        sendTodo({
          name: $("#name").val(), 
          description:$("#description").val()
        });
        getTodos();
    });
    getTodos();
})