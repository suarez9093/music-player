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
        <Col md="6">
          <LoadMusic />

        </Col>

      </Row>
      <Row>
        <Col md={{ size: 'auto', offset: 4 }}><LoadLyrics /></Col>
      </Row>
      <Row>
        <Col md={{ size: 'auto', offset: 4 }}><MusicPlayer /></Col>


      </Row>
    </Container >
  );
}

export default App;
