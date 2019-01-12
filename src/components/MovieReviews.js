import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

const MovieReviews = (props) => {
    return ( 
        
    <div classNAme="review-list">
        <Grid.Column> 
            <Card>
                <Card.Content>
                    <Card.Header>{props.result.byline}</Card.Header>
                    <Card.Meta>{props.result.display_title}</Card.Meta>
                    <Card.Description>{props.result.summary_short}.</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column> 
    </div>
  
        
    )
}
 
export default MovieReviews;