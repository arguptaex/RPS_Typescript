console.log("hello rps");
function rpsGame(
    //   round_no: number,
    //   scoreboard,
    player_move) {
    let playerScore;
    let compScore;
    let result;
    let moves = ["fire", "water", "grass"];
    let options = {
        fire: "grass",
        grass: "water",
        water: "fire",
    };
    let randomIndex = Math.floor(Math.random() * moves.length);
    let compMove = moves[randomIndex];
    if (player_move == compMove) {
        result = "Its a Tie; Try again !";
        console.log("Its a Tie; Try again !");
    }
    else if (options[player_move] == compMove) {
        result = "You Won";
        console.log("You won");
    }
    else {
        result = "You Loose";
        console.log("You Loose");
    }
    return result;
}
function handleClick(move) {
    const screen = document.getElementById("screen");
    if (screen) {
        console.log("check");
        screen.innerText = rpsGame(move);
    }
}
