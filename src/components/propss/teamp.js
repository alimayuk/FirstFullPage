import React from 'react'
import '../Team/Team.css'
import {GrInstagram,GrTwitter,GrLinkedin} from 'react-icons/gr'


const Card = (props) => {
  return (
    <div className='teamCard'>
       <img src={props.img} alt={`Your alt text`} className="teamImg"/>
       <div className='titleT'><span className='nameteam'>{props.name}</span><br/>{props.rol}</div>
       <p className='desc'>{props.description}</p>
       <div className='sociall'>
        <a href={props.inst}><GrInstagram/></a>
        <a href={props.twitter}><GrTwitter/></a>
        <a href={props.link}><GrLinkedin/></a>
       </div> 
    </div>
  )
}

export default Card
