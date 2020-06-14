import axios from 'axios';
const endpoint = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_artist="

// Lindsey%20Stirling&quorum_factor=1&apikey=adc04e92578b02928495d986953b0d30
// '
const API_KEY = process.env.REACT_APP_MUSIX_MATCH_API_KEY


export default {
    searchArtist: (firstName, lastName) => {
        const URL = `${endpoint}${firstName}%20${lastName}&quorum_factor=1&apikey=${API_KEY}`

        console.log(axios.get(URL))
    }
}