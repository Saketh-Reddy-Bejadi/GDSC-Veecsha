import './App.css';
import './components/Header.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { WebDev } from './components/WebDev';

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
      <Header MenuOpen={MenuOpen} toggleMenu={toggleMenu} isOpened={isOpened} viewBox={viewBox} />
      <main id='Home' className="main">
        <Routes>
          <Route path='/GDSC-Veecsha' Component={Home} ></Route>
          <Route path='/GDSC-Veecsha/WebDev' Component={WebDev} ></Route>
          <Route path='/GDSC-Veecsha/Home' Component={Home} ></Route>
        </Routes>
      </main>  
      <Footer/>
    </>
  )
}

