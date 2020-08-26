// src/components/WiseMovieQuotes.js
import React from 'react';
import MovieQuotes from './MovieQuotes';
import moviequotesdata from '../app/MovieQuotesData';

class WiseMovieQuotes extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: moviequotesdata[0].quote,
      author: moviequotesdata[0].author,
      movie: moviequotesdata[0].movie,
      wiki: moviequotesdata[0].wiki,
      moviepic: moviequotesdata[0].moviepic
    };
  }

  randomQuote() {
    const randomNumber = Math.floor(Math.random() * moviequotesdata.length );
    return moviequotesdata[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(()=> Math.random() - 0.5 )
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author,
      movie: generateRandomQuote.movie,
      wiki: generateRandomQuote.wiki,
      moviepic: generateRandomQuote.moviepic
    } );
    this.shuffleQuotes(moviequotesdata)
  };
  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)}   )`;
    return color;
  }

  render() {
    return (
      <div>
        <MovieQuotes displayColor={this.randomColor} handleClick={this.handleClick} {...this.state}  />
      </div>
    );
  }
}

export default WiseMovieQuotes;