import React, { Component } from 'react';
import './Navbar.css';

import {
  FaBars,
  FaYoutube,
  FaSearch,
  FaMicrophone,
  FaEllipsisV,
} from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';
import SignInBtn from '../SignInBtn/SignInBtn';

export class Navbar extends Component {
  renderLeftContent() {
    return (
      <aside className='Navbar-Left'>
        <FaBars className='Icon Icon_bars' />
        <div className='Youtube-LogoContainer'>
          <FaYoutube className='Icon Icon_logo' />
          <div className='Youtube-Name'>
            <h1>YouTube</h1>
            <p className='Youtube-Country'>NG</p>
          </div>
        </div>
      </aside>
    );
  }

  renderMiddleContent() {
    return (
      <aside className='Navbar-Middle'>
        {this.renderSearchBox()}
        <FaMicrophone className='Icon Navbar-Microphone' />
      </aside>
    );
  }

  renderSearchBox() {
    return (
      <form className='Navbar-Form'>
        <FaSearch className='Icon Navbar-Form-SearchBtn' />
        <input type='text' placeholder='Search' className='Navbar-Input' />
        <FaSearch className='Icon Navbar-Form-SearchBtn' />
      </form>
    );
  }

  renderRightContent() {
    return (
      <aside className='Navbar-Right'>
        <BsGrid3X3Gap className='Icon Navbar-Grid' />
        <FaEllipsisV className='Icon Navbar-Dots' />
        <SignInBtn />
      </aside>
    );
  }

  renderNavbar() {
    return (
      <section className='Navbar-Components'>
        {this.renderLeftContent()}
        {this.renderMiddleContent()}
        {this.renderRightContent()}
      </section>
    );
  }

  render() {
    return <main className='Navbar'>{this.renderNavbar()}</main>;
  }
}

export default Navbar;
