import React, { useEffect } from "react";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import FirstHeadShot from './images/nigga.jpeg'
import Jail from './images/jail.jpeg'

import FortWorth from './images/fort_worth.jpeg'
import Galveston from './images/galveston.jpeg'
import Rockwall from './images/rockwall.jpg'

import Texas from './images/Flag_of_Texas.jpeg'
import Oklahoma from './images/Flag_of_Oklahoma.jpeg'
import StrawHat from './images/Straw-Hat-Logo.png'

import KSG from './images/Kids_See_Ghosts_Cover.jpeg'
import Illmatic from './images/IllmaticNas.jpeg'
import Utopia from './images/Travis Scott - Utopia.jpeg'

import Krayon from './images/krayon-logo.png'


export default () => { 
  function moveTriggers() {
    const para = document.querySelector("#parallax");
    const triggers = document.querySelector("#triggers");

    triggers.style.top = `${-para.scrollTop}px`;
  }

  useEffect(() => {
    let para = document.querySelector("#parallax");
    para.addEventListener("scroll", moveTriggers);


    // Remove Logo
    new ScrollMagic.Scene({
      triggerElement: "#krayon_logo_trigger",
      duration: "20%",
      offset: 0
    })
    .addTo(controller)
    .on('progress', (e) => {
      let logo = document.querySelector('.krayon');
      logo.style.opacity = 1.0 - e.progress;
    })

    // Reveil second header
    new ScrollMagic.Scene({
      triggerElement: "#header_two_trigger",
      duration: "10%",
      offset: 0,
    })
    .addTo(controller)
    .on('progress', (e)=>{
      let secondHeader = document.querySelector('.im_from');
      secondHeader.style.opacity = e.progress;
      secondHeader.style.transform = `translateY(calc(65vh + ${3 * (1-e.progress)}em))`
    })
    // Flip header to reveal the city im from
    new ScrollMagic.Scene({
      triggerElement: "#header_two_flip_one",
      duration: "10%",
      offset: 0,
    })
    .addTo(controller)
    .on('progress', (e)=>{
      let flip = document.querySelector('.im_from_info');
      document.querySelector('.im_from_info p').innerHTML = "So uhh";
      document.querySelector('.im_from_info h1').innerHTML = "Where am I from?";

      let skyline = document.querySelector('.skylines');
      flip.style.transform = `rotateX(${e.progress * 180}deg)`
      skyline.style.opacity = `${e.progress}`
    })

    new ScrollMagic.Scene({
      triggerElement: "#galveston_flip",
      duration: "50%",
      offset: 0
    })
    .addTo(controller)
    .on('progress', (e)=> {
      let skyline = document.querySelector('.skylines');
      skyline.style.transform = `rotateY(${e.progress * 180}deg)`

      let flip = document.querySelector('.im_from_info');
      document.querySelector('.im_from_info p').innerHTML = "Later I moved to...";
      document.querySelector('.im_from_info h1').innerHTML = "Galveston (2011-2018)";
      flip.style.transform = `rotateX(${180 - (e.progress * 180)}deg)`
    })

    // Reveal the "what now" text
    new ScrollMagic.Scene({
      triggerElement: "#what_now_reveal",
      duration: "50%",
      offset: 0
    })
    .addTo(controller)
    .on('progress', (e) => {
      let what_now = document.querySelector('#what_now_text');
      what_now.style.opacity = `${e.progress}`
    })
    // Make "the what now" text sticky
    new ScrollMagic.Scene({
      triggerElement: "#what_now_sticky",
      duration: "40%",
      offset: 0
    })
        .addTo(controller)
        .on('progress', (e) => {
          let what_now = document.querySelector('#what_now_text');
          what_now.style.transform = `translateY(${-Math.pow(e.progress, 1) * 45}vh)`
        })
  }, []);

  

  return (
  <>
    <div className="triggers" id="triggers">
      <div id="header_two_trigger" className="outline"></div>
      <div id="krayon_logo_trigger" className="outline"></div>
      <div id="header_two_flip_one"></div>
      <div id="galveston_flip"></div>
      <div id="what_now_reveal"></div>
      <div id="what_now_sticky"></div>
    </div>

    <Parallax pages={6} id="parallax">
      <ParallaxLayer speed={1.1}>
        <h3>Hello World</h3>
        <div className="auto_max port_info">
          <div className="infoinfo">
            <h1>What's Good!</h1>
            <p>I'm Mark's Offline.</p>
            <p>I like to do a bit of programming on my free time.</p>
          </div>
        </div>
        <img src={Krayon} alt="Krayon Logo" className="krayon visible" id="krayon_logo"/>
      </ParallaxLayer>

      <ParallaxLayer speed={5.5} style={{zIndex: 5}}>
        <div class="auto_max">
          <img src={StrawHat} alt="Stawhat's Flag Logo" className="straw"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={5} style={{zIndex: 5}}>
        <div class="auto_max">
          <img src={Texas} alt="Texas Flag" className="texas"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer  speed={4} style={{zIndex: 4}}>
        <div class="auto_max">
          <img src={FirstHeadShot} alt="Me" className="first_port portrait left"/>
          <img src={Oklahoma} alt="Oklahoma Flag" className="okla left"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={2.5}>
        <div class="auto_max">
          <img src={Jail} alt="Not a mug shot" className="lil_portrait right mug"/>

          <img src={KSG} alt="Kids See Ghosts Album Cover" className="album ksg"/>
          <img src={Illmatic} alt="Illmatic Album Cover" className="album illmatic"/>
          <img src={Utopia} alt="Utopia Album Cover" className="album utopia"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 0, end: 2.5}}>
        <div className="auto_max no_margin im_from">
          <div className="im_from_info">
            <div className="front">
              <p>So Uhh</p>
              <h1 className="header_two">Where am I from?</h1>
            </div>
            <div className="back">
              <h1 className="header_two">Fort Worth (2006-2011)</h1>
              <p>Texas</p>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 0, end: 2.5}} speed={1} style={{ zIndex:-1 }}>
        <div className="auto_max img_from">
          <div className="skylines">
            <img src={FortWorth} alt="Fort Worth Skyline" className="fw"/>
            <img src={Galveston} alt="Galveston Skyline" className="ga"/>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} sticky={{start: 2.8, end: 5}} style={{zIndex: 0}} speed={0.5}>
        <div className="center">
          <h1 className="what_about_now" id="what_now_text">What about now?</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={1} style={{ zIndex: 10}} sticky={{start: 4, end: 5}}>
        <div className="auto_max img_from rockwall_section horizontal_split">
            <img src={Rockwall} alt={"Rockwall"} className="rw max image"/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={1.5} style={{zIndex:15}} sticky={{start: 4, end: 5}}>
        <div className="auto_max" style={{display: "block"}}>
          <div className="rockwall_info">
            <h1>Rockwall, TX</h1>
            <p>
              Lived here since August 2023<br/>
              Going to Rockwall High School
            </p>
          </div>
        </div>
      </ParallaxLayer>

    </Parallax>
  </>
  )
}
