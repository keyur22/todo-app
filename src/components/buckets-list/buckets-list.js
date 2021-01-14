import React, {useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import {FaPen, FaTimes} from 'react-icons/fa';
import ActionModal from '../action-modal/action-modal';
import './buckets-list.scss';

const BucketsList = () => {
  const [modalShow, setModalShow] = useState(true);

  return (
    <div className='buckets-list-container pb-4 py-md-4'>
      <div className='title text-secondary mb-4'>Buckets</div>
      <div className='buckets-list'>
        {[1, 2, 3, 4].map(() => (
          <ListGroup>
            <ListGroup.Item>
              <span className='name pr-2'>Uncategorized (1)</span>
              <span className='actions'>
                <FaPen />
                <FaTimes className='ml-2' />
              </span>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
      <ActionModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default BucketsList;
