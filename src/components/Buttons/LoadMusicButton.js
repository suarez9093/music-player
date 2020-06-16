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
} from "reactstrap";

function LoadMusicButton(props) {
  const {
    musicModal,
    toggleMusicModal,
    songData,
    handleChange,
    searchTrack
  } = useContext(AppContext);

  return (
    <div>
      <Button color="danger" onClick={toggleMusicModal}>
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
                name="link"
                id="linkToSong"
                placeholder="www.location.com"
                value={songData.link}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="isChecked"
                  onChange={handleChange}
                  checked={songData.isChecked}
                />{" "}
                Auto Load partial lyrics
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={searchTrack}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggleMusicModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LoadMusicButton;
