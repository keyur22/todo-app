import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import AddContainer from '../../components/add-container/add-container';
import BucketsList from '../../components/buckets-list/buckets-list';
import TodoList from '../../components/todo-list/todo-list';

const HomePage = () => (
  <Container className=''>
    <Row>
      <Col md={12}>
        <AddContainer />
      </Col>
      <Col md={4}>
        <BucketsList />
      </Col>
      <Col md={8}>
        <TodoList />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
