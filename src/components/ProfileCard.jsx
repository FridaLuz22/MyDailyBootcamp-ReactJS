import React from 'react';

function ProfileCard(){
  return(
    <div className="Profile-card">
      <img src="../public/assets/me.jpg" alt="Perfil del usuario"/>
      <h3>Paul Portillo</h3>
      <span>Software Enginner</span>
      <div className="buttons">
        <a href="https://twitter.com/yummta?lang=es" target={"_blank"} className="profile-c"><b>@yummta</b></a>
        <a href="https://www.linkedin.com/in/yummta/" target={"_blank"} className="profile-c"><b>LinkedIn</b></a>
      </div>
    </div>
  )
}

export default ProfileCard