//DATE: 11-March-2026
//AUTHOR: Jana Schroth
//APPLICATION:The Basic Calculator
//USE:Practice Functions

/*
In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions. 
You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. 
Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:

Create a function that will serve as the main calculation logic of your application. This function should be called calculate and will accept three parameters: x, y, and operation.
In the script, prompt the user for a number and store that in a variable. Convert that to a number.
Then, prompt the user for a second number and store that in a variable. Convert that to a number.
Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
Finally, pass the three parameters into the calculate function to return the result of the calculation. You'll need to add a switch statement inside the calculate function to evaluate the operation and perform the appropriate calculation on the x and y numbers based on the operation passed in. 
Display the result of the calculation within an alert.
Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
*/




// ADD A FUNCTION CALLED CALCULATE

function calculate (x, y, operation){
    let calculation
    switch (operation) {
        case '+':
            calculation = x + y;
            break;
        case '-':
            calculation = x - y;
            break;
        case '*':
            calculation = x * y;
            break;
        case '/':
            calculation = x / y;
            break;
        //default: calculation = "Invalid operator was entered!"                    //replaced with do-while loop below
    }
    return calculation
}


let firstNum;
let secondNum;
let operation;


// COLLECT FIRST NUMBER FROM USER

do {
    firstNum = parseFloat(prompt ("Enter any number:"));
} while (isNaN(firstNum));

// COLLECT SECOND NUMBER FROM USER

do {
    secondNum = parseFloat(prompt ("Enter a second number:"))
} while (isNaN(secondNum));


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

do {
    operation= prompt ("Enter the operator you want to use (+,-,*,/):")
} while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/");


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

alert (calculate (firstNum, secondNum, operation))