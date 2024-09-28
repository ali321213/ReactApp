import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
    return (
        <div className="tweet-list">
            {tweets.map((tweet, index) => (
                <Tweet key={index} name={name} message={tweet} />
            ))}
        </div>
    );
};

export default TweetList;
