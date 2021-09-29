import React from 'react'
import useFirestore from './hooks/useFirestore';

const ImageGrid = ({setSelectedImg}) =>{
    const {docs} = useFirestore('images');
    console.log(docs)

    return(
        <div className="image-grid">
            {docs.map((doc)=>(
                <div key={doc.id} className="image-wrap"
                 onClick={()=>setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="uploaded" />
                 </div>
            ))}
        </div>
    )
}

export default ImageGrid;