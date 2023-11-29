var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['politic', 'funny'] },
              { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
              { id: 3, url: 'img/3.jpg', keywords: ['cute', 'dog'] },
              { id: 4, url: 'img/4.jpg', keywords: ['cute', 'cat'] },
              { id: 5, url: 'img/5.jpg', keywords: ['cute', 'baby'] }
]
var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel'
            ,
            size: 25,
            color: 'white'
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