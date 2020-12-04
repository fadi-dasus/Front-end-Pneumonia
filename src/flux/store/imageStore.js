import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import * as actionTypes from '../actions/actionTypes'


const CHANGE_EVENT = 'change'
let _images = []

class ImageStore extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    getImages() {
        return _images
    }

}
const imageStore = new ImageStore()

dispatcher.register(action => {

    switch (action.actionType) {

        case actionTypes.UPLOAD_IMAGE:
            _images.push(action.image)
            imageStore.emitChange()
            break

        default:
            break
    }
})





export default imageStore