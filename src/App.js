import React from 'react';
import ImageGrid from './comps/ImageGrid';
import { useState } from 'react';
import Title from './comps/Title';
import UploadFile from './comps/UploadFile';
import Model from './comps/Model';

function App() {
  const [selectedImg,setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadFile />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Model url={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
