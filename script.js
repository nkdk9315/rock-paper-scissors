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
    // 試合数
    const match = 5;
    //プレイヤーとコンピュータの勝利数を初期化
    let computerWin = 0;
    let playerWin = 0;

    // 結果のdivを入れるコンテナを取得
    const container = document.querySelector(".container");

    // ゲームを任意の回数行う
    for (let i = 0; i < match; i++){
        //プレイヤーの手を取得
        let playerSelection = prompt("Please input your next move");
        // キャンセルされたら終了
        if (playerSelection == null) {
            return;
        }
        // 正しくない文字、もしくはundefinedの場合は何度も問い直す
        while(!hands.includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Invalid input: Try again");
            // キャンセルされたら終了
            if (playerSelection == null) {
                return;
            }
        }
        //その試合の結果を取得
        let result = playRound
        (playerSelection, computerPlay());

    　　//divを作り、結果を入れて表示
        const div = document.createElement("div");
        div.textContent = `Round${i + 1}: ` + result;
        container.appendChild(div);

        //　結果メッセージの中にwinの単語があれば勝利とみなし、プレイヤーの勝利数に加算し、loseの文字があればコンピュータ側に加算
        if (result.includes("win")) {
            playerWin += 1;
        } else if (result.includes("lose")) {
            computerWin += 1;
        }
    }
    
    // 総合結果を表示する関数
    function printTotalScore (resultText) {
        const h4 = document.createElement("h4");
        const h3 = document.createElement("h3");
        // 受け取った、勝敗メッセージを表示
        h3.textContent = resultText;
        container.appendChild(h3);

        //最終的な勝ち負け数を表示
        h4.textContent = `YOU: ${playerWin} COM: ${computerWin} DRAW: ${match - computerWin - playerWin}`;
        container.appendChild(h4);
    }

    // 勝ち数に応じて、結果を表示
    if (playerWin > computerWin) {
           printTotalScore("YOU WIN!");
        } else if (playerWin == computerWin) {
           printTotalScore("DRAW");
        } else {
            printTotalScore("YOU LOSE...");
        }
}
// ボタンをおすとゲームが開始
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game));