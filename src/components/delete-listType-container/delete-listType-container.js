import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { deleteBucket, setActiveBucket } from '../../redux/buckets/buckets-actions';
import { deleteTodoWithBucketId, deleteTodo } from '../../redux/todos/todos-actions';
import { getActiveBucketId } from '../../redux/buckets/buckets-selectors';

const DeleteListTypeContainer = ({
  listType,
  onHide,
  currentData,
  deleteBucket,
  deleteTodoWithBucketId,
  activeBucketId,
  setActiveBucket,
  deleteTodo
}) => {
  const { id } = currentData;

  const deleteListType = (id, listType) => {
    if (listType === 'bucket') {
      deleteBucket(id);
      deleteTodoWithBucketId(id);
      if (activeBucketId === id) {
        setActiveBucket(1);
      }
    } else {
      deleteTodo(id);
    }

    onHide();
  };

  return (
    <div>
      <p className='text-center'>
        {`Are you sure you want to delete this ${listType}?`}
        {listType === 'bucket' && ' All the todos in this bucket will be deleted'}
      </p>
      <div className='mt-3 d-flex justify-content-between'>
        <Button type='submit' variant='primary' onClick={() => deleteListType(id, listType)}>
          Delete
        </Button>
        <Button onClick={onHide} variant='danger'>
          Cancel
        </Button>
      </div>
    </div>
  );
};

DeleteListTypeContainer.propTypes = {
  listType: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  deleteBucket: PropTypes.func.isRequired,
  deleteTodoWithBucketId: PropTypes.func.isRequired,
  activeBucketId: PropTypes.bool.isRequired,
  setActiveBucket: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  activeBucketId: getActiveBucketId
});

const mapDispatchToProps = (dispatch) => ({
  deleteBucket: (id) => dispatch(deleteBucket({ id })),
  deleteTodoWithBucketId: (id) => dispatch(deleteTodoWithBucketId({ id })),
  setActiveBucket: (bucketId) => dispatch(setActiveBucket(bucketId)),
  deleteTodo: (id) => dispatch(deleteTodo({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteListTypeContainer);
