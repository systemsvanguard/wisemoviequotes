// src/components/MovieQuotes.js
import React from "react";

class MovieQuotes extends React.Component {
  //
  render() {
    const randomColor = this.props.displayColor();
    const html2 = document.documentElement;
    html2.style.backgroundColor = randomColor;

    return (
      <div className="has-text-centered">
        <div style={{ backgroundColor: "#f8f8ff" }} className="quotebox"  >
          <div class="columns">
            <div class="column">
              <div className="fadeIn" style={{ color: randomColor, borderColor: randomColor }} key={Math.random() } >
              <h1 id="quote">"{this.props.quote}"</h1>
              </div>
            </div>
            <div class="column">
            <h5 id="author">~ {this.props.author ? this.props.author : "Unknown"  } | <a target="_blank" rel="noreferrer noopener" href={this.props.wiki}>{this.props.movie}</a>  </h5>

            <h5 id="author">
              <a target="_blank" rel="noreferrer noopener" href={this.props.wiki}>
              <img src={"/images/movies/" + this.props.moviepic} alt={this.props.movie} className="movieImage" />
              {/* <img src="ferris_bueller.jpg"  alt={this.props.movie} className="movieImage" /> */}
              </a>
            </h5>

            <button
            className="button is-medium is-rounded has-text-white-bis"
            style={{ backgroundColor: randomColor }}
            id="newquote" onClick={this.props.handleClick}
            >
              <span className="icon is-small"><i className="fas fa-redo"></i></span>
              <span>New Quote</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieQuotes;
