import React, { useState } from "react";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {

    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const resetInputHandler = (e) => {
        e.preventDefault();
        setTextInput("");
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        // Append the new tweet to the existing tweets array
        setTweets([...tweets, textInput]);
        setTextInput("");
    };

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} placeholder="Create Your Tweet" rows="5" cols="70"></textarea>
            <br />

            <h4 onClick={() => setTextInput("")}>{textInput}</h4>

            <button className="btn btn-primary mx-5" type="submit">Submit</button>

            <button onClick={resetInputHandler} className="btn btn-secondary" type="button">Reset</button>
        </form>
    );
};

export default CreateTweet;
