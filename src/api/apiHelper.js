import { handleError, handleResponse } from './httpHelper.js'


const imageUploadURL = 'http://localhost:8080/uploadFile'

export function saveImage(image, token) {
    fetch('/postImage', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            physicalPath: image.name,
            status: image.initialDiagnosis
        })
    }).then(handleResponse)
        .catch(handleError);
}



export function uploadImage(data) {
    console.log(data)
    fetch(imageUploadURL, {
        method: "POST",
        body: data
    }).then(handleResponse)
        .catch(handleError);
}


