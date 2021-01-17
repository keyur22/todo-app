import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { ListGroup } from 'react-bootstrap';
import { FaPen, FaTimes } from 'react-icons/fa';

import { getBucketsList, getActiveBucketId } from '../../redux/buckets/buckets-selectors';
import { setActiveBucket } from '../../redux/buckets/buckets-actions';

import ActionModal from '../action-modal/action-modal';

import './buckets-list.scss';

const BucketsList = ({ buckets, setActiveBucket, activeBucketId }) => {
  const [isModalShow, setModalShow] = useState(false);
  const [currentBucket, setCurrentBucket] = useState({});
  const [actionType, setActionType] = useState('');

  const showModal = (bucket, actionType) => {
    setActionType(actionType);
    setCurrentBucket(bucket);
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

  return (
    <div className='buckets-list-container pb-4 py-md-4'>
      <div className='title text-secondary mb-4'>Buckets</div>
      <div className='buckets-list'>
        <ListGroup>
          {buckets.map((bucket) => {
            const { id, name, isDelete = true } = bucket;

            return (
              <ListGroup.Item key={id} active={id === activeBucketId}>
                <span className='name pr-2' onClick={() => setActiveBucket(id)}>
                  {name}
                </span>
                <span className='actions'>
                  <FaPen onClick={() => showModal(bucket, 'edit')} />
                  {isDelete && (
                    <FaTimes className='ml-2' onClick={() => showModal(bucket, 'delete')} />
                  )}
                </span>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <ActionModal
        show={isModalShow}
        onHide={hideModal}
        actionType={actionType}
        listType='bucket'
        currentData={currentBucket}
      />
    </div>
  );
};

BucketsList.propTypes = {
  buckets: PropTypes.array.isRequired,
  activeBucketId: PropTypes.number.isRequired,
  setActiveBucket: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  buckets: getBucketsList,
  activeBucketId: getActiveBucketId
});

const mapDispatchToProps = (dispatch) => ({
  setActiveBucket: (bucketId) => dispatch(setActiveBucket(bucketId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketsList);
