import React from 'react'
import Menu from './Menu'
import { SideBar } from './SideBar'
import veecsha from "../assets/20240113_213310_0000.svg";


export const Header = ({MenuOpen,viewBox}) => {
  return (
    <div>
        <div className='navbar'>
          <img className='brnd' src={veecsha} alt="" />
          <div className='NavPart2' >
          <ul>
            <a href="Web-development"><li className='navBtn webBtn' >Web Development</li></a>
            <a href="DSA"><li className='navBtn dsaBtn'>Data Structures & Algorithms</li></a>
          </ul>
          <Menu MenuOpen={MenuOpen}/>
          <SideBar MenuOpen={MenuOpen} viewBox={viewBox}/>
          </div>
        </div>
    </div>
  )
}
