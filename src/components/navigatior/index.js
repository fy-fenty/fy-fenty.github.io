import React, { useEffect, useState } from 'react';
import './Navigatior.scss';

export default function Navigatior() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log(x, y);
  }, [x, y]);

  return (
    <nav>
      <ul>
        <li onClick={() => setX(x+1)}>Home</li>
        <li onClick={() => setY(y+1)}>About</li>
      </ul>
    </nav>
  )
}
