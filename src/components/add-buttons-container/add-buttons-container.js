import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import ActionModal from '../action-modal/action-modal';

import './add-buttons-container.scss';

const AddButtonsContainer = () => {
  const [isModalShow, setModalShow] = useState(false);
  const [listType, setListType] = useState('');

  const showModal = (listType) => {
    setListType(listType);
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

  return (
    <div className='add-container py-4'>
      <Button variant='success' onClick={() => showModal('bucket')}>
        <FaPlus />
        <span>New Bucket</span>
      </Button>
      <Button variant='success' onClick={() => showModal('todo')}>
        <FaPlus />
        <span>New Todo</span>
      </Button>
      <ActionModal show={isModalShow} onHide={hideModal} actionType='add' listType={listType} />
    </div>
  );
};

export default AddButtonsContainer;
