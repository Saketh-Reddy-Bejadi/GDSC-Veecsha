import './App.css';
import './components/Page1.css';
import './components/Header.css';
import Menu from './components/Menu';
import React from 'react';
import veecsha from "./assets/Veecsha.png";
import { SideBar } from './components/SideBar';
import { useState } from 'react';

export const App = () => {

  const [viewBox,setVewBox]=useState(false);

  const MenuOpen=()=> {
      setVewBox(!viewBox);
  }

  return (
    <>
      <div className="main">
        <div className='navbar'>
          <img src={veecsha} height="30px" alt="" />
          <div className='NavPart2' >
          <ul>
            <a href="Web-development"><li className='optdrop' >Web Development</li></a>
            <a href=""><li className='optdrop' >Data Structures & Algorithms</li></a>
          </ul>
          <Menu MenuOpen={MenuOpen} setVewBox={setVewBox} viewBox={viewBox}/>
          <SideBar MenuOpen={MenuOpen} setVewBox={setVewBox} viewBox={viewBox}/>
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

