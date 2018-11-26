import React from 'react'
import Review from './Review'

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      {reviews.map(review => <Review key={review.link.url} className='review' review={review} />)}
    </div>
  )
}

export default MovieReviews
