import React,{useState} from "react";
import ButtonDelete from "./ButtonDelete";
import {ImageContentOne, ImageContentTwo, ImageContentThree} from "./ImageContent";
import { compareAsc, format } from 'date-fns';
import { de } from "date-fns/locale";
import StorieCard from "./StorieCard";

function PostCard({data,setModalDelete,team}){
  
  const [options, setOptions]=useState(false)
  let buttonActionsPost=()=>{
    if(options){
      setOptions(false)
    }else{
      setOptions(true)
    }
  }
  
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
                <h3>{data.author.full_name}</h3>
              </a>
              <p>{format(new Date(data.created_at), "dd 'de' MMMM, yyyy")}</p>

            </div>
          </div>
        </div>
        <div className="buttons-actions">
          <button className="public-button" onClick={buttonActionsPost}>
            <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <ellipse cx="2.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                <ellipse cx="9.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
                <ellipse cx="16.5" cy="2.90721" rx="2" ry="2.08247" fill="#788292" />
              </g>
            </svg>
          </button>
          <ButtonDelete open={options} setModalDelete={setModalDelete} /> 
        </div>
      </div>
      <div className="text">
        <p>
          {data.description}
        </p>
      </div>
      {data.images.length === 3 ? <ImageContentThree images={data.images}/> : data.images.length===2 ? <ImageContentTwo images={data.images}/>  : data.images.length===1 ? <ImageContentOne images={data.images}/> : null} 
    </div>
  )
}

export default PostCard