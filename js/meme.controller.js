
const gCanvas = document.getElementById('canvas')
const gCtx = gCanvas.getContext('2d')
const textInput = document.getElementById('textInput')


const selectedImgId = 1


renderMeme(selectedImgId)


function renderMeme(selectedImgId) {
    const selectedImg = gImgs.find(img => img.id === selectedImgId)
    const img = new Image()


    img.src = selectedImg.url
    img.onload = function () {

        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)


        const memeLine = gMeme.lines[gMeme.selectedLineIdx]
        gCtx.font = `${memeLine.size}px Impact`
        gCtx.fillStyle = memeLine.color
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2

        // Center the text on the canvas
        const textX = gCanvas.width / 2 - gCtx.measureText(memeLine.txt).width / 2
        const textY = 50 // You can adjust the Y position as needed

        // Draw the text on the canvas
        gCtx.fillText(memeLine.txt, textX, textY)
        gCtx.strokeText(memeLine.txt, textX, textY)
    }
}

textInput.addEventListener('input', function () {
    const newText = textInput.value
    setLineTxt(newText)
    renderMeme(gMeme.selectedImgId)
})

