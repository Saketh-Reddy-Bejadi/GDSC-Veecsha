import React from 'react';
import "./Header.css";

export const Header = () => {
  return (
    <>
      <nav>
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" height="60px" alt="" />
        <ul>
          <li className='optdrop' >Roadmaps</li>
          <li className='optdrop' >Cheatsheets</li>
          <li className='optdrop' >Installation</li>

        </ul>
      </nav>
    </>
  )
}
