import React from 'react';
import { withFirebase } from './Firebase';
import { Icon } from 'antd';

const SignOutButton = ({ firebase }) => (
  <Icon 
    type="logout" 
    onClick={firebase.doSignOut} 
    style={{
      fontSize: '24px',
      color: 'black',
      cursor: 'pointer'
    
    }} />
);

export default withFirebase(SignOutButton);