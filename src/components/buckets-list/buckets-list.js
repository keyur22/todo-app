import React from 'react';
import {FaPen, FaTimes} from 'react-icons/fa';

import './buckets-list.scss';

const BucketsList = () => (
  <div className='buckets-list-container py-4'>
    <div className='title text-secondary mb-4'>Buckets</div>
    <div className='buckets-list'>
      {[1, 2, 3, 4].map(() => (
        <div className='item'>
          <span className='name pr-2'>Uncategorized (1)</span>
          <span className='actions'>
            <FaPen />
            <FaTimes className='ml-2' />
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default BucketsList;
