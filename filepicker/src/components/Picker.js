import React, { useRef } from 'react';

function Picker() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a File</button>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
    </div>
  );
}


export default Picker