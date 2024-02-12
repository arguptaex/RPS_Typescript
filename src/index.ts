console.log("hello rps");

function rpsGame(
  //   round_no: number,
  //   scoreboard,
  player_move: string
): string {
  let playerScore: number;
  let compScore: number;
  let result: string;
  let moves: string[] = ["fire", "water", "grass"];
  let options = {
    fire: "grass",
    grass: "water",
    water: "fire",
  };

  let compMove: string = "fire";

  if (player_move == compMove) {
    result = "Its a Tie; Try again !";
    console.log("Its a Tie; Try again !");
  } else if (options[player_move] == compMove) {
    result = "You Won";
    console.log("You won");
  } else {
    result = "You Loose";
    console.log("You Loose");
  }

  return result;
}

function handleClick(move: string) {
  const screen = document.getElementById("screen");
  if (screen) {
    console.log("check");
    screen.innerText = rpsGame(move);
  }
}

interface Player {
  name: string;
}
