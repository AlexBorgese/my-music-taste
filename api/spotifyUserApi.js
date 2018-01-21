var client_id = '8d9e22e62bd741f3ae57d28b7a9dd5c5'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
import SpotifyAuth from 'react-native-spotify-auth';


var scopes = 'user-read-private user-read-email'

export default authorise = () => {
    // const url = `https://accounts.spotify.com/authorize?client_id=${client_id}` +
    //             `&response_type=code` +
    //             `&scope=${scopes}` +
    //             `&redirect_uri=my-music-taste://spotify/callback`;

    // fetch(url, { method: 'GET' }).then((res) => res);

let auth = new SpotifyAuth('8d9e22e62bd741f3ae57d28b7a9dd5c5', 'my-music-taste://spotify/callback');
auth.startLogin()
  .then(
    function(data) {
      console.log(data.token);
    },
    function(error){
      console.warn(error);
    }
  );
}
