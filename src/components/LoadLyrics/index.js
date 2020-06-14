// import React, { useContext } from 'react';
// import './style.css';
// import { AppContext } from '../../context';
// import RabbitLyrics from 'rabbit-lyrics'


// function LoadLyrics() {
//     console.log(RabbitLyrics)
//     const { lyrics } = useContext(AppContext);
//     return (

//         <>

//             <div
//                 id="lyrics"
//                 className="rabbit-lyrics"
//                 data-alignment="center"
//                 data-media="#audiofile">

//             </div>
//         </>
//     )
// };

// export default LoadLyrics


import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoadMusic = (props) => {
    const { modalLyrics, toggleLyrics, handleChange, setSource, song, checkBox, isChecked } = useContext(AppContext);

    const {
        buttonLabel,
        className
    } = props;

    return (
        <div>
            <Button color="success" onClick={toggleLyrics}>Load Lyrics</Button>
            <Modal isOpen={modalLyrics} toggle={toggleLyrics} className={className}>
                <ModalHeader toggle={toggleLyrics}>Add Song</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Button onClick={setSource}>Submit</Button>
                    </Form>

                </ModalBody>
            </Modal>
        </div>
    );
}

export default LoadMusic;







