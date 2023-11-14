import React, { useEffect ,useRef } from 'react'
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap";


// on instancie nos plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)


const Header = () => {

    const titleRef = useRef()

    useEffect(()=> {
      onLoad()
    }, []);


    const onLoad = () => {
      gsap.timeline({
        onComplete: function () {
        }
      })
        .fromTo(".letter",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.33,
          delay: 0.7
        }      
      )
      .to(".title", {
        y: 45,
        delay: 0.7
      })
      .to(".letter", {
        margin: "0 5vw",
        delay: 0.8,
        duration: 0.5
      })
      .to(".letter", {
        margin: "0",
        delay: 0.8,
        duration: 0.5
      })
      .to(".letter", {
        x: -titleRef.current.clientWidth,
        delay: 1,
        duration: 2,
        rotate: -360
      })
      .to(".title", {
        y: 0
      })
      .to(".letter", {
        x: 0,
        delay: 1,
        duration: 2
      })
    }

  return (
    <>

        <h3 className="title" ref={titleRef}>
          <span className="letter">T</span>
          <span className="letter">O</span>
          <span className="letter">D</span>
          <span className="letter">O</span>
          <span className="letter">-</span>
          <span className="letter">L</span>
          <span className="letter">I</span>
          <span className="letter">S</span>
          <span className="letter">T</span>
        </h3>
    </>

  )
}



export default Header; 
