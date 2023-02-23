import React from 'react'
import './Hero.css'
import hero_img from '../../img/airbnb_product.jpg'

const Hero = () => {
  return (
    <div className='hero_container'>
        <img src={hero_img} alt=''/>
        <div className='details'>
            <h1>Online Experiences</h1>
            <p>Join unique interactives activities led by one-of-a-kind hosts-all without leaving home</p>
        </div>
    </div>
  )
}

export default Hero