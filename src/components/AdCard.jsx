import React from "react";

function AdCard(){
  return(
    <div className="notice-section">
      <div className="notice-single">
        <article className="notice-article notice-article1">
          <h3 className="notice-tittle">Bootcamp X</h3>
          <p className="notice-text">Learn working in a real environment</p>
          <a
            className="notice-button"
            href="https://twitter.com/condef5"
            target={"_blank"}
            >Explore All</a>
        </article>
        <footer className="notice-footer">
          <div className="notice-avatars">
            <img
              className="avatar avatar1"
              src="./assets/companies/profile-1.jpg"
              alt="photo 1"
            />
            <img
              className="avatar avatar2"
              src="./assets/companies/profile-2.jpg"
              alt="photo 2"
            />
            <img
              className="avatar avatar3"
              src="./assets/companies/profile-3.jpg"
              alt="photo 3"
            />
          </div>
          <span className="participants-text">12 participants</span>
        </footer>
      </div>
      <div className="notice-single">
        <article className="notice-article notice-article2">
          <h3 className="notice-tittle">Mali</h3>
          <p className="notice-text">Join events near you for free</p>
          <a className="notice-button" href="https://mali.pe/" target={"_blank"}
            >Explore All</a>
        </article>
        <footer className="notice-footer">
          <div className="notice-avatars">
            <img
              className="avatar avatar1"
              src="./assets/companies/profile-4.jpg"
              alt="photo 1"
            />
            <img
              className="avatar avatar2"
              src="./assets/companies/profile-5.jpg"
              alt="photo 2"
            />
            <img
              className="avatar avatar3"
              src="./assets/companies/profile-6.jpg"
              alt="photo 3"
            />
          </div>
          <span className="participants-text">18 participants</span>
        </footer>
      </div>
    </div>
  )
}

export default AdCard