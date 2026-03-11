//DATE: 08-March-2026
//AUTHOR: Jana Schroth
//APPLICATION:The Rock, Paper, Scissors Game
//USE:Practice Functions

/*The Rock, Paper, Scissors Game (20 points)

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
Our code will break the game into 3 phases:

User makes a choice. How will we collect the user’s choice?
Computer makes a choice. How will we collect the computer’s choice?
A conditional that determines who wins.
You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

Begin by prompting the user for their choice.
Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
What if the result ends in a tie? Figure out how to handle that as well.
What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
*/



//STEP 1

function userChoice () {
    let selectionUser;

    do {
        selectionUser = prompt (" Select one (\"rock\", \"paper\", \"scissors\")" ).toLowerCase();
        //console.log (`You selected: ${selectionUser}`);
    }
        while ((selectionUser !== "rock" && selectionUser !== "paper" && selectionUser !== "scissors"));
    
    console.log (`You selected: ${selectionUser}`);
    return selectionUser;
}

//userChoice ()


//STEP 2

function compChoice() {
    let selectionComp;

    let randomNum = Math.floor(Math.random()*3)+1;
    //console.log (randomNum);


    switch (randomNum) {
        case 1 :
            selectionComp = "rock";
            break;
        case 2 :
            selectionComp = "paper";
            break;
        case 3 :
            selectionComp = "scissors";
            break;
    }
    console.log (`Computer selected: ${selectionComp}`);
    return selectionComp;
}

//compChoice ()

//STEP 3

function compareRPS (entryP1 , entryP2) {
    let result;
    if (entryP1 === entryP2) {
        result = "Tie"
    } else if (entryP1 === "rock" && entryP2 === "scissors" || entryP2 === "rock" && entryP1 === "scissors") {
        result = "Rock destroys scissors!"
    } else if (entryP1 === "paper" && entryP2 === "scissors" || entryP2 === "paper" && entryP1 === "scissors") {
        result = "Scissors cut paper!"
    } else if (entryP1 === "paper" && entryP2 === "rock" || entryP2 === "paper" && entryP1 === "rock") {
        result = "Paper covers rock!"
    }
    return result
}

console.log(compareRPS (userChoice(), compChoice()))


