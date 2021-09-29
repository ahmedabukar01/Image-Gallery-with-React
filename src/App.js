import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadFile from './comps/UploadFile';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadFile />
      <ImageGrid />
    </div>
  );
}

export default App;
