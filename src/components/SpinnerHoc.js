import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerHoc = () => {
  return (
    <div className="SpinnerHoc">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerHoc;
