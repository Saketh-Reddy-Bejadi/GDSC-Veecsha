import './App.css';

import React from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Page1 } from './components/Page1';

export const App = () => {
  return (
    <>
      <Header/>
      <Page1/>
      <Footer/>
    </>
  )
}

