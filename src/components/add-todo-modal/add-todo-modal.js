import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const AddTodoModal = ({show}) => {
  return (
    <Modal show={show} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => {}}>
          Close
        </Button>
        <Button variant='primary' onClick={() => {}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodoModal;
