
// Exercise 1: Array Iteration using For Loop

// var fruit=["apple","orange","banana","graph",]

// for (count=0; count<fruit.length; count=count+1) {

//         console.log(fruit[count]+count);

// }




// Exercise 2: Selecting & Printing DOM Elements

// var div=document.querySelectorAll("h1")

// for(count=0; count<div.length; count=count+1) {
    
//     console.log(div[count].textContent);
    
// } 


// append and prepend

// var div=document.querySelector("div")
// div.append("hello")
// div.prepend("hi")



//inserAdjestElement

// var div=document.querySelector("div")
// var h1=document.createElement("h1")
// h1.textContent="vetri"
// div.insertAdjacentElement("afterend",h1)



//Todo list app


var input=document.getElementById("input")
var ul=document.getElementById("list-container")

function add() {
    var listItem=document.createElement("li")
    listItem.innerHTML=input.value+ "<button onclick='deleteItem(event)'>Delete</button>"
    ul.append(listItem)
    input.value = ""

}

function deleteItem(event) {
        event.target.parentElement.remove()
}