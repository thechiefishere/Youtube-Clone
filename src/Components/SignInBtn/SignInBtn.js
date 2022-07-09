import React, { Component } from 'react';
import './SignInBtn.css';

import { FaRegUserCircle } from 'react-icons/fa';

export class SignInBtn extends Component {
  render() {
    return (
      <button className='Button Button_thick'>
        <FaRegUserCircle className='Icon' />
        sign in
      </button>
    );
  }
}

export default SignInBtn;
