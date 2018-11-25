import React from 'react'

const Review = props => {
    const { display_title, headline, summary_short, multimedia } = props
    return (
        <div className className='review'>
            <div>{display_title}</div>
            <div>{headline}</div>
            <div>{summary_short}</div>
            <img src={multimedia.src}></img>
        </div>
    )
}

const MovieReviews = props => {
    const { reviews } = props
    return (
        <ul className='review-list'>
            {reviews.map(Review)}
        </ul>
    )
}

export default MovieReviews