import React from "react"
import "./awareness.css"
import "../../components/AwarenessPage/blog.css"
import { awareness } from "../../assets/data/data"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
export const Card = () => {
  return (
    
 <>
  {/* Mapping through the awareness data to display each item */}

  <section className='awareness'>
   <div className=' container grid3 '>
     {/* Mapping through the awareness data to display each item */}
     {awareness.map((item) => (
       <div className=' box cardItems awarenessCard' key={item.id}>
         <div className='img'>
           <img src={item.cover} alt='' />
         </div>
         <div className='details'>
             <h3>{item.title}</h3>
           <p>{item.desc.slice(0, 180)}...</p>
        
           <></>
             <Link to={`/details/${item.id}`} className='link'>
             < Button className="btn-primary "   variant="ViewMore" style={{ backgroundColor: 'purple' }}>View more</Button>{''}
          
             </Link>
           </div>
         
         </div>
     ))}
   </div>
 </section> 
</>
    

  )
}

