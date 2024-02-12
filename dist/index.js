console.log("hello rps");
class Player {
    constructor(name = "Archit") {
        this.name = name;
    }
    scoreCard(score = 0) {
        this.score = score;
    }
}
const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get("name");
const player = new Player(playerName);
player.score = 0;
function rpsGame(
//   round_no: number,
//   scoreboard,
player_move) {
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
        player.score += 1;
        player.scoreCard(player.score);
    }
    else {
        result = "You Loose";
        console.log("You Loose");
    }
    return result;
}
function startGame() {
    const playerNameInput = document.getElementById("player_name");
    const playerName = playerNameInput.value;
    console.log(playerNameInput.value);
    window.location.href = `/gameplay.html?name=${playerName}`;
}
function handleClick(move) {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get("name");
    const screen = document.getElementById("screen");
    if (screen) {
        console.log("check");
        screen.innerText = rpsGame(move) + "\n " + player.score;
    }
}
