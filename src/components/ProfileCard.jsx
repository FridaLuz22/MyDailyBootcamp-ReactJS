import React from 'react';

function ProfileCard({datos}){
  return(
    <div className="Profile-card">
      <img src={datos.profile_url} alt="Perfil del usuario"/>
      <h3>{datos.full_name}</h3>
      <span>{datos.title}</span>
      <div className="buttons">
        <a href="https://twitter.com/yummta?lang=es" target={"_blank"} className="profile-c"><b>@yummta</b></a>
        <a href="https://www.linkedin.com/in/yummta/" target={"_blank"} className="profile-c"><b>LinkedIn</b></a>
      </div>
    </div>
  )
}

export default ProfileCard