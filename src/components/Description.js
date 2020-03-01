import React from "react";
import { connect } from "react-redux";

import Rating from "./Rating";

import { getMOVIE } from "../actions/index";

class Description extends React.Component {
  componentDidMount() {
    this.props.getMOVIE(this.props.match.params.title);
  }

  render() {
    const { title, trailer, rank, categorie, synopsis, main_actors } = {
      ...this.props.movie
    };

    if (!this.props.movie) {
      return <p>Loading</p>;
    }

    return (
      <div className="Description">
        <iframe
          title="trailer"
          width="55%"
          height="500"
          // width="853"
          // height="480"
          src={`${trailer}?&autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="Sub-Description">
          <div className="main-header">
            <h1>{title}</h1>
            <Rating rank={rank} />
          </div>
          <div>
            {`${categorie}`.split(", ").map((categorie, i) => (
              <span key={i}>{categorie}</span>
            ))}
          </div>
          <p>{synopsis}</p>
          {main_actors ? (
            <div className="main_actors">
              {main_actors.map((actor, i) => (
                <div key={i}>
                  <img src={actor.src} alt="actor" /> <p>{actor.name}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getMOVIE: title => dispatch(getMOVIE(title))
});

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
