import { toast } from "react-toastify";


export function msgq() {
    let ws = new WebSocket('ws://localhost:61614', 'stomp')

    ws.onopen = () => {
        ws.send('CONNECT\n\n\0')

        ws.send('SUBSCRIBE\ndestination:img\n\nack:auto\n\n\0')
    }

    ws.onmessage = (e) => {
        if (e.data.startsWith(''))
            console.log(e.data)
    }
}


export function subscribeToTheQueue(email) {
    let ws = new WebSocket('ws://localhost:61614', 'stomp')

    console.log('SUBSCRIBE\ndestination:' + email + '\n\nack:auto\n\n\0')
    ws.onopen = () => {
        ws.send('CONNECT\n\n\0')
        ws.send('SUBSCRIBE\ndestination:' + email + '\n\nack:auto\n\n\0')
    }

    ws.onmessage = (e) => {
        if (e.data.startsWith(''))
            alert(e.data)
        console.log(e.data)
    }
}