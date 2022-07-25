import React from "react";

function ImageContentThree(){

  return(
  <div className="ImageOf3">
    <img src="assets/feed/cups-3.jpg" alt="cups de postres" />
      <div class="sub-img">
        <img src="assets/feed/cake.jpg" alt="cuk postre" />
        <img src="assets/feed/cake-3.jpg" alt="keke postre" />
      </div>
  </div>
  )
}

function ImageContentTwo(){

  return(
    <div class="ImageOf2">
      <img src="assets/feed/cups-2.jpg" alt="cups de postres" />
      <img src="assets/feed/cake-2.jpg" alt="keke postre" />
    </div>
  )
}


function ImageContentOne(){

  return(
    <div class="ImageOf1">
      <img src="assets/feed/cups-1.jpg" alt="cups de postres" />
    </div>
  )
}

export {ImageContentOne, ImageContentTwo, ImageContentThree}