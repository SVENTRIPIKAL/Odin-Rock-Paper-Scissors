// return rock, paper, scissors randomly
function getComputerChoice() {
    // anonymous function call
    return (() => {
        // assign number from 0-2
        let n = Math.floor(Math.random() * 3)
        switch (n) {
            case 0: return "Rock"
            case 1: return "Paper"
            default: return "Scissors"
        }
    })()
}


console.log(getComputerChoice())