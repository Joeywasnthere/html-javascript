var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var asteroids = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0


//utility functions
function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

function gameStart(){
//For Loop to create the  instances ofAsteroids

for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid()
}

    //create an instance of the PlayerShip
ship = new PlayerShip()
}

//Constructor Function for Asteroid Class
function Asteroid() {
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    this.color = "gray"
    this.drawAsteroid = function () {
        ctx.save()
        ctx.beginPath
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}



//Setup Keyboard Event Handlers
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if (gameOver) {

        //checking for spacebar
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //gameover screen restart
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //emties asteroids array
                asteroids = []
                //reset score
                score = 0
                gameStart()
                main()
            }
            else {
                //main screen start game
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
        }
    }

}
function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        }
    }

}
//var degree = 0
//constructor function
function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)
        if (this.up || this.left || this.right) {
            ctx.save()
            //Changes the drawing values to animate the flame
            if (this.flamelength == 30) {
                this.flamelength = 20
                ctx.fillStyle = "cyan"
            } else {
                this.flamelength = 30
                ctx.fillStyle = "magenta"
            }
            ctx.beginPath()

            ctx.moveTo(0, this.flamelength)
            ctx.lineTo(5, 5)
            ctx.lineTo(-5, 5)
            ctx.lineTo(0, this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }
        //ctx.rotate(degree);
        ctx.fillStyle = "crimson"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    this.move = function () {
        this.x += this.vx
        this.y += this.vy

        //bottom border
        if (this.y > canvas.height - this.h / 2) {
            this.y = canvas.height - this.h / 2
            this.vy = 0
        }
        //border of screen
        if (this.y < this.h / 2) {
            this.y = this.h / 2
            this.vy = 0
        }
        //right border
        if (this.x > canvas.width - this.w / 2) {
            this.x = canvas.width - this.w / 2
            this.vx = 0
        }
        //left border
        if (this.x < this.w / 2) {
            this.x = this.w / 2
            this.vx = 0
        }
    }

}

//Main Screen
gameStates[0] = function () {
    ctx.save()
    ctx.font = "70px Arial"
    ctx.fillStyle = "red"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "25px Arial"
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2 + 30)
    ctx.restore()

}
//Game Screen
gameStates[1] = function () {
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //Vertical Movement
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }
    //Horizontal Movement
    if (ship.left) {
        ship.vx = -4
    } else if (ship.right) {
        ship.vx = 4
    } else {
        ship.vx = 0
    }

    //Loops through all asteroids and can check their position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
            return
        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height
        }

        asteroids[i].y += asteroids[i].vy
        asteroids[i].drawAsteroid()
    }

    if(!gameOver){
        ship.move()
    ship.drawShip()}

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
}
//GameOver
gameStates[2] = function (){
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save()
    ctx.font = "40px Arial"
    ctx.fillStyle = "red"
    ctx.textAlign = "center"
    ctx.fillText("Get Gud, high score: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
    ctx.fillText("New high score: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
    ctx.fillText(":D", canvas.width / 2, canvas.height / 2 - 60)
    ctx.font = "25px Arial"
    ctx.fillText("Press Space to Restart", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()
    }else{
        //keep same score new high score
        ctx.font = "70px Arial"
    ctx.fillStyle = "red"
    ctx.textAlign = "center"
    ctx.fillText("Get Gud, high score: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
    ctx.fillText("New high score: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
    ctx.fillText(":D", canvas.width / 2, canvas.height / 2 - 60)
    ctx.font = "25px Arial"
    ctx.fillText("Press Space to Restart", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()
    }

    
    
}

function main() {
    //clear canvas
    //shipY-=2
    //degree+=0.1;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    gameStates[currentState]()


    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }


}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

//Timer for score
function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 5 
            console.log(numAsteroids)
        }

        setTimeout(scoreTimer, 1000)
    }
}