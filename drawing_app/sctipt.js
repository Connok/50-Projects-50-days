const canvas = document.getElementById('canvas')
const increaseBTN = document.getElementById('increase')
const decreaseBTN = document.getElementById('decrease')
const clearEl = document.getElementById('clear')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const ctx = canvas.getContext('2d')


let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

//canvas.addEventListener('mousedown', (e) => {
//    isPressed = true
//    x = e.offsetX
//    y = e.offsetY
//})
//document.addEventListener('mouseup', (e) => {
//    isPressed = false
//    x = undefined
//    y = undefined


//})
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        y = y2
        x = x2
    }
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
function updateSizeOnScreen() {
    sizeEl.innerText = size
}
increaseBTN.addEventListener('click', () => {
    size += 5
    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})
decreaseBTN.addEventListener('click', () => {
    size -= 5
    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})
colorEl.addEventListener('change', (e) => color = e.target.value)

//clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.with, canvas.height))
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

