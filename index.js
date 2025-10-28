const board = document.getElementById("board"); // bu bilan htmldagi div chaqirilyapti
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // bu 9 ta katak shu x 0 uyiniga k bulaidgan

function checkWinner() {
  const winPatterns = [ // qaysilar bulsa yuta oladi
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (
      gameBoard[a] && // bu tuldirilganini aniqlash uchun
      gameBoard[a] === gameBoard[b] && // birinchisi ikkinchisi  bir xil belgi borligini  uchun
      gameBoard[a] === gameBoard[c]  // birinchisi uchinchisi bir xil belgi borligini  aniqlash uchun
    ) {
      setTimeout(() => alert(`${gameBoard[a]} yutdi!`), 100); //  alert kim yutganini kursatib beradi  settimeout esa birinchi usha oxirgi
      //  tuldirilgan qator tuldirilsin keyin kim yutgani chiqarilsi bu yerda 100 quyilgan 100 ms dan kn golib chiqadi
      return true;
    }
    
  }
  if (!gameBoard.includes("")) { // qachonki bush katak qolmasa
    setTimeout(() => alert("Durrang!"), 100);  // 100 ms dan kn durrang chiqarsin
    return true;
  }
  return false; // aks holda false
}

function handleClick(index, cell) {
  if (!gameBoard[index]) {
    gameBoard[index] = currentPlayer;
    cell.innerHTML =
      currentPlayer === "X"
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-o"></i>';
    if (!checkWinner()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
      setTimeout(() => location.reload(), 1000);
    }
  }
}

for (let i = 0; i < 9; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => handleClick(i, cell));
  board.appendChild(cell);
}
