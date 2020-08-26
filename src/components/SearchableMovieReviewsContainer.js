import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
//allowing the user to enter a search term and then receive a list of reviews 
// that match the search term(s)
// class components 
// class searchable-movie-reviews
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>
//akoA1wmyxuGngOS2Me7OXDCZN8M7bWpr

class SearchableMovieReviewsContainer extends Component {

    render(){
        return (
            <div className="searchable-movie-reviews">

            </div>
        )
            
        
    }
}

export default SearchableMovieReviewsContainer;