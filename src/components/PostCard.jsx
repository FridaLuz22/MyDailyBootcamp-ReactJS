import React from "react";
import ButtonDelete from "./ButtonDelete";
import {ImageContentOne, ImageContentTwo, ImageContentThree} from "./ImageContent";
function PostCard(){
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
              <p>04 de Julio, 2022</p>
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
          Hoy aprendí a usar Git. Aprendi a crear un branch, commitear mis
          cambios, hacer pull request y mergearlo!
        </p>
      </div>
      <ImageContentThree/>
    </div>
  )
}

export default PostCard