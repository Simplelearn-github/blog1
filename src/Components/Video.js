import React from 'react'
import { Button, Carousel, Col, Container, NavLink, Row } from 'react-bootstrap'
import { Card } from 'semantic-ui-react'
import './Video.css'
import spiritual from './spiritual.png'

const Video = () => {
  return (
    <Container>
    <Row>
      <Col sm={9}  >
      <Card.Group itemsPerRow={3}>
      
    <Card color='red' image={spiritual} />
    <Card  href='#card-example-link-card' color='orange' image={spiritual} />
    <Card color='yellow' image={spiritual} />
    <Card color='olive' image={spiritual} />
    <Card color='green' image={spiritual} />
    <Card color='teal' image={spiritual} />
  
   
  </Card.Group>




      </Col>
      <Col   sm={3}>
        <div><Button>LATEST BLOGS</Button></div>
      <Carousel variant="dark" >
     
     
  <Carousel.Item>
  <div class="card">
    <div class="card__header">
     <NavLink><img  src="https://source.unsplash.com/600x400/?food" alt="card__image" class="card__image" width="600"/></NavLink> 
    </div>
    <div class="card__body">
      <span class="tag tag-brown">Food</span>
      <h4>Delicious Food</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  </Carousel.Item>
   <Carousel.Item>
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image"/>
        <div class="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
  </div>
  </Carousel.Item>
</Carousel>

      </Col>
    </Row>
    </Container>
  )
}

export default Video