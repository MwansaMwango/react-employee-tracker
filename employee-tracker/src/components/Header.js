import React from 'react';
import logo from '../logo.png';

export default function Header() {
  return (
    <div className='row mb-5'>
      <div className='col-md-10 d-flex align-items-center'>
        <img src={logo} alt='Logo' style={{ width: '10rem'}} />
        <span className='ml-5 h1 text-info'>Employee Tracker</span>
      </div>
      
      <div className='col-md-2 d-flex align-items-center'>
        <button className='btn btn-outline-info btn-block'>
          New Employee
          <span className='ml-2'>
            <i className='fas fa-user-plus fa-2x'></i>
          </span>
        </button>
      </div>
    </div>
  );
}