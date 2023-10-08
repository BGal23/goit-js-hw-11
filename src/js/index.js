import {getPhotos} from "./api.js"

const searchBtn = document.querySelector(".btn-search");
const moreBtn = document.querySelector(".btn-more")
const photoBox = document.querySelector(".gallery");
let pageNumber = 1
let photoArray = []

const createGallery = (event) => {
    event.preventDefault()
    const input = document.querySelector("input").value;

    if (photoArray.length > 0) {
        pageNumber++
    }
    getPhotos(input, pageNumber)
    .then (data => {
        data.map(element => { 
            let newPhoto = `
            <div class="photo-card">
                <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy"/>
                <div class="info">
                    <p class="info-item">
                    <b>Likes </b>${element.likes}
                    </p>
                    <p class="info-item">
                    <b>Views </b>${element.views}
                    </p>
                    <p class="info-item">
                    <b>Comments </b>${element.comments}
                    </p>
                    <p class="info-item">
                    <b>Downloads </b>${element.downloads}
                    </p>
                </div>
            </div>`
            photoArray.push(newPhoto)
        })
        photoBox.innerHTML = photoArray.join("")
        })
        .catch (error => {
            console.log(error)
        })
}

searchBtn.addEventListener("click", createGallery)
moreBtn.addEventListener("click", createGallery)