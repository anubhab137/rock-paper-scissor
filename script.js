const ar = ["Rock","Paper","Scissor"];

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const roundWin = document.querySelector("#round")
const manScoreEle = document.querySelector("#y-score-upd");
const aiScoreEle = document.querySelector("#ai-score-upd");
const winner = document.querySelector(".win-upd");

rock.addEventListener('click',()=>{
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
        aiScoreEle.textContent = 0;
        manScoreEle.textContent = 0;
        winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
    }
    if(manScore == 5){
        aiScoreEle.textContent = 0;
        manScoreEle.textContent = 0;
        winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
    }
});

paper.addEventListener('click',()=>{
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
        aiScoreEle.textContent = 0;
        manScoreEle.textContent = 0;
        winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
    }
    if(manScore == 5){
        aiScoreEle.textContent = 0;
        manScoreEle.textContent = 0;
        winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
    }
});

scissor.addEventListener('click',()=>{
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
        aiScoreEle.textContent = 0;
        manScoreEle.textContent = 0;
        winner.textContent = "Defeat! AI wins the war over humanity and starts ruling the world";
    }
    if(manScore == 5){
        aiScoreEle.textContent = 0;
        manScoreEle.textContent = 0;
        winner.textContent = "Victory! Man defeats AI and saves the world from being controlled by machines";
    }
});



