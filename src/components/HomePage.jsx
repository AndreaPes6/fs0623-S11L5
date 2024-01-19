import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

const HomePage = () => {
  const { Jazz, Electronic, Country, Rock, Pop, HipHop } = useSelector(state => state.redBasic);

  const getRandomElements = (array, maxElements) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, maxElements);
  };

  const renderSection = (title, elements, keyPrefix) => (
    <Col className="col-9" key={title}>
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2" id={`${title}Section`}>
        {getRandomElements(elements, 4).map((element, index) => (
          <SingleCard element={element} key={`${keyPrefix}_${index}`} />
        ))}
      </div>
    </Col>
  );

  const sections = [
    { title: "Jazz", elements: Jazz, keyPrefix: "jazz" },
    { title: "Electronic", elements: Electronic, keyPrefix: "electronic" },
    { title: "Country", elements: Country, keyPrefix: "country" },
    { title: "Rock", elements: Rock, keyPrefix: "rock" },
    { title: "Pop", elements: Pop, keyPrefix: "pop" },
    { title: "HipHop", elements: HipHop, keyPrefix: "hiphop" },
  ];

  return (
    <Col className="col-md-12 mainPage">
      <Row className="justify-content-center" id="content-MainPage">
        {sections.map(section => renderSection(section.title, section.elements, section.keyPrefix))}
      </Row>
    </Col>
  );
};

export default HomePage;