import React from 'react'
import Menu from './Menu'
import { SideBar } from './SideBar'


export const Header = ({MenuOpen,viewBox}) => {
  return (
    <div>
        <div className='navbar'>
          <p className='brnd' >Veecsha</p>
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
