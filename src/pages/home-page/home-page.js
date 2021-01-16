import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddButtonsContainer from '../../components/add-buttons-container/add-buttons-container';
import BucketsList from '../../components/buckets-list/buckets-list';
import TodoList from '../../components/todo-list/todo-list';

const HomePage = () => (
  <Container>
    <Row>
      <Col md={12}>
        <AddButtonsContainer />
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
