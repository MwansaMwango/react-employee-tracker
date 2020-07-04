import React from 'react';
import logo from '../logo.png';

export default function Header() {
  return (
    <div className='row mb-5'>
      <div className='col d-flex align-items-center justify-content-center'>
        <img src={logo} alt='Logo' style={{ width: '10rem'}} />
        <span className='ml-5 h1 text-info'>Employee Tracker</span>
      </div>
     </div> 
     
  );
}