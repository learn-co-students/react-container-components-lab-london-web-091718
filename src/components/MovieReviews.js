// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className='review-list'>
            <ul>
                {reviews.map(review => (
                    <li className='review'>
                        <h3>{review.display_title}</h3>
                        <br/>
                        <img src={review.multimedia.src}></img>
                        <h5>{review.headline}</h5>
                        <p>{review.summary_short}</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default MovieReviews; 