import React from 'react'
import {Image} from "semantic-ui-react";
import './style.css'

const ImageThumb = ({firstName, lastName, className, src, style}) => {
    const getInitials = () => {
        if(firstName && lastName){
            return `${firstName[0]}${lastName[0]}`
        }
        else{
            return ""
        }
    }
    return (
        <div>
            {
                src && 
                <Image circular width="100%" height="50" src={src} style={style} className={`thumbnail ${className}`} />
            }
            {
                !src && 
                <div style={style} className={`thumbnail ${className}`}>
                    <span>{getInitials()}</span>
                </div>
            }
        </div>
    )
}

export default ImageThumb


// import React from "react";
// import { Image } from "semantic-ui-react";
// // import "./style.css";

// const ImageThumb = ({ firstName, lastName, src, className, style }) => {
//   const getInitials = () => {
//     if (firstName && lastName) {
//       return `${firstName[0]}${lastName[0]}`;
//     } else {
//       return "";
//     }
//   };
//   return (
//     <div>
//       {src && (
//         <Image
//           circular
//           width={45}
//           height={45}
//           src={src}
//           style={style}
//           // className={`thumbnail ${className}`}
//         />
//       )}

//       {!src && (
//         <div style={style className={`thumbnail ${className}`}} >
//           <span>{getInitials()}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageThumb;