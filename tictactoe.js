let boxes = document.querySelectorAll(".button");
let massegecontainer = document.querySelector(".massege-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector ("#reset-game");

let playerO= true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]
];

const enablebutton = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const disablebutton = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

let showwinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  //disablebutton();
}

boxes.forEach((button) => {
  button.addEventListener("click",() => {
   console.log("button was clicked");
   if(playerO=== true){
     button.innerText = "O"
     playerO = false;
   }else{
     button.innerText = "X"
     playerO = true;
   }
   button.disabled = true;
   checkwinner();
  })
})

let checkwinner = () => {
  for(let pattern of winPatterns){
    let wincondition1 = boxes[pattern[0]].innerText;
    let wincondition2 = boxes[pattern[1]].innerText;
    let wincondition3 = boxes[pattern[2]].innerText;
    if(wincondition1 != "" && wincondition2 != "" && wincondition3 != ""){
      if(wincondition1 === wincondition2 && wincondition2 === wincondition3){
        console.log("winner");
        showwinner(wincondition1);
        disablebutton();
        drowButton();
      }
    }
    
    
  }
}

/*resetbtn.addEventListener("click", resetgame);*/

const resetgame = () => {
  playerO = true;
  enablebutton();
}

resetbtn.addEventListener("click", resetgame);

