import React, { useState } from 'react';

const App = () =>{

  let clock = new Date().toLocaleTimeString();

  const [currentTime,setTime] = useState(clock);

  setInterval(function(){
    setTime(new Date().toLocaleTimeString())
  },1000);

  return(
    <>
      <div className='container'><h1>{currentTime}</h1></div>
    </>
  );
}

export default App;