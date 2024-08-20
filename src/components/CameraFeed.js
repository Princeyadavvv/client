import React, { useEffect, useRef } from 'react';

const CameraFeed = () => {
    const videoRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
            })
            .catch(err => console.error('Error accessing media devices:', err));
    }, []);

    return <video ref={videoRef} autoPlay />;
};

export default CameraFeed;
