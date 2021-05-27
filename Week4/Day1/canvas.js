//Defines variable to access canvas properties by ID
var canvas = document.getElementById('canvas')
//Define the drawing context of the canvas Element
var ctx = canvas.getContext('2d')
//
var galaxy = new Image()
galaxy.src = "images/galaxy.jpg"

galaxy.onload = function () {
    ctx.drawImage(galaxy, 0, 0, 800, 600);
    //Draw rectangle
    ctx.fillStyle = "#0000ff"
    ctx.strokeStyle = "green"
    ctx.lineWidth = "10"

    ctx.strokeRect(30, 30, 100, 100);
    ctx.fillRect(30, 30, 100, 100);

    //draw line
    ctx.moveTo(0, 0)
    ctx.lineTo(800, 600)
    ctx.stroke()

    ctx.moveTo(800, 0)
    ctx.lineTo(0, 600)
    ctx.stroke()

    //draw circle
    // ctx.arc(x,y,radius, startAngle, endAngle, isCounterClockwise)
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (3 * Math.PI) / 2, false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()

    //draw shape

    ctx.fillStyle = "#55ddef"
    ctx.strokeStyle = "red"
    ctx.lineWidth = "2"
    ctx.beginPath()
    ctx.moveTo(650, 100)
    ctx.lineTo(700, 140)
    ctx.lineTo(675, 200)
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //Draw an image to canvas
    //creates the instance of the image
    var luigi = new Image()
    //links the source of the image file
    luigi.src = 'images/luigi.png'
    //callback function loads image and draws it to canvas
    luigi.onload = function () {
        ctx.drawImage(luigi, 600, 300, 40, 80)
    }

   


}





