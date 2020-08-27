// src/components/MovieQuotes.js
import React from "react";

class MovieQuotes extends React.Component {
  render() {
    const randomColor = this.props.displayColor();

    return (
      <div className="box has-text-centered has-background-white-ter is-rounded my-2">
        <div class="columns">
          <div class="column is-two-fifths is-vcentered">
            <h3 className="is-size-4 quoteStyle"  style={{ color: randomColor, borderColor: randomColor }} key={Math.random() } >{this.props.quote}</h3>
            <h4 className="is-size-5 authorStyle"  style={{ color: randomColor, borderColor: randomColor }} key={Math.random() } >~ {this.props.author ? this.props.author : "Unknown"  } | <a target="_blank" rel="noreferrer noopener" href={this.props.wiki}>{this.props.movie}</a>  </h4>
          </div>
          <div class="column">
            <p>
              <a target="_blank" rel="noreferrer noopener" href={this.props.wiki}>
                <img src={"/images/movies/" + this.props.moviepic} alt={this.props.movie} className="movieImage" />
              </a>
              <h3 className="movieName is-size-4" style={{ color: randomColor, borderColor: randomColor }} key={Math.random() }>
                {this.props.movie}
              </h3>
            </p>


            <button
            className="button is-medium is-rounded has-text-white-bis mt-3"
            style={{ backgroundColor: randomColor }}
            id="newquote" onClick={this.props.handleClick}
            >
              <span className="icon is-small"><i className="fas fa-redo"></i></span>
              <span>New Quote</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieQuotes;
