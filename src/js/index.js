import {getPhotos} from "./api.js"

const searchBtn = document.querySelector("button");
const photoBox = document.querySelector(".gallery")

const createGallery = (event) => {
    event.preventDefault()
    const input = document.querySelector("input").value;

    getPhotos(input)
    .then (data => {
        let photoArray = []
        data.map(element => { 
            let newPhoto = `
            <div class="photo-card">
                <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
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