import React from 'react';

function TeamCard({team}){
  return(
      <div className="container-team">
        <div className="date-teams1">
          <a className="link-team" href={team.linkedin_url}>
            <img className="team-img" src={team.profile_url}  alt={team.full_name}/>
            <p className="text-teams">{team.full_name}</p>
          </a>
        </div>
      </div>
  )
}

export default TeamCard
