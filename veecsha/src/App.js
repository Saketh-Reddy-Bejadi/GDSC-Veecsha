import './App.css';
import './components/Page1.css';
import './components/Header.css';
import React from 'react';
import veecsha from "./assets/Veecsha.png";


export const App = () => {

  const menu = document.getElementById("menu")
  menu.addEventListener("click", () => { 
    menu.classList.toggle("active");
  });

  return (
    <>
      <div className="main">
        <div className='navbar'>
          <img src={veecsha} height="30px" alt="" />
          <ul>
            <a href="Roadmaps"><li className='optdrop' >Web Development</li></a>
            <a href=""><li className='optdrop' >Data Structures & Algorithms</li></a>
          </ul>
          <div id="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='Page1'>
          <p className='heading'>Unleash <span className='you' >You</span>r Power With</p>
          <p className='highlighted'>Veecsha</p>
          <p className='subheading'>Prefer progess over perfection</p>
        </div>
      </div>
    </>
  )
}

