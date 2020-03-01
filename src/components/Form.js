import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { addMOVIE, editMOVIE } from "../actions/index";

class connectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      src: "",
      rank: "",
      trailer: "",
      categorie: "",
      synopsis: "",
      main_actors: [],
      actor_image_1: "",
      actor_name_1: "",
      actor_image_2: "",
      actor_name_2: "",
      actor_image_3: "",
      actor_name_3: "",
      actor_image_4: "",
      actor_name_4: ""
    };
  }

  componentDidMount = () => {
    if (this.props.movie)
      this.setState({
        id: this.props.id,
        title: this.props.movie.title,
        src: this.props.movie.src,
        trailer: this.props.movie.trailer,
        rank: this.props.movie.rank,
        categorie: this.props.movie.categorie,
        synopsis: this.props.movie.synopsis,
        main_actors: this.props.movie.main_actors
      });
  };

  onChangeHandler = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  submitMovie = () => {
    if (this.props.movie) {
      this.props.editMOVIE(this.state);
    } else {
      // if (this.state.title && this.state.movie && this.state.rank) {
      this.props.addMOVIE({
        title: this.state.title,
        src: this.state.src,
        trailer: this.state.trailer,
        rank: this.state.rank,
        categorie: this.state.categorie,
        synopsis: this.state.synopsis,
        actor_name_1: this.state.actor_name_1,
        actor_image_1: this.state.actor_image_1,
        actor_name_2: this.state.actor_name_2,
        actor_image_2: this.state.actor_image_2,
        actor_name_3: this.state.actor_name_3,
        actor_image_3: this.state.actor_image_3,
        actor_name_4: this.state.actor_name_4,
        actor_image_4: this.state.actor_image_4,
        main_actors: this.state.main_actors.concat(
          this.state.actor_image_1
            ? {
                src: this.state.actor_image_1,
                name: this.state.actor_name_1
              }
            : this.state.actor_image_2
            ? {
                src: this.state.actor_image_2,
                name: this.state.actor_name_2
              }
            : this.state.actor_image_3
            ? {
                src: this.state.actor_image_3,
                name: this.state.actor_name_3
              }
            : this.state.actor_image_4
            ? {
                src: this.state.actor_image_4,
                name: this.state.actor_name_4
              }
            : ""
        )
      });
      this.setState({
        title: "",
        src: "",
        trailer: "",
        rank: "",
        categorie: "",
        synopsis: "",
        main_actors: []
      });
      // }
    }
    this.props.handleShow();
  };

  render() {
    // console.log("hello from form", this.props.movie);
    return (
      <div>
        {/* <Button variant="primary" onClick={this.handleShow}>
          Add
        </Button> */}
        <i className="fas fa-plus" onClick={this.props.handleShow} />
        <Modal
          className="posModal"
          show={this.props.show}
          onHide={this.props.handleShow}
        >
          <Modal.Header className="modalForm" closeButton>
            <Modal.Title>
              {this.props.movie ? "Edit Movie" : "Add New Movie"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalForm">
            <form>
              Title :
              <input
                name="title"
                defaultValue={this.state.title}
                placeholder="enter movie title"
                onChange={this.onChangeHandler}
              />
              Movie Poster:
              <input
                name="src"
                defaultValue={this.state.src}
                placeholder="enter movie poster"
                onChange={this.onChangeHandler}
              />
              Movie Trailer:
              <input
                name="trailer"
                defaultValue={this.state.trailer}
                placeholder="enter movie trailer"
                onChange={this.onChangeHandler}
              />
              Rating :
              <input
                name="rank"
                defaultValue={this.state.rank}
                placeholder="enter movie rank"
                onChange={this.onChangeHandler}
              />
              Categorie :
              <input
                name="categorie"
                defaultValue={this.state.categorie}
                placeholder="enter movie categorie"
                onChange={this.onChangeHandler}
              />
              Synopsis :
              <input
                name="synopsis"
                defaultValue={this.state.synopsis}
                placeholder="enter movie synopsis"
                onChange={this.onChangeHandler}
              />
              Main Actors :
              <input
                name="actor_name_1"
                defaultValue={this.state.actor_name_1}
                placeholder={"enter actor 1 name"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_image_1"
                defaultValue={this.state.actor_image_1}
                placeholder={"enter actor 1 image"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_name_2"
                defaultValue={this.state.actor_name_2}
                placeholder={"enter actor 2 name"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_image_2"
                defaultValue={this.state.actor_image_2}
                placeholder={"enter actor 2 image"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_name_3"
                defaultValue={this.state.actor_name_3}
                placeholder={"enter actor 3 name"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_image_3"
                defaultValue={this.state.actor_image_3}
                placeholder={"enter actor 3 image"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_name_4"
                defaultValue={this.state.actor_name_4}
                placeholder={"enter actor 4 name"}
                onChange={this.onChangeHandler}
              />
              <input
                name="actor_image_4"
                defaultValue={this.state.actor_image_4}
                placeholder={"enter actor 4 image"}
                onChange={this.onChangeHandler}
              />
            </form>
          </Modal.Body>
          <Modal.Footer className="modalForm">
            <Button variant="secondary" onClick={this.props.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.submitMovie}>
              {this.props.movie ? "Save" : "Add Movie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMOVIE: movie => dispatch(addMOVIE(movie)),
    editMOVIE: movie => dispatch(editMOVIE(movie))
  };
}

export default connect(null, mapDispatchToProps)(connectedForm);
