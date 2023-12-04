'use strict'

function renderGallery() {
    const gallerySection = document.querySelector('.image-gallery')
    gallerySection.innerHTML = ''

    gImgs.forEach(img => {
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
    hideGallery()
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