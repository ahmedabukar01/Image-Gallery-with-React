import React from 'react'
import UseStorage from './hooks/UseStorage'

const ProgressBar = ({file,setFile}) => {
    const {progress,url} = UseStorage(file);
    console.log(progress,url)

    return (
        <div className="progress-bar">progress</div>
    )
}

export default ProgressBar
