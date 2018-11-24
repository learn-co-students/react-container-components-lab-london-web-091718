import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            +`api-key=${NYT_API_KEY}&query=`
         

            export default class LatestMovieReviewsContainer extends Component {
                constructor() {
                    super();
                
                    this.state = {
                      reviews: [],
                      searchTerm: ""
                    };
                  }

                handleChange = (event) => {
                    this.setState({ searchTerm: event.target.value})
                }
            
                onSubmit() {
                    fetch(URL + this.state.searchTerm)
                        .then(resp => resp.json())
                        .then(reviews => this.setState({ reviews: reviews.results }))
                }
            
                render () {
                    return ( 
                        <div className="searchable-movie-reviews">
                            <form className="search-form" onSubmit={() => this.onSubmit()}>
                                <input type="text" placeholder="movie title" onChange={(event) => this.handleChange(event)} />
                                <input type="submit" name="submit" />
                            </form>
                            <h2>The Searched Reviews:</h2>
                            <MovieReviews reviews={ this.state.reviews } />
                        </div>
                    )
                }
            }
            