import React from 'react';
import {ListGroup, Jumbotron} from 'react-bootstrap';
import Checkbox from 'react-custom-checkbox';
import * as Icon from 'react-icons/fi';
import {FaPen, FaTimes} from 'react-icons/fa';

import './todo-list.scss';

const TodoList = () => (
  <div className='todo-list-container pb-4 py-md-4'>
    <div className='title text-secondary mb-4'>Todo List</div>
    <Jumbotron fluid className='border rounded mb-0'>
      <p className='text-center px-3'>Your todo list is empty!</p>
    </Jumbotron>
    {/* <ListGroup>
      {[1, 2, 3, 4, 5].map(() => (
        <ListGroup.Item>
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
              style={{overflow: 'hidden', marginRight: '5px'}}
              size={20}
              label='Cras justo odio'
            />
          </span>
          <span className='actions'>
            <FaPen />
            <FaTimes className='ml-2' />
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup> */}
  </div>
);

export default TodoList;
