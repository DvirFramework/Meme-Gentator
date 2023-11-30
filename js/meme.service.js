'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel'
            ,
            size: 25,
            color: 'white',
            font: 'Impact', 
            align: 'center', 
            x: 50,
            y: 50,
            width: 0,
            height: 0
        },
        {
            txt: 'And create memes',
            size: 20,
            color: 'white',
            font: 'Impact', 
            align: 'center', 
            x: 50,
            y: 50,
            width: 0,
            height: 0
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function setLineTxt(newTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
}

function setImg(selectedImgId) {
    gMeme.selectedImgId = selectedImgId
}

function setTextColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = newColor
}

function setFontSize(newSize) {
    gMeme.lines[gMeme.selectedLineIdx].size = newSize
}

function changeFontFamily() {
    const fontFamily = document.getElementById('fontFamilySelect').value
    gMeme.lines[gMeme.selectedLineIdx].font = fontFamily
    renderMeme(gMeme.selectedImgId)
}

function changeFontSize() {
    const fontSize = document.getElementById('fontSizeInput').value
    gMeme.lines[gMeme.selectedLineIdx].size = parseInt(fontSize)
    renderMeme(gMeme.selectedImgId)
}

