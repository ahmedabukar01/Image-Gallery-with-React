import React from 'react';
import {useState} from 'react';

const UploadFile = () =>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);


    const type = ['image/png','image/jpeg'];

    const changeHandler = (e)=>{
        const selected = e.target.files[0];
        
        if(selected && type.includes(selected.type)){
            setFile(selected)
            setError('');
        } else{
            setError('please select valid image such as (png or jpeg)')
        }
    }
    return(
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}
export default UploadFile;