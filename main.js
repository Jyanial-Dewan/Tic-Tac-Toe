let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");

let turnX = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked")
        box.classList.add("opacity");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const gameDraw = ()=>{
    msg.innerText = `Game is a Draw.`
    msgContainer.classList.remove("hide");
    disabledBtn();
};

const resetGame = ()=>{
    turnX = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

const disabledBtn = ()=>{
    for(let box of boxes) {
        box.disabled =true;
        box.classList.add("opacity");
    }
};

const enableBtn = ()=>{
   for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("opacity");
    }
};

const showWinner = (winner)=>{
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations!
                    The winner is player ${winner} `;
    disabledBtn();
};

const checkWinner = () =>{
    for(let pattern of winPatterns) {
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);