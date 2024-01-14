import React from 'react';
import "./Page1.css"

export const Page1 = () => {
  return (
    <div className='Page1'>
        <div className='Con1'>
          <p className='Head1' >Introducing <span className='brnd' >Veecsha</span></p>
          <p className="Body1">
          Welcome to Veecsha - Where Tech Learning Feels Like a Breeze! 🎓✨<br/>
          In a world buzzing with tech complexities, Veecsha is your shortcut to expertise without the overload. Bid farewell to the confusion and embrace a straightforward journey to mastering the essential tech know-how.
          </p>
          <div className='Buttons'>
            <a href="Web-development" className='navBtn btns webBtn' >Web Development</a>
            <a href="DSA" className='navBtn btns dsaBtn'>Data Structures & Algorithms</a>
          </div>
        </div>
    </div>
  )
}
