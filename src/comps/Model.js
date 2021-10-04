import React from 'react'
import {motion} from 'framer-motion'

const Model = ({url,setSelectedImg}) => {

    const clickHandler = (e) =>{
        
        if(e.target.classList.contains('model-backen')){
            setSelectedImg(null)
        }
        
    }
    return (
        <motion.div className="model-backen"
        initial={{opacity:0}}
        animate={{opacity:1}}
         onClick={clickHandler}>
          <motion.img src={url} alt="selectedimg"
          initial={{y:"-100vh"}}
          animate={{y:0}}
           />
        </motion.div>
    )
}
// little 

export default Model
