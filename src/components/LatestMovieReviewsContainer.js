import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    async getMovieReviews() {
        const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;
        const response = await fetch(URL)
        const results = await response.json()
        const reviews = results.results
        this.setState({ reviews })
    }

    componentDidMount() {
        this.getMovieReviews()
    }

    render() {
        const { reviews } = this.state
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={reviews} />
            </div>
        )
    }

}

export default LatestMovieReviewsContainer
