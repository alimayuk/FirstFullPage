import React from 'react'
import '../Team/Team.css'
import Card from '../propss/teamp'

const Team = () => {
  return (
    <div className='team' id='team'>
      <h1 className='mainHead'>TEAM</h1>
     <div className='allTeam'>
      <Card
      img={require('../../assets/team4.jpg')}
      name="Phoenix Baker"
      rol="Founder & CEO"
      description="Former co-founder of Opendoor. Early staff at
      Sportify and Clearbit."
      inst="#ali"
      twitter="#ali"
      link="#ali"
      />
      <Card
      img={require('../../assets/team1.jpg')}
      name="Olivia Rhye"
      rol="Engineering Manager"
      description="Lead engineering teams at Figma
      ,Pitch and Protocol Labs."
      inst="#ali"
      twitter="#ali"
      link="#ali"
      />
      <Card
      img={require('../../assets/team5.jpg')}
      name="Lana Steiner"
      rol="Product Manager"
      description="Former PM for Linear, Lamda
      School and On Deck."
      inst="#ali"
      twitter="#ali"
      link="#ali"
      />
      <Card
      img={require('../../assets/team2.jpg')}
      name="Candice Wu"
      rol="Backend Developer"
      description="Lead backend dev at Clearbit.
      Former Clearbit and Loom."
      inst="#ali"
      twitter="#ali"
      link="#ali"
      />
      <Card
      img={require('../../assets/team3.jpg')}
      name="Natali Craig"
      rol="Product Designer"
      description="Founding design team at Figma.
      Former Pleo, Stripe and Tile"
      inst="#ali"
      twitter="#ali"
      link="#ali"
      />
      <Card
      img={require('../../assets/team6.jpg')}
      name="Drew Cano"
      rol="UX Researcher"
      description="Lead user research for Slack.
      Contractor for Netflix and Udacity."
      inst="#ali"
      twitter="#ali"
      link="#ali"
      />
      
      </div>
    </div>
  )
}

export default Team
