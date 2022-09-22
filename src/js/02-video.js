import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
import { save, load } from './utilities.js';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeSaver, 1000));

function timeSaver(data) {
  console.log(data.seconds);
  save('videoplayer-current-time', data.seconds);
}

player.setCurrentTime(load('videoplayer-current-time'));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
