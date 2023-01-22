import React, { useEffect, useState } from 'react'
import '../Footer/Footer.css'
import {GrInstagram,GrTwitter,GrLinkedin} from 'react-icons/gr'
import { foott,desin,realcompany } from '../propss/footerlist'
const Footer = () => {

  const [footList, setFootList] = useState([]);
  const [listDesing, setListDesing] = useState([]);
  const [listCompany, setListCompany] = useState([]);
  useEffect(() => {
    setFootList(foott())
  }, [])
  useEffect(() => {
    setListDesing(desin())
  }, [])
  useEffect(() => {
    setListCompany(realcompany())
  }, [])



  return (
    <footer className='footer'>
      <div className='aboutFooter'>
        <div className='fa'>
          <h3 className='faH'>For Developer</h3>
          <ul>
            {footList.map((ft) =>
              <li key={ft.id}>
                <a href={ft.href} className=''>{ft.title}</a>
              </li>
            )}
          </ul>
        </div>
        <div className='fa'>
          <h3 className='faH'>Hire designers</h3>
          <ul>
            {listDesing.map((ds) =>
              <li key={ds.id}>
                <a href={ds.href} className=''>{ds.title}</a>
              </li>
            )}
          </ul>
        </div>
        <div className='fa'>
          <h3 className='faH'>Company</h3>
          <ul>
            {listCompany.map((c) =>
              <li key={c.id}>
                <a href={c.href} className=''>{c.title}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <hr/>
      <div className='lastcom'>
      <p className='lastp'>© 2023 SONOX. All rights reserved.</p>
      <div className='sociall'>
        <a href="insta"><GrInstagram/></a>
        <a href="twitter"><GrTwitter/></a>
        <a href="linktn"><GrLinkedin/></a>
       </div> 
      </div>
    </footer>

  )
}

export default Footer
