import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        } 
    }

    componentDidMount() {
        fetch(`${URL}?query=${this.state.searchTerm}`)
            .then(resp => {
                if (resp.status >= 400) {
                    throw new Error('Bad response from server')
                }
                return resp.json();
            })
            .then(review => this.setState({ reviews: reviews.results }))
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form>
                    <input 
                        type='text' 
                        name='search-term' 
                        placeholder='Enter movie name...' 
                        value={this.state.searchTerm}
                        onChange={this.handleChange}>
                    </input>
                    <input type='submit' value='Search' onSubmit={e => this.handleSubmit(e)}></input>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;
