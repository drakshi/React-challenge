import React from 'react';
import { Container , Row, Col, Image } from 'react-bootstrap';

function SeriesList(props) {
    return (
        <div>
            <Container>
  <Row>
    <Col xs={6} md={4}>
    <Image src="https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg" thumbnail />
      <p className="ImageTitle">{props.title}</p>
    </Col>
    <Col xs={6} md={4}>
    <Image src="https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg" thumbnail />
      <p className="ImageTitle">{props.title}</p>
    </Col>
    <Col xs={6} md={4}>
    <Image src="https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg" thumbnail />
      <p className="ImageTitle">{props.title}</p>
    </Col>
    <Col xs={6} md={4}>
    <Image src="https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg" thumbnail />
      <p className="ImageTitle">{props.title}</p>
    </Col>
  </Row>
</Container>
        </div>
    )
}

export default SeriesList
