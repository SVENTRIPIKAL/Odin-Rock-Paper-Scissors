// string constants
const HUMAN = "HUMAN"
const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const INPUT_MSG = "Enter [Rock|Paper|Scissors]: "
// integer constants
const ZERO = 0
const ONE = 1
const TWO = 2
const THREE = 3

// player scores
let humanScore = ZERO
let computerScore = ZERO


// return number from 0-2 randomly
function getComputerChoice() { 
    return Math.floor(Math.random() * THREE)
}

// prompts user for rock, paper, scissors input
function getHumanChoice() {
    // assign temp value
    let choice = null
    // loop until valid input
    while(true) {
        // get user input
        let input = prompt(INPUT_MSG).toUpperCase()
        // check input & assign choice
        switch (input) {
            case ROCK:
                choice = ZERO; break;
            case PAPER:
                choice = ONE; break;
            case SCISSORS:
                choice = TWO; break;
        }
        // break from loop when input valid
        if (choice != null) break
    }
    return choice
}

// return a choice according to user
function getChoice(user) {
    // assign temp value
    let choice = null
    // get user choice
    if (user == HUMAN) { choice = getHumanChoice() }
    // get choice randomly
    else { choice = getComputerChoice() }
    // return choice
    switch (choice) {
        case ZERO: return ROCK
        case ONE: return PAPER
        default: return SCISSORS
    }
}


console.log(getChoice(HUMAN))
console.log(getChoice())