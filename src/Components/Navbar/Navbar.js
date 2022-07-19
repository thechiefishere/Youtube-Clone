import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FaBars,
  FaYoutube,
  FaSearch,
  FaMicrophone,
  FaEllipsisV,
} from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

import './Navbar.css';
import SignInBtn from '../SignInBtn/SignInBtn';
import { toggleSidebar } from '../../Redux/actions';
import SearchBox from '../SearchBox/SearchBox';

export class Navbar extends Component {
  renderLeftContent() {
    const { toggleSidebar } = this.props;

    return (
      <aside className='Navbar-Left'>
        <FaBars className='Icon Icon_bars' onClick={() => toggleSidebar()} />
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
      <section className='Navbar-Container'>
        <section className='Navbar-Components'>
          {this.renderLeftContent()}
          <SearchBox />
          {this.renderRightContent()}
        </section>
      </section>
    );
  }

  render() {
    return <main className='Navbar'>{this.renderNavbar()}</main>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
