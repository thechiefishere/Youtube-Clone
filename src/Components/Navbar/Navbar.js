import React, { Component } from 'react';
import './Navbar.css';

import {
  FaBars,
  FaYoutube,
  FaSearch,
  FaMicrophone,
  FaEllipsisV,
  FaRegUserCircle,
} from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

export class Navbar extends Component {
  renderLeftContent() {
    return (
      <aside className='Navbar-Left'>
        <FaBars className='Icon Icon_bars' />
        <div className='Navbar-LogoContainer'>
          <FaYoutube className='Icon Icon_logo' />
          <div className='Navbar-Name'>
            <h1>YouTube</h1>
            <p className='Navbar-Country'>NG</p>
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
        <input type='text' placeholder='Search' />
        <FaSearch className='Icon Navbar-Form-SearchBtn' />
      </form>
    );
  }

  renderRightContent() {
    return (
      <aside className='Navbar-Right'>
        <BsGrid3X3Gap className='Icon Navbar-Grid' />
        <FaEllipsisV className='Icon Navbar-Dots' />
        <button className='Button Button_thick'>
          <FaRegUserCircle className='Icon' />
          sign in
        </button>
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
