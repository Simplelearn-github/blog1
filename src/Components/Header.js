import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mysta from './myshta.png'
import './Header.css'

const Header = () => {
  return (
    <div>
    <Row>
      <Col sm={2}><img src={mysta} alt='a/b'/></Col>
      <Col sm={10} className='quote'>Sweet Divine Gratitude</Col>
    </Row>
    </div>
  )
}

export default Header