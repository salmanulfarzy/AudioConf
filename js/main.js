'use strict';

const constraints = {
    video: false,
    audio: true
};

const localAudio = document.querySelector('audio');

function getLocalStream(mediaStream) {
  var audioTracks = mediaStream.getAudioTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using audio device: ' + audioTracks[0].label);
  localAudio.srcObject = mediaStream;
}

function handleLocalStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
then(getLocalStream).catch(handleLocalStreamError);
