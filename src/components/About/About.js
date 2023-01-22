import React, { useEffect, useState } from 'react'
import '../About/About.css'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import office from '../../assets/office.jpg'
import { boxInfooo } from '../propss/aboutInfo'
import { realDetailed } from '../propss/aboutDetailed'

const About = () => {

  const [aboutinfo, setAboutinfo] = useState([]);
  const [detail,setDetail] = useState([]);


  useEffect(() => {
    setAboutinfo(boxInfooo())
  }, [])

  useEffect(()=>{
    setDetail(realDetailed)
  },[])


  return (
    <div className='about' id='about'>
      <div className='aboutop'>
        <p className='atp'>About Us</p>
        <h1 className='ath'>We do things differently...</h1>
        <p className='atp'>We focus on the details of everything we do. All to help
          businesses around the world focus on what's most important
          to them. We pride take in this.
        </p>

        <div className='info'>
          <img src={office} alt="officeInfo" className='infoOf'/> 
          <div className='boxs'>
            {aboutinfo.map((i) =>
            
              <div className='aboutBox'>
                <h1 className='boxHead'>{i.title}</h1>
                <p className='boxSub'>{i.subtext}</p>
                <p className='boxSub'>{i.subtext2}</p>
              </div>
            
            )}

          </div>
          
        </div>

      </div>

      <div className='aboutbot'>
        <p className='atp'>Our Values</p>
        <h1 className='ath'>We're an ambitious and smart team whit a shared mission</h1>
        <p className='atp'>Our shared values keep us connected and guide us as one team</p>
      <div className='infodetailed'>
        {detail.map((d)=>
         <div href='#' className='detailedBox'>
         <AiOutlineUsergroupDelete className='icond'/>
         <p className='detailhead'>{d.headd}</p>
         <p className='detailsub'>{d.subd}</p>
      </div> 
        )}
      </div>
      
      
      </div>
    </div>
  )
}

export default About
