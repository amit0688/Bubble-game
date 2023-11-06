

let rn = 0;


var score = 0;

function scoreInc(){
    score += 10;
    document.querySelector("#point").textContent = score;
}

function scoreDec(){
    score += -10;
    document.querySelector("#point").textContent = score;
}

function hitrn(){
    rn = Math.floor(Math.random()*10);
    let hit = document.querySelector("#hit").innerHTML = rn;
}

hitrn();




document.querySelector("#bot").addEventListener("click", function(dets){
    let scoreVal = Number(dets.target.textContent);
    if (scoreVal === rn){
        scoreInc();
        hitrn();
        makeBubble();
    }else if(scoreVal !== rn){
        scoreDec();
        hitrn();
        makeBubble();
    }
});







var time = 4;

function runTimer(){
    let timeInt = setInterval (function(){
        if(time > 0){
            time --;
            let timer = document.querySelector("#timer").textContent= time;
        }else{
            clearInterval(timeInt);
            document.getElementById("bot").style.pointerEvents = "none";
            document.querySelector(".bot").innerHTML = `<h1 id = "tex">Game Over</h1> <h1 id ="dj"> Your total score is : ${score}</h1>`;
        }

    },1000);
    
}

runTimer();


function makeBubble(){
    let balls = "";
    for (let i = 0; i<130; i++ ){
        let rn = Math.floor(Math.random()*10);
        balls += `<div class="ball"> ${rn} </div>`;
    };
    
    document.querySelector(".bot").innerHTML = balls;
}

makeBubble();