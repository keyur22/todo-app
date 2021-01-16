import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ListGroup } from 'react-bootstrap';
import { FaPen, FaTimes } from 'react-icons/fa';

import { getBucketsList, getActiveBucketId } from '../../redux/buckets/buckets-selectors';
import { setActiveBucket } from '../../redux/buckets/buckets-actions';

import './buckets-list.scss';

const BucketsList = ({ buckets, setActiveBucket, activeBucketId }) => {
  return (
    <div className='buckets-list-container pb-4 py-md-4'>
      <div className='title text-secondary mb-4'>Buckets</div>
      <div className='buckets-list'>
        <ListGroup>
          {buckets.map(({ id, name, isDelete = true }) => (
            <ListGroup.Item key={id} active={id === activeBucketId}>
              <span className='name pr-2' onClick={() => setActiveBucket(id)}>
                {name}
              </span>
              <span className='actions'>
                <FaPen />
                {isDelete && <FaTimes className='ml-2' />}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  buckets: getBucketsList,
  activeBucketId: getActiveBucketId
});

const mapDispatchToProps = (dispatch) => ({
  setActiveBucket: (bucketId) => dispatch(setActiveBucket(bucketId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketsList);
