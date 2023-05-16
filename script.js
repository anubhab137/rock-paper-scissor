
const btns = document.querySelectorAll('.btns');
const roundWin = document.querySelector("#round")
const manScoreEle = document.querySelector("#y-score-upd");
const aiScoreEle = document.querySelector("#ai-score-upd");
const winner = document.querySelector(".win-upd");
const playAgain = document.querySelector(".play-again");
playAgain.style.display = 'none';

function compPlay(){
    const ar = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random()*3);
    const aiChoice = ar[rand];
    return aiChoice;
}


function play(manChoice, aiChoice){
    if(manChoice === aiChoice){
        return 0;
    }
    else{
        if(manChoice === "rock"){
            if(aiChoice === "paper") return -1;
            else return 1;
        }
        else if(manChoice === "paper"){
            if(aiChoice === "scissor") return -1;
            else return 1;
        }
        else{
            if(aiChoice === "rock") return -1;
            else return 1;
        }
    }
}


btns.forEach((button)=> {
    button.addEventListener('click', () => {
        let manScore = +manScoreEle.textContent;
        let aiScore = +aiScoreEle.textContent;
        const aiChoice = compPlay();
        const manChoice = button.id;
        let score = play(manChoice, aiChoice);
        
        if(score === 0){
            roundWin.textContent = "It's a tie";
        }
        else if(score === 1){
            roundWin.textContent = `Congo! You win this round, ${manChoice} beats ${aiChoice}.`;
            manScore +=1;
            manScoreEle.textContent = manScore;
        }
        else{
            roundWin.textContent = `Alas! You lost this round, ${aiChoice} beats ${manChoice}`;
            aiScore += 1;
            aiScoreEle.textContent = aiScore;
        }


        if(aiScore == 5){
            winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
        }
        if(manScore == 5){
            winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
        }
        if(aiScore == 5 || manScore == 5){
            playAgain.style.display = 'block';
            for(let i = 0; i < btns.length; i++){
                btns[i].disabled = true;
            }
        }

    });
});


playAgain.addEventListener('click',()=>{
    window.location.reload();
})



