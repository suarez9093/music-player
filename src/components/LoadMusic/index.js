import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoadMusic = (props) => {
    const { modal, toggle, handleChange, setSource, song } = useContext(AppContext);

    const {
        buttonLabel,
        className
    } = props;

    return (
        <div>
            <Button color="danger" onClick={toggle}>Load Music</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Song</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="songTitle">Song Name</Label>
                            <Input
                                type="text"
                                name="song"
                                id="songTitle"
                                placeholder="Song Name"
                                value={song.song}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Artist">Artist</Label>
                            <Input
                                type="text"
                                name="artist"
                                id="artist"
                                placeholder="Artist Name"
                                value={song.artist}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="songLink">Link to song</Label>
                            <Input
                                type="text"
                                name="link"
                                id="song-link"
                                value={song.link}
                                onChange={handleChange}
                                placeholder="https://www.location.com" />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup> */}


                        <Button onClick={setSource}>Submit</Button>
                    </Form>

                </ModalBody>
            </Modal>
        </div>
    );
}

export default LoadMusic;