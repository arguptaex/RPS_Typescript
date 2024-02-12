console.log("hello rps");

class Player {
  name: string;
  score: number;
  constructor(name: string = "Archit") {
    this.name = name;
  }

  scoreCard(score: number = 0) {
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
  player_move: string
): string {
  let compScore: number;
  let result: string;
  let moves: string[] = ["fire", "water", "grass"];
  let options = {
    fire: "grass",
    grass: "water",
    water: "fire",
  };

  let randomIndex = Math.floor(Math.random() * moves.length);
  let compMove: string = moves[randomIndex];

  if (player_move == compMove) {
    result = "Its a Tie; Try again !";
    console.log("Its a Tie; Try again !");
  } else if (options[player_move] == compMove) {
    result = "You Won";
    console.log("You won");
    player.score += 1;
    player.scoreCard(player.score);
  } else {
    result = "You Loose";
    console.log("You Loose");
  }

  return result;
}

function startGame(): void {
  const playerNameInput = document.getElementById(
    "player_name"
  ) as HTMLInputElement;
  const playerName = playerNameInput.value;
  console.log(playerNameInput.value);
  window.location.href = `/gameplay.html?name=${playerName}`;
}

function handleClick(move: string) {
  const urlParams = new URLSearchParams(window.location.search);
  const playerName = urlParams.get("name");

  const screen = document.getElementById("screen");
  if (screen) {
    console.log("check");
    screen.innerText = rpsGame(move) + "\n " + player.score;
  }
}
