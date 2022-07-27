import React from 'react';

function StorieCard({storie}){
  console.log("storie")
  console.log(storie)
  return(
          <li className="frame-storie">
            <div className="img-storie1 img-storie">
              <img
                className="profile-photo"
                src={storie.profile_url}
                alt="foto de perfil de un usuario"
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="./assets/default.png";
              }}
              />
              <h3 className="profile-name">{storie.full_name}</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
  )
}

export default StorieCard