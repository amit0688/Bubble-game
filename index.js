

let rn = Math.floor(Math.random()*10);


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
    let hit = document.querySelector("#hit").innerHTML = rn;
}

hitrn();




document.querySelector("#bot").addEventListener("click", function(dets){
    let scoreVal =  dets.target.textContent;
    console.log(scoreVal);
    if (scoreVal == rn){
        scoreInc();
        hitrn();
        makeBubble();
    }else if(scoreVal != rn){
        scoreDec();
        hitrn();
        makeBubble();
    }
});







var time = 6;

function runTimer(){
    let timeInt = setInterval (function(){
        if(time > 0){
            time --;
            let timer = document.querySelector("#timer").textContent= time;
        }else{
            clearInterval(timeInt);
            document.querySelector(".bot").innerHTML = "Game Over";
        }

    },1000);
    
}

runTimer();


function makeBubble(){
    let balls = "";
    for (let i = 0; i<96; i++ ){
        let rn = Math.floor(Math.random()*10);
        balls += `<div class="ball"> ${rn} </div>`;
    };
    
    document.querySelector(".bot").innerHTML = balls;
}

makeBubble();