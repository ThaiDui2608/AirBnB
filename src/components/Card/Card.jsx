import React from 'react'
import './Card.css'
import { AiFillStar } from 'react-icons/ai'

const Card = (props) => {
  return (
             <div className='card_container'>
         <img src={props.img} alt={props.alt}/>
        
         <div className='card_info'>
             <p className='rate'>
                 <AiFillStar className='icon'/> 5.0 <span>(6) USA</span>
             </p>
             <p className='title'>{props.title}</p>
             <p className='price'><strong>From $316</strong>/ person</p>
         </div>
     </div>

  )
}

export default Card