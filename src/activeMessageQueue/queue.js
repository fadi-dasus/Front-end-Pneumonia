// var stompit = require('stompit');

// export function msgq() {


//     // var connectOptions = {
//     //     'host': 'localhost',
//     //     'port': 61613,
//     //     'connectHeaders': {
//     //         'heart-beat': '1000,2000',
//     //         'host': 'localhost',
//     //         'login': 'admin',
//     //         'passcode': 'admin'
//     //     }
//     // };
//     stompit.connect({
//         host: 'localhost',
//         port: 61613,
//         connectHeaders: {
//             host: '/',
//             login: 'admin',
//             passcode: 'admin'
//         }
//     }, function () {
//         // ready to send and subscribe to messages
//     });

//     // stompit.connect(connectOptions, function (error, client) {


//     //     if (error) {
//     //         console.log('connect error ' + error.message);
//     //         return;
//     //     }

//     //     const sendHeaders = {
//     //         'destination': '/queue/img'
//     //     };

//     //     const frame = client.send(sendHeaders);
//     //     frame.write('hello');
//     //     frame.end();

//     //     const subscribeHeaders = {
//     //         'destination': '/queue/img',
//     //         'ack': 'client-individual'
//     //     };

//     //     client.subscribe(subscribeHeaders, function (error, message) {

//     //         if (error) {
//     //             console.log('subscribe error ' + error.message);
//     //             return;
//     //         }

//     //         message.readString('utf-8', function (error, body) {

//     //             if (error) {
//     //                 console.log('read message error ' + error.message);
//     //                 return;
//     //             }

//     //             console.log('received message: ' + body);

//     //             client.ack(message);

//     //             client.disconnect();
//     //         });
//     //     });
//     // });

// }


export function msgq() {
    let ws = new WebSocket('ws://localhost:61614', 'stomp')

    ws.onopen = () => {
        console.log('opening...')
        ws.send('CONNECT\n\n\0')
        ws.send('subscribe\ndestination:img')
    }

    ws.onclose = () => console.log('closing...')
    ws.onmessage = (e) => {
        if (e.data.startsWith('MESSAGE')) {
            console.log(e.data)
        }

    }
}