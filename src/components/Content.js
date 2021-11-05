import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col, Image } from 'react-bootstrap'
import image from '../assets/placeholder1.png';
import './Content.css';

function Content(props) {
 
    return (
        <div>
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={image} thumbnail onClick={props.onShowSeries} />
      <p className="ImageTitle" onClick={props.onShowSeries}>Popular Series</p>
    </Col>
    <Col xs={6} md={4}>
      <Image src={image} thumbnail onClick={props.onShowMovies}/>
      <p className="ImageTitle" onClick={props.onShowMovies}>Popular Movies</p>
    </Col>
  </Row>
</Container>
     </div>
    )
}

export default Content;
