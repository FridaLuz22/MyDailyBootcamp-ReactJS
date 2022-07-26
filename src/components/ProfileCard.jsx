import React from 'react';

function ProfileCard({datos}){
  return(
    <div className="Profile-card">
      <img src={datos.profile_url} alt="Perfil del usuario"/>
      <h3>{datos.full_name}</h3>
      <span>{datos.title}</span>
      <div className="buttons">
        <a href={datos.twitter_url} target={"_blank"} className="profile-c"><b>@yummta</b></a>
        <a href={datos.linkedin_url} target={"_blank"} className="profile-c"><b>LinkedIn</b></a>
      </div>
    </div>
  )
}

export default ProfileCard