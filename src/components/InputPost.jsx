import React from 'react';

function InputPost(){
  return(
    <div className="learning-content" data-component="FormInput">
      <form className="learning-form">
        <input type="text" className="learning-input" placeholder="What did you learn today Paul?"/>
        <button className="learning-button" type="button">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                className="arrow"
                d="M8.23413 19L8.23413 1.08571"
                stroke="#788292"
              />
              <path
                className="arrow"
                d="M15.5 8.35142L8.23423 1.08569L0.968505 8.35142"
                stroke="#788292"
              />
            </g>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default InputPost