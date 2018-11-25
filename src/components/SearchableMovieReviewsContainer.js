import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        query: ''
    }

    async GetReviewsFromSearch() {
        const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=` + `${this.state.query}`
        const response = await fetch(URL)
        const results = await response.json()
        const reviews = results.results
        this.setState( { reviews })
    }

    handleChange = event => {
        this.setState({ query: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.GetReviewsFromSearch()
    }

    render() {
        const { reviews } = this.state
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type='text' placeholder='enter a movie title' onChange={event => this.handleChange(event)}/>
                    <input type='submit' name='submit'/>
                </form>
                <MovieReviews reviews={reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer
