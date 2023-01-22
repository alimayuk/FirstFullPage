import React, { useState, useEffect } from 'react'
import './Home.css'
import chain from '../../assets/homeBlockC.png'
import women from '../../assets/womenPh.jpg'
import { lineP } from '../propss/underp'

const Home = () => {

  const [homeItem, setHomeItem] = useState([]);

  useEffect(() => {
    setHomeItem(lineP())
  }, [])


  return (
    <div>
      <div className='home' id='home'>
        {/* Home left Side */}
        <div className='homeLeft'>
          <div className='leftHeader'>
            <p className='squareHome'></p>
            <span>*current activity(TPS)-13</span>
          </div>
          <div className='leftBody'>
            <p className='bodyText'>Blockchain <br /> Creators <br /> Economy</p>
          </div>
          <div className='leftFooter'>
            <button type="button">BUILD ON HONEY</button>
            <a href="#koycam">PRODUCTS</a>
          </div>

        </div>


        {/* Home right Side */}

        <div className='homeRight'>
          <img className='rightdolarPhoto' src={chain} alt="block" />
        </div>
      </div>

      <hr className='line' />

      <div className='homeFooter'>
        <div className='hfl'>
          <div className='spanhfl'></div>
          <img src={women} className='womenPh' alt='women' />
          <span>Discover your <br /> Honey Community</span>
        </div>


        <div className='hfr'>
          <ul className='lineProps'>
            {homeItem.map((s) =>
              <li key={s.id}>
                <h1>{s.title}</h1>
                <p>{s.subtext}</p>
                <span>{s.date}</span>
                <br />
              </li>
            )}
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Home
