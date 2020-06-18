import axios from 'axios';

const lyricEndpoint = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=`

export async function musixMatchLyrics(artist, trackName) {
    trackName = trackName.trim().split(" ")
    artist = artist.trim().split(" ")
    let track = []
    let artistSearch = [];

    for (let i = 0; i < trackName.length - 1; i++) {
        track.push(trackName[i] + "%20")
    }
    track.push(trackName[trackName.length - 1])
    track = track.join("")

    for (let i = 0; i < artist.length - 1; i++) {
        artistSearch.push(artist[i] + "%20")
    }
    artistSearch.push(artist[artist.length - 1])
    artistSearch = artistSearch.join("")


    let response = await axios.get(`${lyricEndpoint}${track}&q_artist=${artistSearch}&f_has_lyrics&apikey=${process.env.REACT_APP_MM_KEY}`)
    console.log('response', response.data)
    const { lyrics_body } = response.data.message.body.lyrics
    return lyrics_body;
};


export async function musixMatchAlbumArt(artist, trackName) {

};

