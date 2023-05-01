const ar = ["Rock","Paper","Scissor"];

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const roundWin = document.querySelector("#round")
const manScoreEle = document.querySelector("#y-score-upd");
const aiScoreEle = document.querySelector("#ai-score-upd");
const winner = document.querySelector(".win-upd");
const playAgain = document.querySelector(".play-again");
playAgain.style.display = 'none';

rock.addEventListener('click',()=>{
    winner.textContent  = "";

    let manScore = +manScoreEle.textContent;
    let aiScore = +aiScoreEle.textContent;

    let rand = Math.floor(Math.random()*3);
    const aiChoice = ar[rand];

    if(aiChoice == "Rock") roundWin.textContent = "It's a tie";
    else if(aiChoice == "Paper"){
        roundWin.textContent = "Alas! You lost this round";
        aiScore += 1;
        aiScoreEle.textContent = aiScore;
    } 
    else{
        roundWin.textContent = "Congo! You win this round";
        manScore +=1;
        manScoreEle.textContent = manScore;
    }

    if(aiScore == 5){
        winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
    }
    if(manScore == 5){
        winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
    }
    if(aiScore == 5 || manScore == 5){
        playAgain.style.display = 'block';
    }
});

paper.addEventListener('click',()=>{
    winner.textContent  = "";

    let manScore = +manScoreEle.textContent;
    let aiScore = +aiScoreEle.textContent;

    let rand = Math.floor(Math.random()*3);
    const aiChoice = ar[rand];

    if(aiChoice == "Paper") roundWin.textContent = "It's a tie";
    else if(aiChoice == "Scissor"){
        roundWin.textContent = "Alas! You lost this round";
        aiScore += 1;
        aiScoreEle.textContent = aiScore;
    } 
    else{
        roundWin.textContent = "Congo! You win this round";
        manScore +=1;
        manScoreEle.textContent = manScore;
    }

    if(aiScore == 5){
        winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
    }
    if(manScore == 5){
        winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
    }
    if(aiScore == 5 || manScore == 5){
        playAgain.style.display = 'block';
    }
});

scissor.addEventListener('click',()=>{
    winner.textContent  = "";

    let manScore = +manScoreEle.textContent;
    let aiScore = +aiScoreEle.textContent;

    let rand = Math.floor(Math.random()*3);
    const aiChoice = ar[rand];

    if(aiChoice == "Scissor") roundWin.textContent = "It's a tie";
    else if(aiChoice == "Rock"){
        roundWin.textContent = "Alas! You lost this round";
        aiScore += 1;
        aiScoreEle.textContent = aiScore;
    } 
    else{
        roundWin.textContent = "Congo! You win this round";
        manScore +=1;
        manScoreEle.textContent = manScore;
    }

    if(aiScore == 5){
        winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
    }
    if(manScore == 5){
        winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
    }
    if(aiScore == 5 || manScore == 5){
        playAgain.style.display = 'block';
    }
});

playAgain.addEventListener('click',()=>{
    window.location.reload();
})



