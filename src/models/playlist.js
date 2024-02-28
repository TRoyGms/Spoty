export class Playlist {
    constructor() {
        this.songs = [];
        this.currentSongIndex = 0;
    }

    addSong(song) {
        this.songs.push(song);
    }

    getNextSongIndex() {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        return this.currentSongIndex;
    }

    getPrevSongIndex() {
        this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
        return this.currentSongIndex;
    }

    getCurrentSong() {
        return this.songs[this.currentSongIndex];
    }
}
