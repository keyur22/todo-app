import React from 'react';
import {Button} from 'react-bootstrap';
import {FaPlus} from 'react-icons/fa';

import './add-container.scss';

const AddContainer = () => (
  <div className='add-container py-4'>
    <Button variant='success'>
      <FaPlus />
      <span>New Bucket</span>
    </Button>
    <Button variant='success'>
      <FaPlus />
      <span>New Todo</span>
    </Button>
  </div>
);

export default AddContainer;
