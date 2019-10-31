var button_add = $(".add_row")
var table = $(".celda_table")

var filas = function(table_rows){
  $.each(table_rows, function(i, row){
  	table.append(`<tr class='info_row'>
    <td>`+ row.Nombre +`</td>
    <td>`+ row.Apellido +`</td>
    <td>`+ row.Edad +`</td>
    <td>`+ row.Sexo +`</td>
    <td><button agrega_id="` + row.id + `" class="fas fa-user-minus remove"/></td>
  </tr>`)
  })
}

var anadir_row = function() {
  if ($(".nuevo_row").length) return 
	table.append(`<tr class='info_row nuevo_row'>
    <td><input name='Nombre' /></td>
    <td><input name='Apellido' /></td>
    <td><button class="fas fa-user-minus remove"/><button class="fas fa-user-minus add"/></td>
  </tr>`)
}
button_add.on("click", anadir_row)
filas(info)