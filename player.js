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

  // Função para tocar a próxima música
  function playNext() {
    currentTrack = (currentTrack + 1) % playlist.length;
    player.src = musicFolder + playlist[currentTrack];
    player.play().catch(function(error) {
      console.log("Erro ao tentar reproduzir o áudio: ", error);
    });
  }

  // Função para iniciar a reprodução ao clicar no botão
  function startPlayback() {
    player.src = musicFolder + playlist[currentTrack];
    player.play().catch(function(error) {
      console.log("Erro ao tentar reproduzir o áudio: ", error);
    });

    // Registrar o evento 'ended' após iniciar o áudio
    player.addEventListener("ended", playNext);
  }

  // Quando o usuário clicar no botão, o áudio começará a tocar
  document.getElementById('playButton').addEventListener('click', startPlayback);
