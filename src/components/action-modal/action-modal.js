import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import AddListTypeContainer from '../add-listType-container/add-listType-container';
import EditListTypeContainer from '../edit-listType-container/edit-listType-container';
import DeleteListTypeContainer from '../delete-listType-container/delete-listType-container';

import './action-modal.scss';

const getCapitalString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const ActionModal = ({ show, onHide, actionType, listType, currentData }) => {
  let modalContent = null;

  if (actionType === 'add') {
    modalContent = <AddListTypeContainer listType={listType} onHide={onHide} />;
  } else if (actionType === 'edit') {
    modalContent = (
      <EditListTypeContainer currentData={currentData} listType={listType} onHide={onHide} />
    );
  } else {
    modalContent = (
      <DeleteListTypeContainer currentData={currentData} listType={listType} onHide={onHide} />
    );
  }

  return (
    <Modal show={show} onHide={onHide} size='sm' aria-labelledby='action-modal' centered>
      <Modal.Header closeButton>
        <Modal.Title id='action-modal'>
          {`${getCapitalString(actionType)} ${getCapitalString(listType)}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
    </Modal>
  );
};

ActionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
  currentData: PropTypes.object
};

ActionModal.defaultProps = {
  currentData: {}
};

export default ActionModal;
