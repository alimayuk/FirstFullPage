import React from 'react'
import './getStart.css'

const Contact = () => {
  return (
    <div className='contact' id="getstart">
        <h1 className='contactfH'>GET START</h1>
        <div className='bg'>
      <h1 className='contactH'>We are here to help <br/>you grow your <br/> business</h1>
        <form action="asdasd"className='cForm'>
            <label for="fname">NAME:</label>
            <input type="text" name="fname" placeholder='Full Name' id='fname' required/>
            <label for="fname">EMAIL:</label>
            <input type="email" name="fmail" placeholder='Your EMail Address' id='fmail'/>
            <label for="fname">PASSWORD:</label>
            <input type="password" name="fpass" placeholder='Password' id='fpass'/>
            <button type="button">Sign Up</button>
        </form>
      
      </div>
    </div>
  )
}

export default Contact
