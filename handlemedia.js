const videos = document.querySelectorAll('video');

function pauseOtherVideos({ target }) {
    for (const video of videos) {
        if (video !== target) {
            video.pause();
        }
    }
}

for (const video of videos) {
    video.addEventListener('play', pauseOtherVideos);
}