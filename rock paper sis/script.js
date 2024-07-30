let userScore=0;
let compScore=0;
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg-container");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const playGame = (userChoice) => {
    console.log("user choice ",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            // comp choice rock,scissors
            userWin= compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            // rock ,scissors
            userWin = compChoice=="scissors"?false:true;
        }
        else{
            // user =scisssors and comp= rock and paper
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin);

    }
}
const showWinner=(userWin)=>{
    if(userWin==true){
        userScore++;
        msg.innerText="user win";
        msg.style.backgroundColor="green";
        msg.style.color="white";

    }
    else{
        compScore++;
        msg.innerText="comp win";
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
    user.innerText=userScore;
    comp.innerText=compScore;
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was drawn";
    msg.style.backgroundColor="#081b31";
    msg.style.color="white";


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})