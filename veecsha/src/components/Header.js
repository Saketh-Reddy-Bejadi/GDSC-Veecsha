import React from 'react'
import Menu from './Menu'
import { SideBar } from './SideBar'
import veecsha from "../assets/Veecsha.png";


export const Header = ({MenuOpen,viewBox}) => {
  return (
    <div>
        <div className='navbar'>
          <img src={veecsha} height="30px" alt="" />
          <div className='NavPart2' >
          <ul>
            <a href="Web-development"><li className='optdrop' >Web Development</li></a>
            <a href="DSA"><li className='optdrop'>Data Structures & Algorithms</li></a>
          </ul>
          <Menu MenuOpen={MenuOpen}/>
          <SideBar MenuOpen={MenuOpen} viewBox={viewBox}/>
          </div>
        </div>
    </div>
  )
}
