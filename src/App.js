import './App.css';
import React, { useState } from 'react';
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  const name = "User";
  const message = "Hey, how are you doing!";
  
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  
  const [username, setUsername] = useState("New User");

  const handler = (e) => {
    setUsername('Florin Pop');
  }
  return (
    <div className="App">
      
      <CreateTweet
      textInput={textInput}
      setTextInput={setTextInput}
      tweets={tweets}
      setTweets={setTweets}
      />
      
      <Tweet name={name} message={message} />
      
      <TweetList name={name} tweets={tweets} />
      
      <h1>Hi {username}</h1>
      <button className='btn btn-info' onClick={handler}>Click</button>
    </div>
  );
}

export default App;