import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Button } from 'react-bootstrap';

import { getBucketsList } from '../../redux/buckets/buckets-selectors';
import { editBucket } from '../../redux/buckets/buckets-actions';
import { editTodo } from '../../redux/todos/todos-actions';

const EditListTypeContainer = ({
  listType,
  onHide,
  currentData,
  editBucket,
  editTodo,
  buckets
}) => {
  const { id, name: currentName, bucketId } = currentData;
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState(currentName);
  const [selectedBucketId, setSelectedBucket] = useState(bucketId);

  const onChangeValue = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else {
      setSelectedBucket(Number(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    if (name) {
      listType === 'bucket' ? editBucket(id, name) : editTodo(id, name, selectedBucketId);
      onHide();
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {listType === 'todo' ? (
        <Form.Group controlId='bucketName'>
          <Form.Label>Select bucket</Form.Label>
          <Form.Control
            as='select'
            name='selectedBucket'
            defaultValue={buckets.filter(({ isDelete }) => isDelete === false).name}
            value={selectedBucketId}
            onChange={onChangeValue}
          >
            {buckets.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      ) : null}

      <Form.Group controlId='name' className='mb-0'>
        <Form.Control
          required
          type='text'
          name='name'
          placeholder='Enter name'
          value={name}
          onChange={onChangeValue}
        />
        <Form.Control.Feedback type='invalid'>Name cannot be empty</Form.Control.Feedback>
      </Form.Group>
      <div className='mt-3 d-flex justify-content-between'>
        <Button type='submit' variant='primary'>
          Submit
        </Button>
        <Button onClick={onHide} variant='danger'>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

EditListTypeContainer.propTypes = {
  buckets: PropTypes.array.isRequired,
  editBucket: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  listType: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  buckets: getBucketsList
});

const mapDispatchToProps = (dispatch) => ({
  editBucket: (id, name) => dispatch(editBucket({ id, name })),
  editTodo: (id, name, selectedBucketId) => dispatch(editTodo({ id, name, selectedBucketId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditListTypeContainer);
