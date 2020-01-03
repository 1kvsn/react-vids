import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import SignOutButton from './SignOut';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul className="nav-link-container">
    <li style={{
      
    }}>
      <Link 
        to={'/'} 
        style={{
          textDecoration: 'none',
          fontSize: '22px',
          color: 'black',
        }}>
        Landing
      </Link>
    </li>
    <li>
      <Link to={'/home'}>
        <Icon 
          type="home"
          style={{
            fontSize: '24px',
            color: 'black',
            
          }}
        />
      </Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="nav-link-container">
    <li>
      <Link 
        to={'/'} 
        style={{
          textDecoration: 'none',
          fontSize: '22px',
          color: 'black',
        }}>
          Landing
      </Link>
    </li>
    <li>
      <Link 
        to={'/signin'}
        style={{
          textDecoration: 'none',
          fontSize: '22px',
          color: 'black',
        }}>
        Sign In
      </Link>
    </li>
  </ul>
);

export default Navigation;