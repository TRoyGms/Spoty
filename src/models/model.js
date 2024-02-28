import { Playlist } from '../models/playlist.js';

const playlist = new Playlist();

// Agrega canciones a la lista
playlist.addSong("Album/01.wav");
playlist.addSong("Album/02.wav");
playlist.addSong("Album/03.wav");
playlist.addSong("Album/04.wav");
playlist.addSong("Album/05.wav");
playlist.addSong("Album/06.wav");
playlist.addSong("Album/07.wav");
playlist.addSong("Album/08.wav");
playlist.addSong("Album/09.mp3");
playlist.addSong("Album/10.mp3");
playlist.addSong("Album/11.wav");

export function loadSong() {
    // La función loadSong debería cargar la canción actual
}

export function getNextSong() {
    playlist.getNextSongIndex();
    return playlist.getCurrentSong();
}

export function loadNextSong() {
    return playlist.getNextSong();
}

export function getPrevSong() {
    playlist.getPrevSongIndex();
    return playlist.getCurrentSong();
}

export function getCurrentSong() {
    return playlist.getCurrentSong();
}