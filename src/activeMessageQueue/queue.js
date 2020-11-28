export function connect() {
    const ws = new WebSocket('ws://localhost:61614', 'stomp')

    ws.onopen = () => {
        console.log("connected websocket");
        ws.send('CONNECT\n\n\0')
    }
    ws.onmessage = (evt) => {
        ws.send('SEND\ndestination:testqueue\n\n sending mesaage from here \0' + evt.data)
    }
    ws.onclose = () => {
        ws.send('DISCONNECT\n\n\0')
    }
    ws.onerror = () => {
        ws.send('error in connection')
    }

}
'fdytrteretret'