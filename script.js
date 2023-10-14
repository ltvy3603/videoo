document.addEventListener('DOMContentLoaded', function() {
    const stopVideo = document.getElementById('stopVideo');
    const videoPlayer = document.getElementById('videoPlayer');
    const clickStop = document.getElementById('clickStop');

    stopVideo.addEventListener('click', function() {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });
});