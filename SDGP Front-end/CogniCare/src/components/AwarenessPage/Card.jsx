// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// // import "./blog.css";
// import "../../pages/AwaranessPage/awareness.css";
// import { awareness } from "../../assets/data/data";
// // import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
// import { Link } from "react-router-dom";

// export const Card = () => {
//   return (
//     <>
//       <section className="blog">
//         <div className="container grid3">
          
//           {awareness.map((item) => (
//             <div className="box boxItems" key={item.id}>
//               <div className="img">
//                 <img src={item.cover} alt="" />
//               </div>
//               <div className="details">
//                 <Link to={`/details/${item.id}`} className="link">
//                   <h3>{item.title}</h3>
//                 </Link>
//                 <p>
              
//                { item.desc.slice(0,180)}...</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../../pages/AwaranessPage/awareness.css"; // Assuming this contains your custom styles
import { awareness } from "../../assets/data/data"; // Assuming this contains your awareness data
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <section className="blog">
      <div className="container grid3">
        {awareness.map((item) => (
          <div className="box boxItems" key={item.id}>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <div className="details">
              <Link to={`/details/${item.id}`} className="link">
                <h3>
                  <TypeAnimation
                    sequence={[item.title, item.desc]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    // cursor={false}
                  />
                </h3>
              </Link>
              <p>
                <TypeAnimation
                  sequence={[item.desc.slice(0, 180) + "..."]}
                  // cursor={false}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
