//DATE: 08-March-2026
//AUTHOR: Jana Schroth
//APPLICATION:Practice with Functions
//USE:Practice with Functions

/*
Practice with Functions (5 points)

Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
*/

//STEP 1

function halfNumber (number) {
        let result = number / 2
        return `Half of ${number} is ${result}`
}


//STEP 2

function squareNumber (num) {
        let result = num ** 2
        return `The result of squaring the number ${num} is ${result}`
}


//STEP 3

function percentOf (num1, num2) {
        let result = (num1 * 100) / num2
        return `${num1} is ${result}% of ${num2}`
}


//STEP 4

function findModulus (num1, num2) {
        let result = num1 % num2
        return ` ${result} is the modulus ${num1} and ${num2}`
}


//STEP 5

/*
halfNumber (3)
squareNumber (2)
percentOf (10,100)
findModulus(10,4)
*/