import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoadMusic = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>Load Music</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Song</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="songTitle">Song Name</Label>
                            <Input type="text" name="song" id="songTitle" placeholder="Song Name" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Artist">Artist</Label>
                            <Input type="text" name="artist" id="artist" placeholder="Artist Name" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="songLink">Link to song</Label>
                            <Input type="text" name="songLink" id="song-link" placeholder="https://www.location.com" required />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup> */}


                        <Button>Submit</Button>
                    </Form>

                </ModalBody>
            </Modal>
        </div>
    );
}

export default LoadMusic;