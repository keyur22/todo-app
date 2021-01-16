import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import Checkbox from 'react-custom-checkbox';
import * as Icon from 'react-icons/fi';
import { FaPen, FaTimes } from 'react-icons/fa';

import { getTodoList } from '../../redux/todos/todos-selectors';
import { getActiveBucketId } from '../../redux/buckets/buckets-selectors';

import './todo-list.scss';

const TodoList = ({ todos, activeBucketId }) => {
  const todosList = todos.filter((todo) => todo.bucketId === activeBucketId);

  return (
    <div className='todo-list-container pb-4 py-md-4'>
      <div className='title text-secondary mb-4'>Todo List</div>
      {todosList.length ? (
        <ListGroup>
          {todosList.map(({ name, id }) => (
            <ListGroup.Item key={id}>
              <span className='name pr-2'>
                <Checkbox
                  checked={true}
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
                  style={{ overflow: 'hidden', marginRight: '5px' }}
                  size={20}
                  label={name}
                />
              </span>
              <span className='actions'>
                <FaPen />
                <FaTimes className='ml-2' />
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <Jumbotron fluid className='border rounded mb-0'>
          <p className='text-center px-3'>Your todo list is empty!</p>
        </Jumbotron>
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  activeBucketId: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
  todos: getTodoList,
  activeBucketId: getActiveBucketId
});

export default connect(mapStateToProps)(TodoList);
