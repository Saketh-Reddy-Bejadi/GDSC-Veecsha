import './App.css';
import './components/Header.css';

import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {

  const [viewBox,setVewBox]=useState(false);

  const MenuOpen=()=> {
      setVewBox(!viewBox);
  }

  return (
    <>
      <div className="main">
      <Header MenuOpen={MenuOpen} viewBox={viewBox} />
        <div className='Page1'>
          {/* <p className='heading'>Unleash <span className='you' >You</span>r Power With</p>
          <p className='highlighted'>Veecsha</p>
          <p className='subheading'>Prefer progess over perfection</p> */}
        </div>
      </div>
    </>
  )
}

