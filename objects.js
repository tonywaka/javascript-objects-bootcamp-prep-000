var playlist = {artistName:"Song titles"}
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'
function updatePlaylist(object,artistName,songTitle) {
  object.artistName = songTitle
  return playlist
}
updatePlaylist(playlist,'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
removeFromPlaylist(playlist,'Slowdive')
