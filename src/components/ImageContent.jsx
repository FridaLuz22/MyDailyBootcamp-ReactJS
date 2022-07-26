import React from "react";

function ImageContentThree({images}){

  return(

  <div className="ImageOf3 By-3">
    <div className="Image One" style={{backgroundImage: `url(${images[0]})`}}></div>
    <div className="Image Two" style={{backgroundImage: `url(${images[1]})`}}></div>
    <div className="Image Three" style={{backgroundImage: `url(${images[2]})`}}></div>
  </div>
  )
}

function ImageContentTwo({images}){

  return(
    <div className="ImageOf2" >
      <div className="Image four" style={{backgroundImage: `url(${images[0]})`}}></div>
      <div className="Image five" style={{backgroundImage: `url(${images[1]})`}}></div>
    </div>
  )
}

function ImageContentOne({images}){

  return(
    <div class="ImageOf1">
      <div className="Image six" style={{backgroundImage: `url(${images[0]})`}}></div>
    </div>
  )
}

export {ImageContentOne, ImageContentTwo, ImageContentThree}