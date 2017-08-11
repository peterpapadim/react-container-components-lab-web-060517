// Code MovieReviews Here
import React, { Component } from 'react';

class MovieReviews extends Component {

  render(){
    return(
      <div className="review">
        <b>Author:</b> {this.props.currentReview.byline}<br/>
        <b>Movie Title:</b> {this.props.currentReview.display_title}<br/>
        <b>Headline:</b> {this.props.currentReview.headline}<br/>
        <b>Short Summary:</b> {this.props.currentReview.summary_short}<br/><br/>
      </div>
    )
  }
}

export default MovieReviews;
