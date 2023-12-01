let videoBtns = document.querySelectorAll('.js-video-btn'), 
    videos = document.querySelectorAll('.js-video'),
    playTexts = document.querySelectorAll('.js-play');

videoBtns.forEach((btn, index) => {
    let video = videos[index];
    let playText = playTexts[index];

    function playVideo() {
        video.play();
        btn.classList.add('hide');
        playText.classList.add('hide');
    }

    btn.onclick = playVideo;
    playText.onclick = playVideo;

    video.onclick = function () {
        if (this.paused) {
            this.play();
            btn.classList.add('hide');
            playText.classList.add('hide');
        } else {
            this.pause();
            btn.classList.remove('hide');
            playText.classList.remove('hide');
        }
    }

    video.addEventListener('ended', function() {
        btn.classList.remove('hide');
        playText.classList.remove('hide');
    }, false);
});