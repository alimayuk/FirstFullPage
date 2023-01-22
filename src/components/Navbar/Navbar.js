import React, { useState, useEffect } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import { getTopNav } from '../../data/navbars';

const Navbar = () => {

    const [show,setShow] = useState(true)
    const [navItem, setNavItem] = useState([]);
    const [toggle, setToggle] = useState(false)

    const handlToggle = () => { 
        setToggle(!toggle)
        setShow(current  => !current)
    }

    useEffect(() => {
        setNavItem(getTopNav())
    }, [])


    return (
        <div className='nav'>

            {/*  left side  */}

            <div className='nav-left'>
                <div className='nav-logos'>
                    <img src={logo} alt="logo" className='logo' />
                </div>
                <span className='logoText'>SONOX</span>
            </div>

            {/*  middle side  */}

{show &&
            <div className='activeLink'>
                <ul className='nav__menu'>
                    {navItem.map((item) =>
                        <li key={item.id}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    )}
                </ul>           
            </div>

}
            <div className='menuIcon'>
                    {
                        toggle === false ?
                            <AiOutlineMenu className='Menuicons' onClick={handlToggle} /> :
                            <AiOutlineClose className='Menuicons' onClick={handlToggle} />
                    }
                </div>

            {/*  right side  */}
            <a href='#getstart' className='goStart'>
                <span>GET STARTED</span>
                <BsFillArrowRightCircleFill className='startIcon' />
            </a>

        </div>
    )
}

export default Navbar
