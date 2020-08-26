import React from 'react';
// Code MovieReviews Here

// should be stateless and functional.
// review-list
// review
// this will list a series of movie reviews on the page 

const MovieReviews = (props) => {
    return (
        <div key={props.headline} className="review">
            <h1>{props.display_title}</h1>
    <h5>{props.headline}</h5>
    <h5> {props.summary_short}</h5>
        </div>
    )
}

export default MovieReviews;

