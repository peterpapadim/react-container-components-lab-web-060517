// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super();
    this.state={
      reviews: [],
      keyword: '',
      showReview: false
    }
  }

  seachBy(searchTerm){
     fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=7c5370f2da424cf8846ad4b91780a9d1`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.state.showReview ? this.setState({showReview: false}) : this.setState({showReview: true})
    this.seachBy(this.state.keyword)
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  displayReviews = () => {
    return this.state.reviews.map(review => <MovieReviews currentReview={review}/> )
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <div className='review-list'>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text'/>
            <input type='submit' value='Keyword Search'/>
          </form>
          {this.state.showReview ? this.displayReviews() : null}
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
