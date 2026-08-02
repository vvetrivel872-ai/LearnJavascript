// var inputbox=document.getElementById("inputbox")
// var result=document.getElementById("result")


// function update(){
//     result.textContent=inputbox.value
  
// }



//ex 1 : Dynamic Element Creation


var div=document.getElementById("result")
function update()
{   var listItem=document.createElement("h1")
    listItem.textContent="Hello"
    div.append(listItem)
}