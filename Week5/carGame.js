var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = 20

var start = 50
var finish = 750

//boolean for if game is over
var gameOver = true

//variable for image sprite
var cheems = new Image()
cheems.src = 'images/cheemsshiba.jpg'

cheems.onload = function () {
    main();
}

//Fuel Variables
var startFuel = randomNumber(600, canvas.width)
var fuel = startFuel
var fullBarWidth = 300

//Countdown Variables
var sec = 3
var fps = 60
var frames = fps

//adding keypresses
document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function main() {
    //call frame
    timer = requestAnimationFrame(main)

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2)
    }
    else {
    if (!gameOver && sec > 0) {
        
        runStartTimer()
        drawStartTimer()
    } 
    else {
        if (gameOver == false && fuel > 0 && sec <= 0) {
            //update values
            xpos++;
            fuel--;
        }
    }
}




//draw the things

//draw start and finish lines
drawStartLine()
drawFinishLine()


//car
drawCar()
drawCarImage()



//draws the fuelbar hud

drawFuelBar()
drawFuelText()

//determine if game is over
if(xpos > finish + 10 || fuel <= 0)
 drawResults()
}

function keyPressDown(e) {
    console.log(e.keyCode)
    //pressing spacebar
    if (e.keyCode == 32) {
        if(!gameOver && fuel <= 0)
        gameOver = false

        //toggles game over on keypress
        //gameOver = !gameOver
        //document.removeEventListener("keydown", keyPressDown)
    }
}

function keyPressUp(e) {
    console.log(e.keyCode)
    //pressing spacebar
    if (e.keyCode == 32) {
        document.addEventListener("keydown", keyPressDown)
    }
}

function drawStartLine() {
    ctx.fillStyle = "black"
    ctx.fillRect(start, 50, 10, 500)
}

function drawFinishLine() {
    ctx.fillStyle = "black"
    ctx.fillRect(finish, 50, 10, 500)
}

function drawCar() {
    ctx.fillStyle = "red"
    ctx.fillRect(xpos, canvas.height / 2, 30, 20)
}

function drawCarImage() {
    ctx.drawImage(cheems, xpos, canvas.height / 2 - 40, 40, 60)
}

function drawFuelBar() {
    var barCurrentWidth = fullBarWidth * getFuelPercentage()

    ctx.fillStyle = "black"
    ctx.fillRect(start, 30, fullBarWidth, 10)
    if (fuel > 0)
        ctx.fillStyle = "lightgreen"
    ctx.fillRect(start, 30, barCurrentWidth, 10)
}

function getFuelPercentage() {
    return fuel / startFuel
}

function drawFuelText() {
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.fillText(fuel, start, 30)
}

function runStartTimer() {
    frames -= 1;
    if (frames < 0) {
        frames = fps
        sec -= 1
    }
}

function drawStartTimer() {
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.textAlign = "center"
    ctx.fillText(sec, canvas.width / 2, canvas.height / 2);
}
function randomNumber(high, low){
    return Math.round(Math.random() * (high- low) + low)
}

function drawResults(){
    if(xpos > finish){
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.textAlign = "center"
    ctx.fillText("You made it to the Finish", canvas.width / 2, canvas.height / 2);
    } 
    else{ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.textAlign = "center"
    ctx.fillText("You ran out of Fuel", canvas.width / 2, canvas.height / 2)}
}
function restartGame(){
    location.reload();
}