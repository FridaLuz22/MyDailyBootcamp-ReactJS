import React from 'react';

function StorieCard(){
  return(
    <div className="stories">
      <h2 className="tittle-stories">Stories</h2>
      <ul className="stories-sqare">
        <a className="link-stories" href="#" data-component="Storie">
          <li className="frame-storie">
            <div className="img-storie1 img-storie">
              <img
                className="profile-photo"
                src="./assets/stories/profile 1.jpg"
                alt="foto de perfil de un usuario"
              />
              <h3 className="profile-name">Kierra Gentry</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
        </a>
        <a className="link-stories" href="#">
          <li className="frame-storie">
            <div className="img-storie2 img-storie">
              <img
                className="profile-photo"
                src="./assets/stories/profile 2.jpg"
                alt="foto de perfil de un usuario"
              />
              <h3 className="profile-name">Bradyn Krammer</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
        </a>
        <a className="link-stories" href="#">
          <li className="frame-storie">
            <div className="img-storie3 img-storie">
              <img
                className="profile-photo"
                src="./assets/stories/profile 3.jpg"
                alt="foto de perfil de un usuario"
              />
              <h3 className="profile-name">Pierre Cox</h3>
            </div>
            <div className="storie-borde"></div>
          </li>
        </a>
      </ul>
    </div>
  )
}

export default StorieCard