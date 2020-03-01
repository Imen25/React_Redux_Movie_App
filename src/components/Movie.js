import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Rating from "./Rating";
import Form from "./Form";

import { getMOVIE } from "../actions/index";

class Movie extends React.Component {
  state = {
    show: false
  };
  handleShow = () => this.setState({ show: !this.state.show });
  render() {
    const { id } = this.props;
    const { title, rank, src, categorie } = this.props.movie;
    return (
      <div className="movie">
        <Link className="playLink" to={`/movie/${title}`}>
          <img src={src} alt="" />
        </Link>
        <i className="fas fa-play-circle" />
        <div className="movie_descrition">
          <div>
            <h5>{title}</h5>
            <p>{categorie}</p>
          </div>
          <div>
            <i className="far fa-edit" onClick={() => this.handleShow()}></i>
            <i
              className="far fa-trash-alt"
              onClick={() => this.props.onDelete(id)}
            ></i>
          </div>
        </div>
        <Rating className="rating" rank={rank} />
        {this.state.show && (
          <Form
            show={this.state.show}
            handleShow={this.handleShow}
            movie={this.props.movie}
            id={id}
          />
        )}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getMOVIE: title => dispatch(getMOVIE(title))
  };
}
export default connect(null, mapDispatchToProps)(Movie);
