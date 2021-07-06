import React from 'react';
import crypto from 'crypto';

function Home () {

  const generateCodeVerifier = () => {
    let text = '';
    let length = Math.random() * 85 + 43
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.-~';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  const getChallenge = (verifier) => {

  }

  const buttonClicked = () => {
    let verifier = generateCodeVerifier();
    let challenge = getChallenge(verifier);

    console.log("clicked")
  }

  return (
    <div>
      <h1>My App</h1>
      <p>This is an incredible and detailed description of my app... Any suggestions for names or logos if you're reading this?</p>
      <button onClick={buttonClicked} className="btn btn-lg btn-primary">Create Playlist</button>
    </div>
  );
}

export default Home;