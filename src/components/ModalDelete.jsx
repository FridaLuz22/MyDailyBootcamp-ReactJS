import React from "react";

function ModalDelete({openModalDelete,setModalDelete}){
  return(
    <div className={openModalDelete?"modal":"modal visibility-hidden"} id="modal-delete-post">
      <div className="modal-container">
        <div className="buttom-x">
          <span className="close" onClick={()=>{
            setModalDelete(false)
          }}>&times;</span>
        </div>
        <div className="content-modal">
          <div className="content-modal-delete-post">
            <h2>Are you sure you want to delete it?</h2>
            <div className="botoms-2x">
              <button className = "close" onClick={()=>{
                setModalDelete(false)
              }}>Cancel</button>
              <button id = "delete-post-button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete