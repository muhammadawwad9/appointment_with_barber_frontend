import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';

const Menu = (props) => {
  const logOut = () => {
    localStorage.removeItem('access_token');
    // setUser({});
    props.setState(false);
    props.setIsLoggedIn(false);
  };
  const hide = () => {
    props.setState(false);
  };

  return (
    <div className='menu'>
      <div className='topmenusection'>
        {' '}
        <img
          src='img/menu.svg'
          className='menubaricon'
          onClick={props.menuClick}
        ></img>
      </div>
      {props.isLoggedIn ? (
        <ul>
          <li className='menuComponent'>
            <NavLink to='/' onClick={hide}>
              Profile
            </NavLink>
          </li>
          <li className='menuComponent'>
            <NavLink to='/' onClick={hide}>
              Favorite Shops
            </NavLink>
          </li>
          <li className='menuComponent'>
            <NavLink to='/' onClick={hide}>
              My Appointments
            </NavLink>
          </li>
          <li className='menuComponent'>
            <NavLink to='/' onClick={hide}>
              My Businesses
            </NavLink>
          </li>
          <li className='menuComponent'>
            {' '}
            <NavLink to='/login' onClick={logOut}>
              Log Out
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li className='menuComponent'>
            <NavLink to='/' onClick={hide}>
              Login
            </NavLink>
          </li>
          <li className='menuComponent'>
            <NavLink to='/' onClick={hide}>
              Signup
            </NavLink>
          </li>{' '}
        </ul>
      )}
    </div>
  );
};

export default Menu;
