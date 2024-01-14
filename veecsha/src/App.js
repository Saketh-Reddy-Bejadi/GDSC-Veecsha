import './App.css';
import './components/Header.css';
import { Page1 } from './components/Page1';
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
      <Page1/>
      </div>  
    </>
  )
}

