import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import * as actionTypes from '../actions/actionTypes'


const CHANGE_EVENT = 'change'
let apiCall = 0
class SpinnerStore extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
    emitChange() {
        this.emit(CHANGE_EVENT)
    }
    getState() {
        return apiCall
    }
}
const spinnerStore = new SpinnerStore()
dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.BEGIN_API_CALL:
            apiCall++
            spinnerStore.emitChange()
            break

        case actionTypes.MESSAGE_RECEIVED:
            apiCall = apiCall - 1
            spinnerStore.emitChange()
            break
        default:
            break
    }
})





export default spinnerStore