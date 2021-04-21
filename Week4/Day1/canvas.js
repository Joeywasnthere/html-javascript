//Defines variable to access canvas properties by ID
var canvas = document.getElementById('canvas')
//Define the drawing context of the canvas Element
var ctx = canvas.getContext('2d')

//Draw rectangle

ctx.fillStyle = "#0000ff"
ctx.strokeStyle = "green"
ctx.lineWidth = "10"

ctx.strokeRect(30, 30, 100, 100);
ctx.fillRect(30, 30, 100, 100);

//draw line
ctx.moveTo(0,0)
ctx.lineTo(800,600)
ctx.stroke()

ctx.moveTo(800,0)
ctx.lineTo(0,600)
ctx.stroke()

//draw circle
// ctx.arc(x,y,radius, startAngle, endAngle, isCounterClockwise)
ctx.beginPath()
ctx.arc(400, 300, 50, 0, (3 * Math.PI)/2, false)
ctx.lineTo(450, 250)
ctx.closePath()
ctx.fill()