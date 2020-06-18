import React, { useContext } from "react";
import { AppContext } from "../../context";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function LoadMusicButton() {
  const {
    musicModal,
    toggleMusicModal,
    songData,
    handleChange,
    searchTrack
  } = useContext(AppContext);

  return (
    <div>
      <Button outline color="warning" onClick={toggleMusicModal}>
        Load Music
      </Button>
      <Modal isOpen={musicModal}>
        <ModalHeader toggle={toggleMusicModal}>Add a song</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="songTitle">Song Title</Label>
              <Input
                type="text"
                name="title"
                id="songTitle"
                placeholder="Title"
                value={songData.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="artist">Artist</Label>
              <Input
                type="text"
                name="artist"
                id="artist"
                placeholder="Artist"
                value={songData.artist}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="linkToSong">Link to Song</Label>
              <Input
                type="text"
                name="src"
                placeholder="www.location.com"
                value={songData.src}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lyrics">WebVtt format lyrics</Label>
              <Input
                type="textarea"
                name="lyrics"
                placeholder="Baby Got back"
                value={songData.lyrics}
                onChange={handleChange}
              />
              <FormText color="muted">

                <h6>
                  Enter in Lyrics in this format to have lyrics and music sync:{" "}
                  <br></br>
                  <br></br>
                  <p>WEBVTT</p>
                </h6>
                <p>00:01.000 &#45;&#45;&#62; 00:05.000 line:50%<br />Baby come back, any type of fool could see
                </p>

                <p>00:07.000 &#45;&#45;&#62; 00:16.000 line:50% <br />There was something in everything about you
                </p>


              </FormText>

            </FormGroup>


            {/* <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="isChecked"
                  onChange={handleChange}
                  checked={songData.isChecked}
                />
                Auto Load partial lyrics
              </Label>
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={searchTrack}>
            Submit
          </Button>{" "}
          <Button color="danger" onClick={toggleMusicModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div >
  );
}

export default LoadMusicButton;
