var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
var op=document.getElementById("op")

function btn()
{
    tot= Number(num1.value)+Number(num2.value)//HTML inputs return values as Strings , Number () used to convert string into string into number
    op.textContent=tot

  
}

function clearFields() {      // 
    num1.value = "";           
    num2.value = "";           
    op.textContent = "output"; 
}


