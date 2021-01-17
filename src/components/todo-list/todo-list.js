import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import Checkbox from 'react-custom-checkbox';
import * as Icon from 'react-icons/fi';
import { FaPen, FaTimes } from 'react-icons/fa';

import { getTodoList } from '../../redux/todos/todos-selectors';
import { getActiveBucketId } from '../../redux/buckets/buckets-selectors';
import { changeCompletedStatus } from '../../redux/todos/todos-actions';

import ActionModal from '../action-modal/action-modal';

import './todo-list.scss';

const TodoList = ({ todos, activeBucketId, changeCompletedStatus }) => {
  const [isModalShow, setModalShow] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [actionType, setActionType] = useState('');

  const showModal = (todo, actionType) => {
    setActionType(actionType);
    setCurrentTodo(todo);
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

  const onStatusChange = (id) => {
    changeCompletedStatus(id);
  };

  const todosList = todos.filter((todo) => todo.bucketId === activeBucketId);

  return (
    <div className='todo-list-container pb-4 py-md-4'>
      <div className='title text-secondary mb-4'>Todo List</div>
      {todosList.length ? (
        <ListGroup>
          {todosList.map((todo) => {
            const { id, name, isCompleted } = todo;

            return (
              <ListGroup.Item key={id}>
                <span className='name pr-2'>
                  <Checkbox
                    checked={isCompleted}
                    onChange={() => onStatusChange(id)}
                    icon={
                      <div
                        style={{
                          display: 'flex',
                          flex: 1,
                          backgroundColor: '#174A41',
                          alignSelf: 'stretch'
                        }}
                      >
                        <Icon.FiCheck color='white' size={17} />
                      </div>
                    }
                    borderColor='#174A41'
                    borderRadius={20}
                    style={{ overflow: 'hidden', marginRight: '5px', cursor: 'pointer' }}
                    size={20}
                    label={name}
                  />
                </span>
                <span className='actions'>
                  <FaPen onClick={() => showModal(todo, 'edit')} />
                  <FaTimes className='ml-2' onClick={() => showModal(todo, 'delete')} />
                </span>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <Jumbotron fluid className='border rounded mb-0'>
          <p className='text-center px-3'>Your todo list is empty!</p>
        </Jumbotron>
      )}
      <ActionModal
        show={isModalShow}
        onHide={hideModal}
        actionType={actionType}
        listType='todo'
        currentData={currentTodo}
      />
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  activeBucketId: PropTypes.number.isRequired,
  changeCompletedStatus: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  todos: getTodoList,
  activeBucketId: getActiveBucketId
});

const mapDispatchToProps = (dispatch) => ({
  changeCompletedStatus: (id) => dispatch(changeCompletedStatus({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
