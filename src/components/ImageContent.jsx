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
    <div className="ImageOf2" >
      <div className="Image four" style={{backgroundImage: "url(assets/feed/cups-2.jpg)"}}></div>
      <div className="Image five" style={{backgroundImage: "url(assets/feed/cake-2.jpg)"}}></div>
    </div>
  )
}

function ImageContentOne(){

  return(
    <div class="ImageOf1">
      <div className="Image six" style={{backgroundImage: "url(assets/feed/cups-1.jpg)"}}></div>
    </div>
  )
}

export {ImageContentOne, ImageContentTwo, ImageContentThree}