import React from 'react'

const MovieReviews = (props) => {
    return ( 
        
        <div classNAme="review-list">
            {props.result.headline}
        </div>
        
    )
}
 
export default MovieReviews;