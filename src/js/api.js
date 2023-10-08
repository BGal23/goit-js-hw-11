import axios from "axios";

const key = "39891007-90054c7bf84e45a363315c2ae"

let options = {
    image_type: "photo"
}

const getPhotos = (input) => {
    return axios
    .get(`https://pixabay.com/api/?key=${key}&q=${input}`, options)
    .then(respons => {
        return respons.data.hits
    })
}


export {getPhotos}