(function () {
    'use strict';

    const start = window.document.getElementById('js-start')
    const accept = window.document.getElementById('js-accept')
    const receiver = window.document.getElementById('js-receiver-video')
    const emitter = window.document.getElementById('js-emitter-video')
    const offer = window.document.getElementById('js-offer');
    const offerForm = window.document.getElementById('js-offerForm');


    const bindEvents = (connection) => {
        connection.on('signal', (data) => {
            offer.textContent = JSON.stringify(data)
        })

        connection.on('stream', (stream) => {
            receiver.srcObject = stream;
            receiver.onloadedmetadata = (data) => emitter.play();
        })

        offerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const offer = JSON.parse(document.getElementById('offerContent').value);
            connection.signal(offer)
        })
    }

    const createPear = (initiator) => {
        const constraints = {
            video: true,
            audio: true
        }
    
        const onSuccess = (stream) => {
            const connectionConfig = {
                initiator: initiator,
                stream: '' || stream,
                trickle: false
            }
            const connection = new SimplePeer(connectionConfig);
            bindEvents(connection);

            emitter.srcObject = stream;
            emitter.onloadedmetadata = (data) => emitter.play();
        }

        const onError = (error) => {
            throw new Error('Stream Error ', error)
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(onSuccess)
            .catch(onError)
    }

    start.addEventListener('click', (e) => {
        e.preventDefault();
        createPear(true)
    })
    accept.addEventListener('click', (e) => {
        e.preventDefault();
        createPear(false)
    })


})();
