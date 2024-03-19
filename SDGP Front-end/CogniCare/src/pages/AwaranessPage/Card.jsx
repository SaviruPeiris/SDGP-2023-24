import React from "react"
import "./awareness.css"
import "../../components/AwarenessPage/blog.css"
import { awareness } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import NavBarTest from "../../components/NavBar/NavBarTest"

export const Card = () => {
  return (

   
    
 <>
 <NavBarTest></NavBarTest>
  <section className='awareness'>
   <div className='container grid3 card'>
     {awareness.map((item) => (
       <div className=' box cardItems' key={item.id}>
         <div className='img'>
           <img src={item.cover} alt='' />
         </div>
         <div className='details'>
             <h3>{item.title}</h3>
           <p>{item.desc.slice(0, 180)}...</p>
        
           <></>



             <Link to={`/details/${item.id}`} className='link'>
             <Button variant="ViewMore">View more</Button>{''}
          
              </Link>
           </div>
         </div>

     ))}
   </div>
 </section> 
</>
    

  )
}

