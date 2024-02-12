console.log("hello rps");


function rpsGame(round_no:number, scoreboard, player_move:string):[number,number, string]{
    let playerScore:number;
    let compScore:number;
    let result:string;
    let moves:string[] = ['fire', 'water', 'grass']
    let options = {
        "fire":"grass",
        "grass":"water",
        "water":"fire"
    }

    let compMove:string = "fire";

    if(player_move==compMove){
        result = "Its a Tie; Try again !"
        console.log("Its a Tie; Try again !")

    } else if (options[player_move]==compMove){
        result = "You Won"
        console.log("You won")
        

    }else{
        result = "You Loose"
        console.log("You Loose")
    }



    return [playerScore, compScore, result]
};



function startGame():void {
    // Get player name input value
    const playerNameInput = document.getElementById("player_name") as HTMLInputElement;
    const playerName = playerNameInput.value;
    console.log(playerNameInput.value);

    // Redirect to another page passing player name as query parameter
    window.location.href = `/gameplay.html`;
    // window.location.href = "wwww.google.com"
}


interface Player{
    name:string;
}

