import React from "react";

function Navbar(){
  return(
    <div className="header-wrapper">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link active" href="#"> All </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Me </a>
            </li>
          </ul>
        </nav>
        <div className="header-logo">
          <a className="logo-link" href="index.html">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.428 12.428C18.1488 12.1488 17.7932 11.9584 17.406 11.881L15.019 11.404C13.7107 11.1424 12.3524 11.3243 11.159 11.921L10.841 12.079C9.64763 12.6757 8.28938 12.8576 6.98102 12.596L5.05002 12.21C4.72722 12.1455 4.39349 12.1617 4.07845 12.2571C3.76341 12.3525 3.47678 12.5242 3.24402 12.757M7.00002 1H15L14 2V7.172C14.0001 7.70239 14.2109 8.21101 14.586 8.586L19.586 13.586C20.846 14.846 19.953 17 18.171 17H3.82802C2.04602 17 1.15402 14.846 2.41402 13.586L7.41402 8.586C7.78911 8.21101 7.9999 7.70239 8.00002 7.172V2L7.00002 1Z" stroke="#203758" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="logo-text">My Daily Bootcamp</h2>
          </a>
        </div>
      </header>
    </div>
  )
}
export default Navbar