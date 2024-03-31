'use client'
import React, { useState, useEffect } from 'react';
import HomePage from './home/page';
import { Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const Mainpage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  const rightTabs = document.getElementsByClassName('RightTabs');
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('DarkMode');
      for (let i = 0; i < rightTabs.length; i++) {
        rightTabs[i].classList.add('whiteText');
      }
    } else {
      document.body.classList.remove('DarkMode');
      for (let i = 0; i < rightTabs.length; i++) {
        rightTabs[i].classList.add('darkText');
      }
    }
  }, [darkMode]);

  return (
    <div className="container">
      <div style={{ height: '250px' }}>
        <Button onClick={changeMode} sx={{ right: '33px', float: 'right', top: '65%;' }}>
          {darkMode ? <WbSunnyIcon  sx={{ fontSize: 40, color: 'gold'  }} /> : <NightlightRoundIcon sx={{ fontSize: 40, color:'black' }} />}
        </Button>
      </div>
      <HomePage darkMode={darkMode} />
    </div>
  );
}

export default Mainpage;
