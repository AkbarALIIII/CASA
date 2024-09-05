// src/components/Home.jsx
import React, { useEffect } from 'react';
import { HomeContent } from '../components/HomeComponents/HomeContent';
import { HomeBox } from '../components/HomeComponents/HomeBox';
import { HomeBoxServices } from '../components/HomeComponents/HomeBoxServices';
import './CSS/Home.css';
import { useLocation } from 'react-router-dom';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location=useLocation();
  useEffect(()=>{
    if(location.pathname==='/'){
      document.body.classList.add('home-background');
    }
    else{
      document.body.classList.remove('home-background');
    }
    return(()=>document.body.classList.remove('home-background'))
  },[location]);
  return (
    <>
    <HomeContent/>
    <HomeBox/>
    <HomeBoxServices/>
    </>
  );
}
export default Home;
