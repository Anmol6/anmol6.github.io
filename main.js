let audio = document.getElementById("audio"); // Take the audio element
let btnPlayPause = document.querySelector(".play-pause"); // Take the play button
let btnPrev = document.querySelector(".prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next"); // Take the button to switch the next track
let nowPlaying = document.querySelector(".now-playing");



musicPath = "assets/music/"
// Array with song titles
let playlist = [
    {song: 'raavi_tyson.mp3', name: 'raavi', artist: 'Tyson Sidhu'},
    {song: 'paani_feroz.mp3', name: 'paani diyan challan', artist: 'Feroz Khan'},
    {song: 'why_arjan.mp3', name: 'why arjan', artist: 'arjan'},
    {song: 'channo_diljit.mp3', name: 'channo', artist:'diljit'},
    {song: 'rabb_khair_prabh_gill.mp3', name: 'rabb khair kare', artist:'prabh gill'},
    

];
 
let trackId = 0; // Variable with track index
let paused  = true;
loadTrack(play=false)


// Function to playPause the audio
function playPause() {
    if(paused){
        audio.play()
        btnPlayPause.textContent = "Pause"
    }
    else{
        audio.pause()
        btnPlayPause.textContent = "Play"
 
    }
    paused =!paused
}


function prev(){
    if(trackId > 0){
        trackId--
    }
    else{
        trackId = playlist.length -1
    }
    loadTrack()
}

function next(){
    if(trackId < playlist.length-1){
        trackId++
    }
    else{
        trackId = 0
    }
    loadTrack()
}

function loadTrack(play=true){
    let track = playlist[trackId].song;
    nowPlaying.textContent = playlist[trackId].name + ' ~ ' + playlist[trackId].artist
    audio.src = musicPath  + track
    audio.load();
    if(play){
    audio.play();
    paused = false
    }
}

audio.addEventListener('ended',function(){
    next()
});


window.addEventListener('keydown', function (event) {
    var key = event.which || event.keyCode
    if (key === 32) { // space
      event.preventDefault();
      playPause()
    } else if (key == 37) { // left arrow
      event.preventDefault();
      audio.currentTime = audio.currentTime - 10;
    } else if (key == 39) { // right arrow
      event.preventDefault();
      audio.currentTime = audio.currentTime + 10;
    }

    else if (key == 78) { // n
        event.preventDefault();
        next();
    }

    else if (key == 80) { // p
        event.preventDefault();
        prev();
    }
  });