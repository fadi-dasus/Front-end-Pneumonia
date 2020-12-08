import { toast } from "react-toastify";
import { beginApiCall } from '../flux/actions/apiStatusActions'


export function saveImage(image, token) {
    beginApiCall()
    return fetch('/postImage', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            physicalPath: image.name,
            status: image.initialDiagnosis,
            issuer: image.issuer
        })
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        toast.success('the image is sent to the prediction system wait for the result, your image id is : ' + data.id)
    })
        .catch(e => toast.error('error while saving the image'))
}

export function uploadImage(data, token) {
    // beginApiCall()
    return fetch('/upload', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: data
    })


}

export function rigisterQueueListener(input, token) {
    return fetch('/rigisterQueue', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            nickname: input

        })
    })
}
