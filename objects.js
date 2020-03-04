var playlist = {
  Pink:"Just Like Fire"
  Slowdive: "Alison"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName]="songTitle";
};

function removeFromPlaylist (playlist, Slowdive) {
  delete playlist.Slowdive;
  return playlist;
}
