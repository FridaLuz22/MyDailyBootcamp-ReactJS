import React,{useState} from "react";
import ImagesMiniature from "./UploadImageMiniature";

function ModalNewPost({openModalNewPost,setModalNewPost}){ 
  const [images, setImages]=useState([])
  let onFileChange=(e)=>{
    const fileObject = e.currentTarget.files[0];
    const fileUrl=URL.createObjectURL(fileObject);
    setImages([...images,fileUrl])
    console.log([...images,fileUrl])
  }

  const [showWarning, setShowWarning]=useState(false)
  const[valueTextarea, setvalueTextarea]=useState("")
  let changeStateText=(e)=>{
    setvalueTextarea(e.target.value)
    setShowWarning(false)
  }
  let buttonPublish=()=>{
    if(valueTextarea==""){
      setShowWarning(true)
    }
  }

  const[openLocation, setOpenLocation]=useState(false)
  let buttonOpenLocation=()=>{
    if(openLocation){
      setOpenLocation(false)
    }else{
      setOpenLocation(true)
    }
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    savePosition(position)
  });

  async function savePosition(position) {
    let { latitude, longitude } = position.coords;
    let response = await fetch(
      "https://eu1.locationiq.com/v1/reverse?key=pk.d7081966f4a73ff67138855cfeb0e4ec&lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&format=json"
    );
    let responseJson = await response.json();
    let {town,country } = responseJson.address;
    let location = " " + town + ", " + country;
    document.querySelector(".geolocation_position").innerHTML = "From: " + location;
  }

  return(
    <div className={openModalNewPost?"modal-input":"modal-input visibility-hidden"} id="modal-add-post">
      <div className="modal-container-input">
        <div className="buttom-input-x">
          <span className="close-input" onClick={()=>{
            setModalNewPost(false)
          }}>&times;</span>
        </div>
        <div className="content-modal-input">
          <div className="cont-input">
            <h2>What did you learn today Paul?</h2>
            <div className="input-today">
              <textarea name="text" value={valueTextarea} onChange={changeStateText} className="textarea-modal-add-post" cols="20" rows="5" maxLength={"140"} placeholder="Today I Learnd...."></textarea>
            </div>
            <div className= {openLocation?"location-modal":"location-modal displayNone"}>
              <span className="geolocation_position"></span>
            </div>
            <div className={showWarning?"warning":"warning displayNone"}>
              <span>Really? Did not you learning anything? This field is required!</span>
            </div>
            <div className="buttoms-span">
              <div className="span-img-location">
                <div className="span-upload-image">
                  <input type="file" id="upload-files" accept="image/*" multiple onChange={onFileChange}/>
                  <label htmlFor="upload-files"><img src="./assets/modal/upload-modal.png"  alt="upload-image" /></label>                  
                </div>
                <button className="span-location" onClick={buttonOpenLocation}>
                  <img src="./assets/modal/location-modal.png" alt="location"/>
                </button>
              </div>
              <button className="publish-post" onClick={buttonPublish}>Publish</button>
            </div>
          </div>
        </div>
        <div className="uploaded-image">
          {images.map((image, index) => <ImagesMiniature setImages={setImages} index={index} urlImage={image} key={"image" + index}/> )}
        </div>
      </div>
    </div>
  )
}

export default ModalNewPost