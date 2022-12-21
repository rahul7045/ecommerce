import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css'
const Card = () => {
  return (
    <Container className='padding-top-generics' fluid>
    <Row>
      <Col className='the-generics'>The Generics</Col>
    </Row>
  </Container>
  )
}
export default Card