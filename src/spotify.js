// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/# -this is for the documentation

export const authEndpoint = "https://accounts.spotify.com/authorize";
    //this Endpoint will direct us to Spotify Login Page on clicking the Login Button

const redirectUri= "http://localhost:3000";
    //after logining in, it redirects us to our localhost

const clientId="8b626eda5bc94b35b5a3826f3f05cd85";
    //just setting up these variables

    //SCOPES
    const scopes=[
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modily-playback-state",
    ];

    export const getTokenFromUrl=()=>{
        //this goes to the window->then to the Url->then hash i.e tries to get the token
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item)=>{//assume URI=dlskfjsdl&skdlfjldsk&fdlkfjsdf
                //it gets split at every &
                //consider once such snippet- #accessToken=mysupersecretkey&name=sujay&vivek
                    //parts is an array- that contains items after splliting by the "="

                let parts= item.split('=');
                initial[parts[0]]=decodeURIComponent(parts[1]);//dont know what this does tho

                return initial;
            },{});
    }

    //we are using back-ticks `` here
    //this method is called STRING INTERPOLATION;
    //scopes.join(%20) means- it joins all the strings that we have written within the scopes and removes the comma and puts a spacebar- ASCII Value of Space bar is 20- hence we write %20
    //we are basically trying to create a URL to direct the user..it includes vairables like clientId, authEndponit,redirectUri etc
    //response_type- it returns a string or a value and gets stored inside of 'token'- it basically give s a string to prove that you are who you are..its is like a pass entry ticket.
    export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;



    
