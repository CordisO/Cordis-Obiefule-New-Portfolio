/* --- MUSIC PLAYER LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    console.log("🎵 Music Player Loading...");

    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause');
    const playIcon = document.getElementById('play-btn');
    const pauseIcon = document.getElementById('pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressContainer = document.getElementById('progress-bar');
    const progressFill = document.querySelector('.progress-fill');
    const timeCurrent = document.querySelector('.time-current');
    const timeTotal = document.querySelector('.time-total');
    
    // Song Info Elements
    const trackTitle = document.querySelector('.track-title');
    const trackArtist = document.querySelector('.track-artist');
    const visualizer = document.querySelector('.playing-anim');

    // Playlist Data
    // Ensure these paths are correct in your folder structure!
    const playlist = [
        { 
            title: 'Eyes Wide', 
            artist: 'Alfie Jukes',
            src: 'assets/audio/Alfie-Jukes-Eyes-Wide.mp3' 
        },
        { 
            title: 'Tote Bag', 
            artist: 'Alfie Jukes',
            src: 'assets/audio/Alfie-Jukes-Tote-Bag.mp3' 
        },
        { 
            title: 'Golden Brown', 
            artist: 'The Stranglers',
            src: 'assets/audio/Golden-Brown-The-Stranglers.mp3' 
        }
    ];

    let songIndex = 0;

    // Helper: Format seconds into MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Initialize Player
    function loadSong(song) {
        trackTitle.innerText = song.title;
        trackArtist.innerText = song.artist;
        audio.src = song.src;
        // Reset UI
        progressFill.style.width = '0%';
        timeCurrent.innerText = "0:00";
        
        // Wait for metadata to load to show duration
        audio.addEventListener('loadedmetadata', () => {
            timeTotal.innerText = formatTime(audio.duration);
        }, { once: true });
    }

    // Play Song
    function playSong() {
        visualizer.classList.add('active');
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        
        audio.play().catch(error => {
            console.error("Autoplay prevented or file not found:", error);
        });
    }

    // Pause Song
    function pauseSong() {
        visualizer.classList.remove('active');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        audio.pause();
    }

    // Previous Song
    function prevSong() {
        songIndex--;
        if (songIndex < 0) {
            songIndex = playlist.length - 1;
        }
        loadSong(playlist[songIndex]);
        playSong();
    }

    // Next Song
    function nextSong() {
        songIndex++;
        if (songIndex > playlist.length - 1) {
            songIndex = 0;
        }
        loadSong(playlist[songIndex]);
        playSong();
    }

    // Update Progress Bar & Time
    function updateProgress() {
        const { duration, currentTime } = audio;
        
        if (isNaN(duration)) return;

        const progressPercent = (currentTime / duration) * 100;
        progressFill.style.width = `${progressPercent}%`;

        timeCurrent.innerText = formatTime(currentTime);
    }

    // Set Progress on Click
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    // --- EVENT LISTENERS ---
    
    // Play/Pause Click
    playPauseBtn.addEventListener('click', () => {
        const isPlaying = visualizer.classList.contains('active');
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audio.addEventListener('timeupdate', updateProgress);
    
    // Auto-play next song when current one ends
    audio.addEventListener('ended', nextSong);
    
    // Click on progress bar to seek
    progressContainer.addEventListener('click', setProgress);

    // Load initial song (don't play yet)
    loadSong(playlist[songIndex]);
});