// Player.jsx
import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import ShuffleButton from "../assets/img/playerbuttons/Shuffle.png";
import PreviousButton from "../assets/img/playerbuttons/Previous.png";
import PlayButton from "../assets/img/playerbuttons/Play.png";
import NextButton from "../assets/img/playerbuttons/Next.png";
import RepeatButton from "../assets/img/playerbuttons/Repeat.png";

const Player = ({ cover, title, artist }) => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="d-lg-flex align-items-center justify-content-between px-3">
        <Col className="d-flex align-items-center">
          {cover && (
            <Image
              src={cover}
              alt="Cover"
              style={{ width: "50px" }}
            />
          )}
          <div className="px-3">
            <p className="m-0" style={{ color: "whitesmoke" }}>
              <strong>{title}</strong>
            </p>
            <p className="m-0" style={{ color: "whitesmoke" }}>{artist}</p>
          </div>
          <i className="bi bi-heart fs-5"></i>
        </Col>
        <Col className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-center">
            <Image src={ShuffleButton} alt="shuffle" id="playerControls" />
            <Image src={PreviousButton} alt="previous" id="playerControls" />
            <Image src={PlayButton} alt="play" id="playerControls" />
            <Image src={NextButton} alt="next" id="playerControls" />
            <Image src={RepeatButton} alt="repeat" id="playerControls" />
          </div>
          <div className="progressBar d-flex align-items-center">
            <p className="text-white px-3 m-0">0:58</p>
            <div
              className="progress w-100 rounded-pill"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "5px", backgroundColor: "#5E5E5E" }}
            >
              <div className="progress-bar rounded-pill"></div>
            </div>
            <p className="text-white px-3 m-0">3:20</p>
          </div>
        </Col>
        <Col className="d-flex align-items-center">
          <i className="bi bi-mic fs-5 px-2"></i>
          <i className="bi bi-view-list fs-5 px-2"></i>
          <i
            className="bi bi-pc-display fs-5 px-2"
            style={{ color: "#A8A8A8" }}
          ></i>
          <div className="progressBar d-flex align-items-center">
            <i className="bi bi-volume-up fs-4 px-2"></i>
            <div
              className="progress w-100 rounded-pill"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar rounded-pill"></div>
            </div>
          </div>
          <i className="bi bi-arrows-angle-expand fs-5 px-2"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
