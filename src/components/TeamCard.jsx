import React from 'react';

function TeamCard(){
  return(
    <div className="teams">
      <h2>My team</h2>
      <div className="container-team">
        <div className="date-teams1" data-component="TeamCard">
          <a className="link-team" href="#">
            <img className="team-img" src="assets/team/team-1.jpg" alt="Alden Cantrell"/>
            <p className="text-teams">Alden Cantrell</p>
          </a>
        </div>
        <div className="date-teams">
          <a className="link-team" href="#">
            <img className="team-img" src="assets/team/team-2.jpg" alt="Thomas Crane"/>
            <p>Thomas Crane</p>
          </a>
        </div>
        <div className="date-teams">
          <a className="link-team" href="#">
            <img className="team-img" src="assets/team/team-3.jpg" alt="Miranda Shaffer"/>
            <p>Miranda Shaffer</p>
          </a>
        </div>
        <div className="date-teams2">
          <a className="link-team" href="#">
            <img className="team-img" src="assets/team/team-4.jpg"alt="Alvaro Mcgee"/>
            <p>Alvaro Mcgee</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
