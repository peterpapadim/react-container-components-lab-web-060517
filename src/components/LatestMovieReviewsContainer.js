import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component{

  constructor(){
    super();
    this.state={
      reviews: [],
      showReview: false
    }
  }

  componentDidMount(){
     fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=7c5370f2da424cf8846ad4b91780a9d1")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  displayReviews = () => {
    return this.state.reviews.map(review => <MovieReviews currentReview={review}/> )
  }

  handleClick = (event) => {
    this.state.showReview ? this.setState({showReview: false}) : this.setState({showReview: true})
  }

  render() {
    return(
      <div className='latest-movie-reviews'>
        <div className='review-list'>
          <button onClick={this.handleClick}>View/Hide all</button><br/><br/>
          {this.state.showReview ? this.displayReviews() : null}
        </div>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
