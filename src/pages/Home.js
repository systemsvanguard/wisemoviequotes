// src/pages/Home.js
import React from 'react'
import WiseMovieQuotes from "../components/WiseMovieQuotes";

const Home = () => {
  return (
    <div className="container">
      <h1 className="is-size-3 has-text-weight-bold has-text-link has-text-centered">Inspirational Movie Quotes</h1>
      <br />
      <div className="has-text-centered">
        <WiseMovieQuotes />
      </div>
	</div>
  )
}

export default Home