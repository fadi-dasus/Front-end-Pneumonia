import { toast } from 'react-toastify'
import { ImageReceived } from '../flux/actions/actionCreator'
export function subscribeToTheQueue(email) {
    toast.success('subscribed to the queue successfully')
    let ws = new WebSocket('ws://localhost:61614', 'stomp')
    ws.onopen = () => {
        ws.send('CONNECT\n\n\0')
        ws.send('SUBSCRIBE\ndestination:' + email + '\n\nack:auto\n\n\0')
    }
    extractData(ws)
}
function extractData(ws) {

    ws.onmessage = (e) => {
        if (e.data.startsWith('MESSAGE')) {
            // eslint-disable-next-line no-new-func
            const data = new Function("", "return " + e.data.match(/{[^}]*}/)[0])()
            ImageReceived(data)
        }
    }
}
