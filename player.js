const musicFolder = "music/";
const playlist = [
  "1.mp3",
  "2.mp3",
  "3.mp3"
];

let currentTrack = 0;
const player = document.getElementById("player");

// Define o volume inicial (0.0 a 1.0)
player.volume = 0.04;

function playNext() {
  currentTrack = (currentTrack + 1) % playlist.length;
  player.src = musicFolder + playlist[currentTrack];
  player.play();
}

player.src = musicFolder + playlist[currentTrack];
player.play();

player.addEventListener("ended", playNext);
