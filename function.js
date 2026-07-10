
{
    
    function abc()
{
    console.log("hello");
    
}
abc()

}

console.clear();


// ex 1 for function calling

{

    function oppo()
    {
        console.log("this is oppo phone");
        
    }
    
    function samsung()
    {

        console.log("This is samsung phone");
        
    }

    function apple()
    {
        console.log("This is apple phone");
        
    }

    function redmi() {
        console.log("this is redmi phone");
        
    }

    oppo()
    samsung()
    apple()
    redmi()

}

console.clear()



// Parameters and Arguments

function add (a,b)
{
    console.log(a+b);
    
}

add(10,20)



//* Create a function called area()
//* This function should get 2 values as parameter (length,breadth)
//*pass two values to the function and print the result
console.clear()

function area(length,breadth)
{
    var a = length*breadth
        console.log(a);
        
}

var value1=10
var value2=20
area(value1,value2)