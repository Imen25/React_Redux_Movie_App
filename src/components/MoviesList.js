import React from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { deleteMOVIE, editMOVIE } from "../actions/index";

const mapStateToProps = state => {
  return { movies: state.movies, filtredMovies: state.filtredMovies };
};
function mapDispatchToProps(dispatch) {
  return {
    deleteMOVIE: id => dispatch(deleteMOVIE(id)),
    editMOVIE: id => dispatch(editMOVIE(id))
  };
}

class connectedList extends React.Component {
  onDelete = id => {
    this.props.deleteMOVIE(id);
  };
  onEdit = id => {
    this.props.editMOVIE(id);
  };
  render() {
    return (
      <div className="movies">
        {(this.props.filtredMovies.length
          ? this.props.filtredMovies
          : this.props.movies
        ).map((movie, i) => (
          <Movie
            key={i}
            id={i}
            movie={movie}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        ))}
      </div>
    );
  }
}
const MoviesList = connect(mapStateToProps, mapDispatchToProps)(connectedList);
export default MoviesList;
