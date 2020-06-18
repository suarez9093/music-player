import React from "react";
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import LoadLyricsButton from "./components/Buttons/LoadLyricsButton";
import LoadMusicButton from "./components/Buttons/LoadMusicButton";
import LyricContainer from "./components/LyricContainer/LyricContainer";
import { Container, Col, Row } from 'reactstrap';

function App() {
  return (


    <Container>
      <br />
      <br />
      {/* 
      <Row>
        <Col>
        <LyricContainer />
        </Col>
      </Row> */}

      <br />
      <br />
      <Row>
        {/* <Col></Col> */}
        <Col>

          <MusicPlayer />
        </Col>

      </Row>

      <Row>

        <Col>
          <LoadMusicButton />
        </Col>
        <Col>
          {/* <LoadLyricsButton /> */}
        </Col>
        <Col></Col>
        <Col></Col>

      </Row>

    </Container>


  )
}

export default App;
