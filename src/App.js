import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoadMusic from './components/LoadMusic';
import LoadLyrics from './components/LoadLyrics';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Container>
      <h1>Music Player</h1>
      <br />
      <Row>
        <Col></Col>
        <Col md="6">
          <LoadMusic />

        </Col>
        <Col></Col>

      </Row>
      <Row>
        <Col></Col>
        <Col md="6"><LoadLyrics /></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col><MusicPlayer /></Col>
        <Col></Col>


      </Row>
    </Container >
  );
}

export default App;
