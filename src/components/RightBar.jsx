import React from "react";
import { Col } from "react-bootstrap";

const RightBar = () => {
  return (
    <Col xs={2} className=" bg-black" id="RightNavBar">
        <div className="col-8">
          <p className="fs-5 p-2 m-0 text-white fw-bold">Attività amici</p>
        </div>
    </Col>
  );
};

export default RightBar;
