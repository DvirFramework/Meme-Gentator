'use strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['politic', 'funny'] },
              { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
              { id: 3, url: 'img/3.jpg', keywords: ['cute', 'dog'] },
              { id: 4, url: 'img/4.jpg', keywords: ['cute', 'cat'] },
              { id: 5, url: 'img/5.jpg', keywords: ['cute', 'baby'] },
              { id: 6, url: 'img/6.jpg', keywords: ['funny', 'celeb'] },
              { id: 7, url: 'img/7.jpg', keywords: ['cute', 'baby'] },
              { id: 8, url: 'img/8.jpg', keywords: ['funny', 'clone'] },
              { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
              { id: 10, url: 'img/10.jpg', keywords: ['politic', 'funny'] },
              { id: 11, url: 'img/11.jpg', keywords: ['cute', 'cat'] },
              { id: 12, url: 'img/12.jpg', keywords: ['cute', 'baby'] },
              { id: 13, url: 'img/13.jpg', keywords: ['funny', 'celeb'] },
              { id: 14, url: 'img/14.jpg', keywords: ['cute', 'baby'] },
              { id: 15, url: 'img/15.jpg', keywords: ['funny', 'clone'] },
              { id: 16, url: 'img/16.jpg', keywords: ['funny', 'baby'] },
              { id: 17, url: 'img/17.jpg', keywords: ['politic', 'funny'] },
              { id: 18, url: 'img/18.jpg', keywords: ['politic', 'funny'] }
]


function renderGallery() {
    const gallerySection = document.querySelector('.image-gallery')
    gallerySection.innerHTML = ''

    gGalleryImgs.forEach(img => {
        const imgElement = document.createElement('img')
        imgElement.src = img.url
        imgElement.alt = `Image ${img.id}`
        imgElement.addEventListener('click', function () {
            onImgSelect(img.id)
        })

        gallerySection.appendChild(imgElement)
    })
}


function onImgSelect(selectedImgId) {
    setImg(selectedImgId)
    renderMeme(selectedImgId)
}

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.image-gallery img')

    galleryImages.forEach(imgElement => {
        imgElement.addEventListener('click', function () {
            const selectedImgId = parseInt(imgElement.getAttribute('data-img-id'))
            onImgSelect(selectedImgId)
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const galleryLink = document.getElementById('gallery-link')
    const imageGallery = document.querySelector('.image-gallery')

    galleryLink.addEventListener('click', function () {
        imageGallery.classList.toggle('hidden')
    })
})

function hideGallery() {
    const imageGallery = document.querySelector('.image-gallery');
    imageGallery.classList.toggle('hidden')
}