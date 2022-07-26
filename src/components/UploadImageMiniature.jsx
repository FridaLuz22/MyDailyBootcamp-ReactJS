import React,{useState} from "react";

function ImagesMiniature({urlImage,setImages, index}){
  let removeImage=()=>{
    setImages((images)=>{
      const imagesClone = [...images]
      imagesClone.splice(index,1)
      console.log(imagesClone)
      return imagesClone
    })
    
  }
  return(
    <div className="image-cell container-img">
      <img src={urlImage} alt="image" />
      <button onClick={removeImage} className="delete-button">Delete</button>
    </div>
  )
}

export default ImagesMiniature