import {getPhotos} from "./api.js"

const searchBtn = document.querySelector("button");

const createGallery = (event) => {
    event.preventDefault()
    const input = document.querySelector("input").value;

    getPhotos(input)
    .then (data => {
        console.log(data)
            return data
        })
        .catch (error => {
            console.log(error)
        })
    
}

searchBtn.addEventListener("click", createGallery)