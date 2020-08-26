import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

    
    class LatestMovieReviewsContainer extends Component {
       constructor(){
           super()

           this.state = { 
                reviews: []
           }
       }
       render (){
        const movieReviews = this.state.reviews.map(review => <MovieReviews review={review} />)
           return <div className="latest-movie-reviews">
                <h2>The Latest Review:</h2>
                {movieReviews}
           </div>
       }

       componetDidMount(){
           fetch(URL)
           .then(res => res.json())
           .then(data => this.setState({ reviews: data.results }))
       }
    }

    export default LatestMovieReviewsContainer;





// Code LatestMovieReviewsContainer Here
// will fetch a list of the most recent reviews and display them
// class components
// class latest-movie-reviews.
// https://api.nytimes.com/svc/movies/v2/reviews/all.json
