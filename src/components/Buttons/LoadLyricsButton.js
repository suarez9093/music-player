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
  FormText
} from "reactstrap";

function LoadLyricsButton(props) {
  const {
    lyricModal,
    toggleLyricModal,
    songLyrics,
    handleLyricChange,
    displayLyrics
  } = useContext(AppContext);

  return (
    <div>
      <Button color="success" onClick={toggleLyricModal}>
        Load Lyrics
      </Button>
      <Modal isOpen={lyricModal} toggle={toggleLyricModal}>
        <ModalHeader toggle={toggleLyricModal}>Load Lyrics</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleText">Lyrics</Label>
              <Input
                type="textarea"
                name="songLyrics"
                id="songLyrics"
                value={songLyrics}
                onChange={handleLyricChange}
              />
            </FormGroup>

            <FormText color="muted">
              <h6>
                Enter in Lyrics in this format to have lyrics and music sync:{" "}
                <p>[minutes:seconds.miliseconds]</p>
              </h6>
              <p>[00:15.23] Baby come back, any kind of fool could see </p>
              <p>[00:25.54] There was something in everything about you</p>
              <p>[01:02.24] Baby come back, you can blame it all on me</p>
            </FormText>
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

// [00:16.73] アイツの心に 居场所がないんだ
// [00:21.38]
// [00:21.51] 制服のポケット
// [00:24.05] ホンネを忍ばせて
// [00:26.71] そっと えりを正す
// [00:31.71] そんな简単には
// [00:34.38] 手の内 明かせない
// [00:36.90] あくまでまだ 様子见の段阶
// [00:41.81]
// [00:42.01] だけど本当はね
// [00:44.59] 见破って欲しいの
// [00:47.25] 淡い期待に胸 ときめかして
// [00:51.74] チラチラと见てる
// [00:54.97]
