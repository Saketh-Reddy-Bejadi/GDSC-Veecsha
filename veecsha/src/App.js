import './App.css';
import './components/Header.css';
import { Page1 } from './components/Page1';
import { useState } from 'react';
import { Header } from './components/Header';
import { Page2 } from './components/Page2';

export const App = () => {

  const [viewBox,setVewBox]=useState(false);

  const MenuOpen=()=> {
      setVewBox(!viewBox);
  }

  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
    MenuOpen();
  };

  return (
    <>
      <div id='Home' className="main">
      <Header MenuOpen={MenuOpen} toggleMenu={toggleMenu} isOpened={isOpened} viewBox={viewBox} />
      <Page1/>
      <Page2/>
      </div>  
    </>
  )
}

