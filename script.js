//　じゃんけんの手の入った配列を作る
const hands = ["rock", "paper", "scissors"];

//コンピュータの手を選ぶ
function computerPlay() {
    //０から２までのランダムな数を作る
    let num = Math.floor(Math.random()*3);

    //じゃんけんの配列から指定された位置の手を返す
    return hands[num];
}

//１ラウンドの勝敗を決める

function playRound(playerSelection, computerSelection) {
    //プレイヤーの手を小文字にする
    playerSelection = playerSelection.toLowerCase()

    //プレイヤーの手とコンピュータの手を比べる
    if (playerSelection == computerSelection) {
        return "draw";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return 'You win! Rock beats scissors';
        } else {
            return "you lose...paper beats Rock";
        }
     } else if (playerSelection = "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "You lose...Rock beats Scissors";
        }
    } else {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose...Scissors beats Paper";
        }
    }
}

function game() {
    //プレイヤーとコンピュータの勝利数を初期化
    let computerWin = 0;
    let playerWin = 0;

    for (let i = 0; i < 5; i++){
        //プレイヤーの手を取得
        let playerSelection = prompt("Please input your next move") ?? "Invalid text";
        
        // 正しくない文字、もしくはundefined, nullの場合何度も問い直す
        while(!hands.includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Invalid input: Try again") ?? "Invalid text";
        }

        //その試合の結果を取得し、表示
        let result = playRound
        (playerSelection, computerPlay());
        
        console.log(result);

        //　結果メッセージの中にwinの単語があれば勝利とみなし、プレイヤーの勝利数に加算し、loseの文字があればコンピュータ側に加算
        if (result.includes("win")) {
            playerWin += 1;
        } else if (result.includes("lose")) {
            computerWin += 1;
        }
    }
    // 勝ち数を表示する関数
    function printTotalScore () {
        console.log(`YOU: ${playerWin} COM: ${computerWin} DRAW: ${5 - computerWin - playerWin}`);
    }
    // 勝敗を表示
    if (playerWin > computerWin) {
            console.log("YOU WIN!");
            printTotalScore();
        } else if (playerWin == computerWin) {
            console.log("DRAW");
            printTotalScore();
        } else {
            console.log("YOU LOSE...");
            printTotalScore();
        }
}

game();