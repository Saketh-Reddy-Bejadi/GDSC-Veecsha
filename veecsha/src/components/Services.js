import React from 'react'
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { useEffect } from 'react';

export const Services = () => {
  useEffect(() => {
    const scrollOptions = {
      behavior: 'smooth',
    };
    const mobileScrollPosition = 660;
    const desktopScrollPosition = 790;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const scrollPosition = isMobile ? mobileScrollPosition : desktopScrollPosition;
    window.scrollTo({
      top: scrollPosition,
      ...scrollOptions,
    });
  }, []);
  return (
    <>
    <Page1/>
    <Page2/>
    </>
  )
}
