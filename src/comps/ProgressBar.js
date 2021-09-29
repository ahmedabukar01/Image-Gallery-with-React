import React from 'react'
import {useEffect} from 'react'
import UseStorage from './hooks/UseStorage'

const ProgressBar = ({file,setFile}) => {
    const {progress,url} = UseStorage(file);
    
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url])

    return (
        <div className="progress-bar" style={{width:progress + '%'}}></div>
    )
}

export default ProgressBar
