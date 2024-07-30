let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let turnO =true;
let count=0;
const pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
     let iswinner= checkWinner();
     if(count==9&&!iswinner){
        alert("game draw");
     }

    });
});
const disabledboxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner=() =>{
    for( let p of pattern){
        let pos1val=boxes[p[0]].innerText;
        let pos2val=boxes[p[1]].innerText;
        let pos3val=boxes[p[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                disabledboxes();
                msg.innerText="winner";
            }
        }

    }
}
const reset=()=>{
    count=0;
    turnO=true;
    enableboxes();
    msg.innerText=""

}
resetbtn.addEventListener("click",reset);


 