import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Button } from 'react-bootstrap';

import { getBucketsList, getActiveBucketId } from '../../redux/buckets/buckets-selectors';
import { addBucket } from '../../redux/buckets/buckets-actions';
import { addTodo } from '../../redux/todos/todos-actions';

import './add-listType-container.scss';

const AddListTypeContainer = ({
  listType,
  onHide,
  addBucket,
  addTodo,
  buckets,
  activeBucketId
}) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [selectedBucketId, setSelectedBucket] = useState(activeBucketId);

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
      listType === 'bucket' ? addBucket(name) : addTodo({ name, selectedBucketId });
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
            {buckets.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
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
          Close
        </Button>
      </div>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  buckets: getBucketsList,
  activeBucketId: getActiveBucketId
});

const mapDispatchToProps = (dispatch) => ({
  addBucket: (name) => dispatch(addBucket(name)),
  addTodo: (name) => dispatch(addTodo(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddListTypeContainer);
