import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoadMusic from './components/LoadMusic';
import MusicPlayer from './components/MusicPlayer';


function App() {
  return (
    <Container>
      <h1>Music Player</h1>
      <Row>
        <Col md={{ size: 'auto', offset: 4 }}><LoadMusic /></Col>
      </Row>
      <Row>
        <Col md={{ size: 'auto', offset: 4 }}>Lyric</Col>
      </Row>
      <Row>
        <Col md={{ size: 'auto', offset: 4 }}><MusicPlayer /></Col>
      </Row>
    </Container>
  );
}

export default App;
