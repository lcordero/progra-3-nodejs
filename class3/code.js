
// find elements
var upload = $(".action1")
var table = $("#table1")
//Table rows
var row = table.insertRow(0);
var cell1 = row.insertcell(0);
var cell2 = row.insertcell(1);
var cell3 = row.insertcell(2);
var cell4 = row.insertcell(3);
var cell5 = row.insertcell(4);


// handle click and add class
upload.on("click", function(e){
  console.log(e.target.attributes["user_id"].value)
  $(e.target).text("Clicked")
  banner.addClass("alt")
});

upload.on("click", function(){
 cell1.text($(".data").val())
});



