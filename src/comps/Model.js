import React from 'react'

const Model = ({url,setSelectedImg}) => {

    const clickHandler = (e) =>{
        
        if(e.target.classList.contains('model-backen')){
            setSelectedImg(null)
        }
        
    }
    return (
        <div className="model-backen" onClick={clickHandler}>
          <img src={url} alt="selectedimg" />
        </div>
    )
}

export default Model
