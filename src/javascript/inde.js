var audio = document.getElementById('myAudio');
        var lyrics = document.getElementById('lyrics');
        var lines = document.querySelectorAll('.line');
        var currentIndex = 0;
function playAudio() {
            audio.play();
            syncLyrics();
        }

function pauseAudio() {
            audio.pause();
        }


function syncLyrics() {
    var audio = document.getElementById('myAudio');
    var lyrics = document.getElementById('lyrics');
    var lines = document.querySelectorAll('.line');
    var currentIndex = 1;

    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;

        for (var i = 0; i < lines.length; i++) {
            var startTime = parseFloat(lines[i].getAttribute('data-time'));
            var nextStartTime = lines[i + 1] ? parseFloat(lines[i + 1].getAttribute('data-time')) : Infinity;

            if (currentTime >= startTime && currentTime < nextStartTime) {
                if (currentIndex !== i) {
                    lines[currentIndex].classList.remove('active');
                  
                    lines[i].classList.add('active');
                    currentIndex = i;
                    lyrics.style.top = (-currentIndex * 36) + 'px'; 
                }
                break;
            }
        }
    });
}