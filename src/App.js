import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import Form from "./components/Form";
import Search from "./components/Search";
import WithLoading from "./components/WithLoading";
// import Rating from "./components/Rating";

const MoviesListWithLoading = WithLoading(MoviesList);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      show: false
    };
  }
  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };
  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  };
  render() {
    return (
      <div className="App">
        <Search />
        <MoviesListWithLoading
          isLoading={this.state.isLoading}
          handleShow={this.handleShow}
        />
        <Form handleShow={this.handleShow} show={this.state.show} />
      </div>
    );
  }
}

export default App;
