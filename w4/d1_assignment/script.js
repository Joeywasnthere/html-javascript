var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//square
ctx.beginPath()
ctx.strokeStyle = "black";
ctx.fillStyle = "yellow";
ctx.lineWidth = "5";
ctx.strokeRect(84.5, 301.5, 101, 101)
ctx.fillRect(84.5, 301.5, 101, 101)


//circle
ctx.beginPath()
ctx.arc(385.5, 441.5, 68, 55,(3 * Math.PI) / 2, false)
ctx.strokeStyle = "red"
ctx.fillStyle = "#ffff00"
ctx.stroke()
ctx.closePath()
ctx.fill()


//pentagon
ctx.beginPath()
ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"

ctx.lineWidth = "5"
ctx.moveTo(557, 309)
ctx.lineTo(668, 283)
ctx.lineTo(726, 382)
ctx.lineTo(651, 465.5)
ctx.lineTo(548, 421)
ctx.stroke()
ctx.closePath()
ctx.fill()

//line

ctx.moveTo(85, 685)
ctx.lineTo(280, 550)
ctx.strokeStyle = 'rgb(225, 0, 0)'
ctx.stroke()


//star
ctx.fillStyle = "#ffff00"
ctx.strokeStyle = 'rgb(32, 32, 32)'
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(635, 495)
ctx.lineTo(669, 553)
ctx.lineTo(735, 567)
ctx.lineTo(690, 618)
ctx.lineTo(697, 682)
ctx.lineTo(637, 655)
ctx.lineTo(575, 682)
ctx.lineTo(583, 617)
ctx.lineTo(537, 567)
ctx.lineTo(601, 553)
ctx.closePath()
ctx.fill()
ctx.stroke()
