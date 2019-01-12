import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews' 
import { Form, Grid } from "semantic-ui-react"

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            reviews: undefined,
            searchTerm: undefined
         }
    }
    
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => this.setState({ searchTerm: '' })


    render() { 
        const { searchTerm } = this.state
        return ( 
            <div className="searchable-movie-reviews">
                <Grid centered>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input placeholder='Name' name='searchTerm' value={searchTerm} onChange={this.handleChange} />
                        </Form.Group>
                    </Form>
                </Grid>
            </div>
         )
    }
}
 
export default SearchableMovieReviewsContainer;
