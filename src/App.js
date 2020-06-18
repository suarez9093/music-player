import React from "react";
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

import NavbarComponent from './components/Navbar/NavbarComponent'
import { Container, Col, Row } from 'reactstrap';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>


        <Row>

          <Col>

            <MusicPlayer />
          </Col>

        </Row>



      </Container>

    </>
  )
}

export default App;
