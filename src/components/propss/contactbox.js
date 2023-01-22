import React from 'react'
import '../ContactUs/ContactUs.css'

const Card = (props) => { 
    
    return (
        <div className='card'>
            <div className='cardBody'>
            <span className='icons'>{props.icon}</span>
                <div className='cardAbout'>
                    <h2 className='cardTitle'>
                        {props.title}
                    </h2>
                    <p className='cardText'>
                       {props.subText}
                    </p>
                    <span>{props.subText2}</span>
                </div>
                <button type="button" className='cardButton'>{props.buttonText}</button>
            </div>
        </div>
    )
    
}

export default Card
