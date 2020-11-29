
export function msgq() {
    let ws = new WebSocket('ws://localhost:61614', 'stomp')

    ws.onopen = () => {
        console.log('opening...')
        ws.send('CONNECT\n\n\0')
        ws.send('subscribe\ndestination:img')
    }

    ws.onclose = () => console.log('closing...')
    ws.onmessage = (e) => {
        console.log(e.data)

        if (e.data.startsWith('MESSAGE')) {
            console.log(e.data)
        }
    }
}