import React, { useState, useEffect, useRef } from 'react';
const constraints = {
    video: true,
    audio: false
};
const Camera = () => {
    const [track, setTrack] = useState(null);
    const cameraView = useRef(null);
    const cameraOutput = useRef(null);
    const cameraSensor = useRef(null);
    const cameraTrigger = useRef(null);
    const cameraStart = () => {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function(stream) {
                setTrack(stream.getTracks()[0]);
                cameraView.current.srcObject = stream;
            })
            .catch(function(error) {
                console.error("Oops. Something is broken.", error);
            });
    }
    const onCameraTrigger = () => {
        cameraSensor.current.width = cameraView.current.videoWidth;
        cameraSensor.current.height = cameraView.current.videoHeight;
        cameraSensor.current.getContext("2d").drawImage(cameraView.current, 0, 0);
        cameraOutput.current.src = cameraSensor.current.toDataURL("image/webp");
        cameraOutput.current.classList.add("taken");
    }
    useEffect(() => {
        cameraStart();
    }, []);
    return (
        <main id="camera">
            <canvas id="camera--sensor" ref={cameraSensor}></canvas>
            <video id="camera--view" ref={cameraView} autoPlay playsInline/>
            <img src="//:0" alt="" id="camera--output" className='output' ref={cameraOutput} />
            <button id="camera--trigger" ref={cameraTrigger} onClick={onCameraTrigger}>Take a picture</button>
        </main>
    );
}
export default Camera;