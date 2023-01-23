import React from 'react'
import { Card } from 'semantic-ui-react'
import './Cards.css'
import card2pdf from './card2.pdf'

const Cards = () => {
  return (
    <div>  <Card.Group itemsPerRow={3}  className="cardgroup"> <Card 
  
    href='https://www.youtube.com/watch?v=s2NQhpFGIOg&t=7s'
    header='Practice the Mandala'
    description=' complete yout 21 days practice'
    color='blue'
    
  />
  <Card
    href={card2pdf}
    header='Self-Practice Guide'
    description='Download the guide to access '
    color='blue'
  />
  <Card
    href='https://docs.google.com/forms/d/e/1FAIpQLSdu8sWmFPMCqM3XJwsPii-uVhInNoRdJjEatJMU5QL9toljyw/viewform'
    header='Share Your journey'
    description=' how your 21 days of practice?'
    color='blue'
  />
   <Card
   
    header='Replay Links'
    description='Recordings will be available for next 24hours'
    color='blue'
  />
   <Card
    href='https://www.youtube.com/watch?v=s2NQhpFGIOg&t=7s'
    header='Sativic Yoga Intense'
    description=' Level 2 WorkShop'
    color='blue'
  />
 
   <Card
    href='https://www.youtube.com/@satvicyoga'
    header='Free Yoga Claim'
    description=' Subscribe Us on YouTube'
    color='blue'
  />
   <Card
    href='https://yogachallenge.helpsite.com/'
    header='FAQ Page'
    description='Any queries or concerns?'
    color='blue'
  />
   <Card
    href='https://www.youtube.com/watch?v=s2NQhpFGIOg&t=7s'
    header='Important Documents'
    description='Click here to download All resources that we share'
    color='blue'
  />
   <Card
    href='www.instagram.com/invites/contact/?i=1pn48vp1dzqku&utm_content=2ji3a64'
    header='Instagram Page'
    description='Follow Us on Insta'
    color='blue'
  />
  </Card.Group></div>
  )
}

export default Cards