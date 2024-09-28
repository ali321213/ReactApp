import React from "react";

const Tweet = (props) => {
    // const tweetDate="24/06/2024";
    return (
        <div className="tweet my-5">
            <h2>{props.name}</h2>
            <h3>{props.message}</h3>
            <button className="btn btn-danger mx-4">Delete</button>
            <button className="btn btn-info">Like</button>
        </div>

        
    );
};
export default Tweet;