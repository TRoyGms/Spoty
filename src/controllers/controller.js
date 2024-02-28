import { loadSong, getNextSong, getPrevSong } from '../models/model.js';
import { updateUI, getAudioPlayer } from '../view/view.js';

const audioPlayer = getAudioPlayer();

const prevButton = document.getElementById('prevButton');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');
const volumeSlider = document.getElementById('volumeSlider');

prevButton.addEventListener('click', function() {
    getPrevSong();
    loadSong();
    updateUI();
    audioPlayer.play();
});

playPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

nextButton.addEventListener('click', function() {
    getNextSong();
    loadSong();
    updateUI();
    audioPlayer.play();
});

volumeSlider.addEventListener('input', function() {
    audioPlayer.volume = parseFloat(volumeSlider.value);
});

updateUI();
