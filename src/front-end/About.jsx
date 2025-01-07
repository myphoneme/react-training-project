import React from 'react';
import './../admin/css/About.css';
import NavBar from './NavBar'

function About() {
  return (
    <>
    <div className="about">
      <NavBar/>

            <h1 className='headingab'>
                <b>Who We Are?</b>
            </h1>
          <p className='para'>
            Founded by IITians, with the objective of making technologies friendly to human beings. The company’s main
            objective is to reach masses and especially in the developing nations where internet and literacy are the
            major challenges.
          </p>
          <p className='para'>
            For initial years, the main thrust is over Voice as it is the most widely used channel over the phone, and
            then over a period of time, these technologies will make roads even into Mobile Apps and embedded devices.
          </p>
      <div className="about2">
        <img
          src="https://www.margaretbourne.com/wp-content/uploads/2022/08/Best-Stock-Photo-Sites-For-Bloggers-FT-1.jpg"
          alt="Loading" className="aboutimg"/>
        <div className="list">
          
          
          <ul className='uolist'>
            <li className='lidata'>Innovate … Not just execute but do something new which creates some standard in the industry.</li>
            <li className='lidata'>Don't do business just to make short-term gains, but do business so that the overall industry gains.</li>
            <li className='lidata'>Integrity is the most precious value and always do things that are right and only right.</li>
            <li className='lidata'>Know the Facts. Good data helps you make the right decisions. Know before you decide.</li>
            <li className='lidata'>
              Don’t work for salary. You work to live, not live to work. Work on what makes you happy. "You only live
              once, and if you work it right, one is enough."
            </li>
          </ul>
        </div>
      </div>
    </div>

    </>
  );
}

export default About;