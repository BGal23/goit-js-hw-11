import {getPhotos} from "./api.js"

const searchBtn = document.querySelector(".btn-search");
const moreBtn = document.querySelector(".btn-more")
const photoBox = document.querySelector(".gallery");
let input = document.querySelector("input");
let pageNumber = 0
let photoArray = []
let checkInput;

const inputOn = () => {
    if (input.value !== "") {
        searchBtn.removeAttribute("disabled", "")
    }
    else {
        searchBtn.setAttribute("disabled", "")
    }
}

const createGallery = (event) => {
    event.preventDefault()
    searchBtn.setAttribute("disabled", "")
    input = document.querySelector("input");
    
    if (checkInput !== input.value) {
        photoArray = []
        pageNumber = 0
    }
    pageNumber++

    getPhotos(input.value, pageNumber)
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
        checkInput = input.value
        })
        .catch (error => {
            console.log(error)
        })
        
    moreBtn.style.display = "block"
}

input.addEventListener("input", inputOn)
searchBtn.addEventListener("click", createGallery)
moreBtn.addEventListener("click", createGallery)