module.exports = {
  getAllAlbums: async (req, res) => {
    const {album_name} = req.query
    const db = req.app.get('db')

    const albums = await db.get_all_albums([album_name])
    res.status(200).send(albums)
  },

    getAllArtists: async (req, res) => {
    const {artist_name} = req.query
    const db = req.app.get('db')

    const artists = await db.get_all_artists([artist_name])
    res.status(200).send(artists)
  },

    getAllSongs: async (req, res) => {
    const {song_name} = req.query
    const db = req.app.get('db')

    const songs = await db.get_all_songs([song_name])
    res.status(200).send(songs)
  },

  getSongsByGenre : async (req, res) => {
    const {genre_name} = req.query
    const db = req.app.get('db')

    const genre = await db.songs_by_genre([genre_name])
    res.status(200).send(genre)
  }
}