import React, {useEffect, useState} from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();//basically used to communicate back and forth with the real spotify


function App() {

  const [token,setToken]=useState(null);
  
  useEffect(() => {
    const hash=getTokenFromUrl();
    window.location.hash="";

    const _token=hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);//we are giving the token to spotify services

      spotify.getMe().then(user =>{
        
      })//this brings in the profile
    }
    console.log('I HAVE A TOKEN>>>',token);
  },[])

  return (
    <div className="app">
      {
        token?(
          <h1>I am logged in</h1>
        ):
        (
          <Login/>
        )
      }
      <Login/>
      <Player/>
    </div>
  );
}

export default App;
