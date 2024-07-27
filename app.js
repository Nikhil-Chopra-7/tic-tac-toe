const btnList = document.querySelectorAll("button");
const h1 = document.querySelector("h1");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnX = true;

const disableBoxes = () => {
  for (let btn of btnList) {
    btn.disabled = true;
  }
};

const showWinner = (value1) => {
  h1.innerText = `Winner: ${value1}`;
  disableBoxes();
};

const checkWinner = () => {
  for (const pattern of winPatterns) {
    const value1 = btnList[pattern[0]].innerText;
    const value2 = btnList[pattern[1]].innerText;
    const value3 = btnList[pattern[2]].innerText;
    if (value1 && value2 && value3) {
      if (value1 === value2 && value2 === value3) {
        showWinner(value1);
        return true;
      }
    }
  }
};

const handleButton = (btnNode) => {
  if (turnX) {
    btnNode.innerText = "x";
    turnX = false;
  } else {
    btnNode.innerText = "o";
    turnX = true;
  }
  btnNode.disabled = true;
  checkWinner();
};

btnList.forEach((btnNode) => {
  btnNode.addEventListener("click", () => handleButton(btnNode));
});
