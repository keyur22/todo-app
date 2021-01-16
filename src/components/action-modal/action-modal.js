import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import AddListTypeContainer from '../add-listType-container/add-listType-container';
import DeleteListTypeContainer from '../delete-listType-container/delete-listType-container';

const getCapitalString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const ActionModal = ({ show, onHide, actionType, listType }) => {
  return (
    <Modal show={show} onHide={onHide} size='sm' aria-labelledby='action-modal' centered>
      <Modal.Header closeButton>
        <Modal.Title id='action-modal'>
          {`${getCapitalString(actionType)} ${getCapitalString(listType)}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionType === 'add' ? (
          <AddListTypeContainer listType={listType} onHide={onHide} />
        ) : (
          <DeleteListTypeContainer />
        )}
      </Modal.Body>
    </Modal>
  );
};

ActionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired
};

export default ActionModal;
