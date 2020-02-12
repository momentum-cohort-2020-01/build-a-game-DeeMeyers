const canvas = document.querySelector('#canvas')
const context =  canvas.getContext('2d')

context.font = '40pt helvetica'
context.fillText("howdy!", 100, 100)

context.beginPath()
context.moveTo(15,15)
context.lineTo(35, 45)
context.lineWidth = 3
context.stroke()