
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

let startVideo = 0;

const player = new Player(iframe);


const updateStart = throttle(function(data){
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
}, 1000)

player.on('timeupdate', (data) => updateStart(data));

if(localStorage.getItem('videoplayer-current-time')){
    const obj = JSON.parse(localStorage.getItem('videoplayer-current-time'))
    startVideo = obj.seconds;
}

player.setCurrentTime(startVideo).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
