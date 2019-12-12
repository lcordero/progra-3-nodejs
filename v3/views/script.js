var data_table = $("#data");
var buttons=$("body");
var editor=$("#editor");
let user_ID="";
var socket = io.connect(window.location.host);
editor.hide();

//-----------------------DELETE AND PUT FUNCTIONS
jQuery.each( [ "put", "delete" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
      if ( jQuery.isFunction( data ) ) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
  
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
//-------------------------------------------------------------

//Loading content function-------------------------------------
var load_content = function(url){
    $.get( url, function( data ) {
        data_table.empty()
        data_table.append(`
        <tr>
            <td>ID Number</td>
            <td>Customer Name</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Action</td>
        </tr>`)
        $.each( data.users, function( i, user ) {
            data_table.append(`
                <tr class="user">
                    <td>`+ user._id+`</td>
                    <td>`+ user.name+`</td>
                    <td>`+ user.address+`</td>
                    <td>`+ user.phone+`</td>
                    <td>                 
                    <button class="edit" id=`+user._id+`>EDIT</button> 
                    <button class="delete" id=`+user._id+`>DELETE</button>
                    </td>
                </tr>
            `)
        })
    })
}
//-------------------------------------------------------------




socket.on('connect', function() {
    console.log('connect');
});

socket.on('actions', function(action) {
    console.log(action);
    load_content('http://'+ window.location.host +'/api/users')
});


buttons.click(function( event ) {
    user_id = event.target.id;
    classAction=event.target.className;
    if (classAction == "edit" ){
        console.log('este boton permite editar');
        user_ID=user_id ;
        data_table.hide();
        editor.show()
    }else if (classAction == "delete"){
        $.delete('http://'+ window.location.host +'/api/user/'+user_id);
        data_table.show();
        console.log('este otro borra')
        socket.emit("actions",classAction );
    }else if (classAction == "save_edit"){
        console.log("este boton guarda lo editado");
        console.log(user_ID);
        $.put('http://'+ window.location.host +'/api/user/'+user_ID,{name:$("#name").val(),address:$("#address").val(),phone:$("#phone").val()});
        editor.hide();
        data_table.show();
        socket.emit("actions",classAction );
    }
    load_content('http://'+ window.location.host +'/api/users')
  });



load_content('http://'+ window.location.host +'/api/users')