// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className='review-list'>
            <ul>
                {reviews.results.map(review => {
                    <li>
                        {review.display_title}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default MovieReviews; 