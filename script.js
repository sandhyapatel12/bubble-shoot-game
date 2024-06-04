//access elements
let timer = 60;
let score = 0;
let hitRn = 0;

//generate random bubbles
function makeBubbles()
{
    //store bubbles
    let bubbles = "";

    //logic for random number----------------------------------

    // Math.random() = 0.4454565       --------> number between 0 to 1 and with Point
    // Math.random() * 10 = 5.3444     -------->   
    // Math.floor(1.2323)  = 1         --------> get value without Point  
    // Math.floor(Math.random() * 10)
    //----------------------------------------------------------

    //loop for create bubble
    for(let i = 1; i <= 147; i++)
    {
        let points = Math.floor(Math.random() * 10);            //generate random bubbles
        bubbles += `<div class="bubble">${points}</div>`;       //store and create bubbles in loop formate
    }



    //display bubbles in html
    document.querySelector('.panel-bottom').innerHTML = bubbles;
}

//play button
let playBtn = document.getElementById('playBtn');

function playGame()
{
    playBtn.addEventListener('click', () =>
        {
            makeBubbles();
            runTimer();
            getHit();
        })
}
playGame();


//timer

function runTimer()
{
    let timerInt = setInterval(function()
    {
        if(timer > 0)
        {
            timer--;
            document.querySelector('#timerVal').textContent = timer;

        }
        else
        {
        
            document.querySelector('.panel-bottom').innerHTML = `<h1>GAME OVER!</h1>`;

            clearInterval(timerInt);
        }
    }, 1000);

}




//hit
function getHit()
{
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = hitRn; 
}

//score

function increseScore()
{
    score += 10;
    document.querySelector('#scoreVal').textContent = score;

}

document.querySelector('.panel-bottom').addEventListener('click', function(e)
{
    let ClickedNum = Number(e.target.textContent);

    if (ClickedNum === hitRn)
    {
        increseScore();
        makeBubbles();
        getHit();
        
    }
})






