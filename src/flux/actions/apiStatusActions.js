import * as types from "./actionTypes";
import dispatcher from '../appDispatcher'

export function beginApiCall() {
  dispatcher.dispatch({
    actionType: types.BEGIN_API_CALL,
  })
}




export function messageReceivedSuccess() {
  dispatcher.dispatch({
    actionType: types.MESSAGE_RECEIVED,
  })
}