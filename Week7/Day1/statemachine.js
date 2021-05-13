//set up canvas
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var gameStates = []
var currentState = 0
var x = 10
var gameOver = true

//Setup keypresses
document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

function keyPressDown(e){
    console.log(e.keyCode)
}

function keyPressUp(e){
    console.log(e.keyCode)
    if(gameOver == true){
        if(e.keyCode == 32){
            //this is spacebar
            changeState()
        }
    }
   
}

function changeState(){
    if(currentState >= gameStates.length -1){
        currentState = 0
    }
    else{
        currentState++
    }
}


//States of our gameState State Machine FSM
gameStates[0] = function(){
    ctx.fillStyle = "green"
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Untitled HTML Game", canvas.width/2, canvas.height/2- 30)
    ctx.font = "15px Arial"
    ctx.fillText("[Press Space to Start]", canvas.width/2, canvas.height/2 + 15)
}

gameStates[1] = function(){
    gameOver = false
    ctx.fillStyle = "cyan"
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle ="tan"
    ctx. fillRect(x, canvas.height/2, 100, 50)
    x += 5

    if(x > 900){
        x = 10
        gameOver = true
        currentState++
    }
}

gameStates[2] = function(){
    ctx.fillStyle = "red"
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Game Over", canvas.width/2, canvas.height/2- 30)
    ctx.font = "15px Arial"
    ctx.fillText("[Press Space for Titlescreen]", canvas.width/2, canvas.height/2 + 15)
}


function main(){
    //clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()
    //call main function
    timer = requestAnimationFrame(main)
}