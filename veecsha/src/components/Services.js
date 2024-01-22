import React from 'react'
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { useEffect } from 'react';

export const Services = () => {
    useEffect(() => {
        window.scrollTo({
            top:650,
            behaviour:'smooth',
    });
      }, []); 
  return (
    <>
    <Page1/>
    <Page2/>
    </>
  )
}
