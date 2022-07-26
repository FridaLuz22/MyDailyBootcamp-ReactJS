import React from "react";
import ButtonDelete from "./ButtonDelete";
import {ImageContentOne, ImageContentTwo, ImageContentThree} from "./ImageContent";
import { compareAsc, format } from 'date-fns';
import { de } from "date-fns/locale";

//   format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// dates.sort(compareAsc)
// //=> [
// //   Wed Feb 11 1987 00:00:00,
// //   Mon Jul 10 1989 00:00:00,
// //   Sun Jul 02 1995 00:00:00
// // ]


function PostCard({data}){

  return(
    <div className="public">
      <div className="public-header">
        <div className="public-date">
          <div className="date-conte">
            <a className="link-public" href="https://twitter.com/yummta?lang=es" target={"_blank"}>
              <img className="date-img" src="assets/profile.jpg" alt="Foto de perfil del usuario" />
            </a>
            <div className="date-text">
              <a className="link-public" href="https://twitter.com/yummta?lang=es" target={"_blank"}>
                <h3>Paul Portillo</h3>
              </a>
              <p>{format(new Date(data.created_at), "dd 'de' MMMM, yyyy")}</p>

            </div>
          </div>
        </div>
        <div className="buttons-actions">
          <button className="public-button">
            <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <ellipse cx="2.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                <ellipse cx="9.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                <ellipse cx="16.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
              </g>
            </svg>
          </button>
          <ButtonDelete/> 
        </div>
      </div>
      <div className="text">
        <p>
          {data.description}
        </p>
      </div>
      {/* <ImageContentTwo /> */}
      {data.images.length === 3 ? <ImageContentThree images={data.images}/> : data.images.length===2 ? <ImageContentTwo images={data.images}/>  : data.images.length===1 ? <ImageContentOne images={data.images}/> : null} 
    </div>
  )
}

export default PostCard