import React, { useEffect } from "react";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import FirstHeadShot from './images/nigga.jpeg'
import Jail from './images/jail.jpeg'
import FortWorth from './images/fort_worth.jpeg'
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
    var triggers = document.querySelector("#triggers")

    triggers.style.top = `-${para.scrollTop}px`;
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
      let skyline = document.querySelector('.fortworth');
      flip.style.transform = `rotateX(${e.progress * 180}deg)`
      skyline.style.opacity = `${e.progress}`
    })
  }, []);

  

  return (
  <>
    <div className="triggers" id="triggers">
      <div id="header_two_trigger" class="outline"></div>
      <div id="krayon_logo_trigger"class="outline"></div>
      <div id="header_two_flip_one"></div>
    </div>

    <Parallax pages={4} id="parallax">
      <ParallaxLayer speed={1.1}>
        <h3>Hello World</h3>
        <div class="auto_max port_info">
          <div class="infoinfo">
            <h1>What's Good, Hoes</h1>
            <p>I'm Mark's Offline.</p>
            <p>I like to do a bit of programming on my free time.</p>
          </div>
        </div>
        <img src={Krayon} alt="Krayon Logo" class="krayon visible" id="krayon_logo"/>
      </ParallaxLayer>

      <ParallaxLayer speed={5.5} style={{zIndex: 5}}>
        <div class="auto_max">
          <img src={StrawHat} alt="Stawhat's Flag Logo" class="straw"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={5} style={{zIndex: 5}}>
        <div class="auto_max">
          <img src={Texas} alt="Texas Flag" class="texas"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer  speed={4} style={{zIndex: 4}}>
        <div class="auto_max">
          <img src={FirstHeadShot} alt="Me" class="first_port portrait left"/>
          <img src={Oklahoma} alt="Oklahoma Flag" class="okla left"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={2.5}>
        <div class="auto_max">
          <img src={Jail} alt="Not a mug shot" class="lil_portrait right mug"/>

          <img src={KSG} alt="Kids See Ghosts Album Cover" class="album ksg"/>
          <img src={Illmatic} alt="Illmatic Album Cover" class="album illmatic"/>
          <img src={Utopia} alt="Utopia Album Cover" class="album utopia"/>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 0, end: 2}}>
        <div class="auto_max no_margin im_from">
          <div class="im_from_info">
            <div class="front">
              <p>So Uhh</p>
              <h1 class="header_two">Where am I from?</h1>
            </div>
            <div class="back">
              <h1 class="header_two">Fort Worth</h1>
              <p>Texas</p>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 1.1, end: 2}} speed={1} style={{ zIndex:-1 }}>
        <div class="auto_max fortworth">
          <img src={FortWorth} alt="Fort Worth Skyline" class=""/>
        </div>
      </ParallaxLayer>
    </Parallax>
  </>
  )
}
