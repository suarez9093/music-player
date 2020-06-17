import React, { useContext } from "react";
import { AppContext } from "../../context";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, FormText } from 'reactstrap'


function LoadLyricsButton() {
  const {
    lyricModal,
    toggleLyricModal,
    songLyrics,
    handleLyricChange,
    displayLyrics
  } = useContext(AppContext);

  return (
    <div>
      <Button outline color="success" onClick={toggleLyricModal}>
        Load Lyrics
      </Button>
      <Modal isOpen={lyricModal} toggle={toggleLyricModal}>
        <ModalHeader toggle={toggleLyricModal}>Load Lyrics</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleText">Link to WebVtt Lyrics</Label>
              <Input
                type="textarea"
                name="songLyrics"
                id="songLyrics"
                value={songLyrics}
                onChange={handleLyricChange}
              />
              {/* <Input
                type="input"
                name="webVtt"
                placeholder="www.location.com"
                value={songLyrics}
                onChange={handleLyricChange}
              /> */}
            </FormGroup>
            {/* 
            <FormText color="muted">
              <h6>
                Enter in Lyrics in this format to have lyrics and music sync:{" "}
                <p>[minutes:seconds.miliseconds]</p>
              </h6>
              <p>[00:15.23] Baby come back, any kind of fool could see </p>
              <p>[00:25.54] There was something in everything about you</p>
              <p>[01:02.24] Baby come back, you can blame it all on me</p>
            </FormText> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={displayLyrics}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggleLyricModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LoadLyricsButton;
