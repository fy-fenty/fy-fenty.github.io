import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('Yao');
  useEffect(() => {
    if (name) {
      localStorage.setItem('name', name);
    }
  })
  
  const [lastName, seteLastName] = useState('Feng');
  useEffect(() => {
    document.title = `${name} - ${lastName}`
  })
  return (
    <div>
      Name: <input onChange={(e) => setName(e.target.value)}></input>
      Lastname: <input onChange={(e) => seteLastName(e.target.value)}></input><br />
      {name} - {lastName}
    </div>
  );
}

export default App;
