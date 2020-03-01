import React from "react";
import SpinnerHoc from "./SpinnerHoc";

function WithLoading(Component) {
  return function WihLoadingComponent(props) {
    if (props.isLoading) return <SpinnerHoc />;
    else
      return <Component handleShow={props.handleShow} movies={props.movies} />;
  };
}

export default WithLoading;
