
export function msgq() {
    let ws = new WebSocket('ws://localhost:61614', 'stomp')
 
ws.onopen = () => {
  ws.send('CONNECT\n\n\0')
 
  ws.send('SUBSCRIBE\ndestination:img\n\nack:auto\n\n\0')
 
  ws.send('DISCONNECT\n\n\0')
}
 
ws.onmessage = (e) => {
    if (e.data.startsWith(''))
    console.log(e.data)
}
}