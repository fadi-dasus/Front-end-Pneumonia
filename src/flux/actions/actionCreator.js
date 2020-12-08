import dispatcher from '../appDispatcher'
import * as actionTypes from '../actions/actionTypes'


//action creator 
export function ImageReceived(image) {
    dispatcher.dispatch({
        actionType: actionTypes.IMAGE_RECEIVED,
        image
    })
}