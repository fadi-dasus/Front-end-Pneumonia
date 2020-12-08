import { ImageReceived } from '../flux/actions/actionCreator'
import { messageReceivedSuccess } from '../flux/actions/apiStatusActions'

export function subscribeToTheQueue(email) {
    let ws = new WebSocket('ws://localhost:61614', 'stomp')
    ws.onopen = () => {
        ws.send('CONNECT\n\n\0')
        ws.send('SUBSCRIBE\ndestination:' + email + '\n\nack:auto\n\n\0')
    }
    listenToUpcomingMessages(ws)
}
function listenToUpcomingMessages(ws) {

    ws.onmessage = (e) => {
        if (e.data.startsWith('MESSAGE')) {
            // eslint-disable-next-line no-new-func
            const data = new Function("", "return " + e.data.match(/{[^}]*}/)[0])()
            ImageReceived(data)
            messageReceivedSuccess()
        }
    }
}
