import { loadSong, getCurrentSong, loadNextSong } from '../models/model.js';

const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');
const durationDisplay = document.getElementById('durationDisplay');

loadSong();

audioPlayer.addEventListener('ended', function() {
    getNextSong();
    loadSongAndPlay();
    updateUI();
});

audioPlayer.addEventListener('timeupdate', function() {
    updateProgressBar();
});

export function updateUI() {
    audioPlayer.src = getCurrentSong();
    songTitle.textContent = getCurrentSong();
    updateProgressBar();
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function updateProgressBar() {
    const progress = document.getElementById('progressBar');
    const currentTimeDisplay = document.getElementById('currentTimeDisplay');

    // Verifica si audioPlayer.duration y audioPlayer.currentTime son números finitos antes de usarlos
    if (isFinite(audioPlayer.duration) && isFinite(audioPlayer.currentTime)) {
        const currentTimeString = formatTime(audioPlayer.currentTime);
        const durationString = formatTime(audioPlayer.duration);

        // Muestra el tiempo actual y la duración total en un formato "0:40 / 1:50"
        currentTimeDisplay.textContent = `${currentTimeString} / ${durationString}`;
        progress.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    }
}


function loadSongAndPlay() {
    audioPlayer.src = getCurrentSong();  // Configura la nueva canción
    audioPlayer.load();  // Carga la nueva canción

    // Maneja el evento 'ended' para cambiar automáticamente a la siguiente canción
    audioPlayer.addEventListener('ended', function onEnded() {
        loadNextSong();
        loadSongAndPlay();
        updateUI();
        audioPlayer.removeEventListener('ended', onEnded);
    });

    // Actualiza la duración total de la canción
    audioPlayer.addEventListener('loadedmetadata', function onLoadedMetadata() {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
        audioPlayer.removeEventListener('loadedmetadata', onLoadedMetadata);
    });

    // Muestra el título y actualiza la interfaz
    songTitle.textContent = getCurrentSong();
    updateProgressBar();
}

export function getAudioPlayer() {
    return audioPlayer;
}
