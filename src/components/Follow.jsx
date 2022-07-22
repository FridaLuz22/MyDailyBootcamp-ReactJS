import React from "react";

function FollowMe(){
  return(
    <div className="Follow-P">
      <h3>Who to Follow</h3>
      <div className="follow">
        <div className="follow-date">
          <div className="info">
            <a
              className="link-follow"
              href="https://twitter.com/condef5"
              target={"_blank"}
            >
              <img
                src="assets/instructors/condef5.jpeg"
                alt="foto de perfil de un usuario"
                className="instructor-profile"
              />
              <p>@condef5</p>
              <img src="assets/icons/twitter-check.svg" alt="check" />
            </a>
          </div>
          <button className="follow-1"><b>Follow</b></button>
        </div>
        <div className="follow-date">
          <div className="info">
            <a
              className="link-follow"
              href="https://twitter.com/yummta?lang=es"
              target={"_blank"}
            >
              <img
                src="assets/instructors/yummta.jpeg"
                alt="Paul Portillo"
                className="instructor-profile"
              />
              <p>@yummta</p>
              <img src="assets/icons/twitter-check.svg" alt="check" />
            </a>
          </div>
          <button className="follow-1"><b>Follow</b></button>
        </div>
      </div>
    </div>
  )
}

export default FollowMe