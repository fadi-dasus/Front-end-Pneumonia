import { handleError, handleResponse } from './httpHelper.js'

export const urlSubmit = 'http://localhost:8081/bachelor/image/saubmitImage'

const imageUploadURL = 'http://localhost:8080/uploadFile'

export function saveImage(image) {
    fetch(urlSubmit, {
        method: "POST",
        headers: { "content-type": "application/json" },
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


