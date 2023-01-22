import React from 'react'
import './ContactUs.css'
import Card from '../propss/contactbox'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { VscFileCode } from 'react-icons/vsc'
import { SiLivechat } from 'react-icons/si'

const ContactUs = () => {


    return (
        <div className='Contact' id='contact'>
            <h1>Contact Us</h1>
            <div className='contactBoxs'>
                <Card
                    icon={<TfiHeadphoneAlt />}
                    title="by phone"
                    subText="North America Toll-Free:"
                    subText2="1-877-930-7483"
                    buttonText="Call"
                />
                <Card
                    icon={<VscFileCode />}
                    title="start a new case"
                    subText="Just send us your questions or concerns by startşng a new case and we will give you the help you need."
                    buttonText="start here"
                />
                <Card
                    icon={<SiLivechat />}
                    title="live chat"
                    subText="Chat with a member of our in-house team."
                    buttonText="start chat"
                />
            </div>
        </div>
    )
}

export default ContactUs
