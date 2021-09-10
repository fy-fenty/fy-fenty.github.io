import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>Site Map</li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>email: xxxxxx@hotmail.com</li>
        <li>phone: xxxxxxxx</li>
      </ul>
    </footer>
  )
}
