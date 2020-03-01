import React from "react";
import { Carousel } from "react-bootstrap";
import Rating from "./Rating";
import { connect } from "react-redux";
import { searchMOVIE, searchByRate } from "../actions/index";

const connectedSearch = props => {
  const changeHandlerSearch = e => {
    props.searchMOVIE(e.target.value);
  };
  const clickRank = i => {
    props.searchByRate(i);
  };

  return (
    <div>
      <Carousel className="carouselSearch">
        <Carousel.Item>
          <img
            className="FirstSlide"
            src="https://lepetitseptieme.ca/wp-content/uploads/2018/07/Blue-my-Mind-Une-web.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Blue My Mind</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="SecondSlide"
            src="https://media.glamour.com/photos/5dfbd086275acd00086acb8b/16:9/w_2560%2Cc_limit/YOU_204_Unit_00897R.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>You</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="ThirdSlide"
            src="https://musicart.xboxlive.com/6/cf13ad1d-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>A Turtle's Tale 2: Sammy's Escape From Paradise</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Search">
        <i className="fas fa-search" style={{ fill: "currentcolor" }} />
        <input
          type="search"
          placeholder="Find movies"
          onChange={changeHandlerSearch}
        />
        {clickRank ? (
          <div>
            <p>
              Mininum Rating
              <Rating rank={props.rank} clickRank={clickRank} />
            </p>
          </div>
        ) : (
          <Rating rank={this.state.rank} clickRank={clickRank} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { rank: state.rank };
};

function mapDispatchToProps(dispatch) {
  return {
    searchMOVIE: search => dispatch(searchMOVIE(search)),
    searchByRate: rank => dispatch(searchByRate(rank))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(connectedSearch);
