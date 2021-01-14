import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const ActionModal = (props) => (
  <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
    <Modal.Header closeButton>
      <Modal.Title id='contained-modal-title-vcenter'>Edit</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className='mb-0 text-center'>Are you sure you want to delete this bucket?</p>
      {/* <Form.Group controlId='formBasicEmail' className='mb-0'>
        <Form.Control type='email' placeholder='Enter email' value='bucket' />
      </Form.Group> */}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Submit</Button>

      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default ActionModal;
