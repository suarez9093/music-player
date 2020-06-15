import React from "react";
import { Container, Row, Col } from "reactstrap";
// import LoadLyricsButton from "./components/Buttons/LoadLyricsButton";
// import LoadMusicButton from "./components/Buttons/LoadMusicButton";
import LyricContainer from "./components/LyricContainer/LyricContainer";
// import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  return (
    <Container>
      <Row>
        <Col />
        <Col />
      </Row>
      <Row>
        <Col />
        <Col md="6">
          <LyricContainer />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col>
          {/* <MusicPlayer /> */}
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;
