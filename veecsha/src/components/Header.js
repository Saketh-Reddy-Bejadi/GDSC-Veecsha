import { useState } from 'react';
import "./Header.css";

export const Header = () => {

  // const [display,setDisplay]=useState(false); 


  return (
    <>
      <nav>
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" height="60px" alt="" />
        <ul >
          <a href="Roadmaps"><li className='optdrop' >Roadmaps</li></a>
          <a href=""><li className='optdrop' >Cheatsheets</li></a>
          <a href=""><li className='optdrop' >Installation</li></a>
        </ul>

      </nav>
    </>
  )
}
