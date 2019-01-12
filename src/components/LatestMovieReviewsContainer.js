import React, { Component } from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            reviews: undefined
         }
    }

    mapReviews = () => {
        // spread operator on object
        const shallowCopyReviews = {...this.state.reviews}

        return shallowCopyReviews.results.map(result => <MovieReviews result={result} />)
    }

    getData = (url) =>
        fetch(url)
            .then(resp => resp.json())


    componentDidMount() {
        this.getData(URL)
            .then(data => 
                 this.setState({ reviews: data }) )
    }


    render() { 
        return ( 
            <div className="latest-movie-reviews">

                {this.state.reviews? this.mapReviews() : <p>no reviews</p>}
            </div>
         )
    }
}
 
export default LatestMovieReviewsContainer