let audio = document.getElementById("audio"); // Take the audio element
let btnPlayPause = document.querySelector(".play-pause"); // Take the play button
let btnPrev = document.querySelector(".prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next"); // Take the button to switch the next track
let nowPlaying = document.querySelector(".now-playing");
let imgDetails = document.getElementsByClassName("img-details");


musicPath = "assets/music/"
// Array with song titles
let playlist = []
const files = ['raavi__tyson_sidhu.mp3', 'paani__feroz_khan.mp3', 'why_arjan__arjan_dhillon.mp3', 'channo__diljit_dosanjh.mp3', 'rabb_khair_kare__prabh_gill.mp3', 'raah__amrinder_gill.mp3', 'baajre_da_sitta__tania_and_noor_chahal.mp3']


for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith(".mp3")) {
        file = files[i].substring(0, files[i].length-4)
        artist = file.split("__")[1].replaceAll('_', ' ')
        song = file.split("__")[0].replaceAll('_', ' ')
        playlist.push({file: files[i], song, artist});
    }
}

let backgrounds = [
    {
        img: 'assets/img/bg1.png',
        artist: '@farheenay'
    },

    {
        img: 'assets/img/bg2.png',
        artist: 'ai'
    },

    {
        img: 'assets/img/bg3.png',
        artist: 'deviantart'
    },

]
 
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
    imageIdx = Math.floor(Math.random() * 3) + 1;
    document.body.style.backgroundImage = "url('./assets/img/bg" + imageIdx + ".png')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundSize = '100vw 100vh'

}

function loadTrack(play=true){
    let track = playlist[trackId].file;
    nowPlaying.textContent = playlist[trackId].song + ' ~ ' + playlist[trackId].artist
    audio.src = musicPath  + track

    audio.load();
    if(play){
    audio.play();
    paused = false
    imgDetails.innerText = '@farheenay'
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