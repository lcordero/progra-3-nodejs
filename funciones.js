$(()=>{
    $("#send").click(()=>{
        $("#datos").append(`
        <tr class=formulario>
        <td>${$("#name").val()}</td>
        <td>${$("#lastname").val()}</td>
        <td>${$("#country").val()}</td>
        <td><button class=guardar>guardar ID</button></td>
        </tr>
        `)
    })

})