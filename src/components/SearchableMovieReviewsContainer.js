import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Search from './Search'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`


class SearcableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ``
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(`${URL}${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(results => {
                this.setState({ reviews: results.results })
                console.log(results.results);
                return results.results;
            })
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    render () {
        return (
            <div className='searchable-movie-reviews'>
                <h1>Search for movie Reviews</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='search' value={this.state.searchTerm} />
                    <input type='submit' />
                </form>
                
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearcableMovieReviewsContainer