import dispatcher from '../appDispatcher'
import * as actionTypes from '../actions/actionTypes'


export function ImageReceived(image) {
    dispatcher.dispatch({
        actionType: actionTypes.UPLOAD_IMAGE,
        image
    })

}