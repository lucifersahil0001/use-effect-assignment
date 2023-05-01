import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'); // initial image url
  const [counter, setCounter] = useState(0); // counter state to trigger useEffect

  useEffect(() => {
    // fetch a new image URL on every counter change
    fetch('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
      .then((response) => {
        setImageUrl(response.url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [counter]);

  // function to handle the button click
  const handleButtonClick = () => {
    setCounter((prevCounter) => prevCounter + 1); // increment the counter state to trigger useEffect
  };

  return (
    <div>
      <img src={imageUrl} alt="Random" /> {/* display the current image */}
      <br />
      <button onClick={handleButtonClick}>Change Image</button> {/* button to trigger useEffect */}
    </div>
  );
}

export default Photoc;
