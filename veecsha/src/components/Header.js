import React from 'react'
import Menu from './Menu'
import { SideBar } from './SideBar';


export const Header = ({MenuOpen,toggleMenu,viewBox,isOpened}) => {
  return (
    <div>
        <div className="shadow"></div>
        <div className='navbar'>
          <p className='brnd' >Veecsha</p>
          <div className='NavPart2' >
          <ul>
            <a href="Web-development"><li className='navBtn webBtn' >Web Development</li></a>
            <a href="DSA"><li className='navBtn dsaBtn'>Data Structures & Algorithms</li></a>
          </ul>
          <Menu MenuOpen={MenuOpen} toggleMenu={toggleMenu} isOpened={isOpened}/>
          <SideBar MenuOpen={MenuOpen} toggleMenu={toggleMenu} viewBox={viewBox}/>
          </div>
        </div>
    </div>
  )
}
