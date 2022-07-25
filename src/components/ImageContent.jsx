import React from "react";

function ImageContentThree(){

  return(
  <div className="ImageOf3 By-3">
    <div className="Image One" style={{backgroundImage: "url(assets/feed/cups-3.jpg)"}}>
    </div>
    <div className="Image Two" style={{backgroundImage: "url(assets/feed/cake.jpg)"}}>
    </div>
    <div className="Image Three" style={{backgroundImage: "url(assets/feed/cake-3.jpg)"}}>
    </div>
  </div>
  )
}

function ImageContentTwo(){

  return(
    <div className="ImageOf2">
      <img className="four" src="assets/feed/cups-2.jpg" alt="cups de postres" />
      <img className="five" src="assets/feed/cake-2.jpg" alt="keke postre" />
    </div>
  )
}

function ImageContentOne(){

  return(
    <div class="ImageOf1">
      <img className="six" src="assets/feed/cups-1.jpg" alt="cups de postres" />
    </div>
  )
}

export {ImageContentOne, ImageContentTwo, ImageContentThree}