const board = document.getElementById("board");
let currentPlayer ="x"
let gameBoard =["","","","","","","",""]
 function checkWinner(){
    const winPatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
    ]
 };

 for (let pattern of winPatterns){
let [a,b,c]=pattern;
if(
    gameBoard[a]&&
    gameBoard[a]== gameBoard[b]&&
    gameBoard[a]==gameBoard[c]
){
    setTimeout(()=>alert(`${gameBoard[a]}yutdi`),100)
}
 }