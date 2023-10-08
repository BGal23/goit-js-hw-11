import {getPhotos} from "./api.js"

const input = document.querySelector("input").value 
const searchBtn = document.querySelector("button")

if (input) {
getPhotos(input)
    .then (data => {
        
        console.log(data, input === true)
    })
    .catch (error => {
        console.log(error)
    })
}

const createGallery = (event) => {
    event.preventDefault()
    console.log(event)
}

searchBtn.addEventListener("click", createGallery)