import React, {useState} from 'react';
import {Container, Row, Col, Button, ListGroup} from 'react-bootstrap';

import AddTodoModal from '../add-todo-modal/add-todo-modal';

import './todo-list.scss';

const TodoList = () => {
  const [todos, addTodo] = useState(['test']);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className='p-5'>
      <Row className='mt-5'>
        <Col>
          <Button variant='success' onClick={() => setShowModal(true)}>
            Add a new todo
          </Button>
          <AddTodoModal show={showModal} />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          {todos.length ? (
            <ListGroup variant='flush'>
              {todos.map((todo) => (
                <ListGroup.Item>{todo}</ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <div>
              <p className='text-center bg-danger text-light p-2 border rounded'>
                Your todo list is empty
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
