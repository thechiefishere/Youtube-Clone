import React, { Component } from 'react';
import './Sidebar.css';

import { sidebarData } from '../../data';
import SidebarDuo from '../SidebarDuo/SidebarDuo';
import SignInBtn from '../SignInBtn/SignInBtn';

export class Sidebar extends Component {
  renderDefaults() {
    const { defaults } = sidebarData;
    return (
      <section className='Sidebar-Section'>
        {defaults.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderInfo() {
    const { info } = sidebarData;
    return (
      <section className='Sidebar-Section'>
        {info.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderSignIn() {
    return (
      <section className='Sidebar-Section'>
        <p className='Sidebar-SignIn-Text'>
          Sign in to like videos, comment, and subscribe.
        </p>
        <SignInBtn />
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderBest() {
    const { best } = sidebarData;
    return (
      <section className='Sidebar-Section'>
        {best.map((obj, index) => (
          <SidebarDuo key={index} data={obj} shade={true} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderChannels() {
    const { channels } = sidebarData;
    return (
      <section className='Sidebar-Section'>
        {channels.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderMore() {
    const { more } = sidebarData;
    return (
      <section className='Sidebar-Section'>
        {more.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderGeneral() {
    const { general } = sidebarData;
    return (
      <section className='Sidebar-Section'>
        {general.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderCompanyDetails() {
    return (
      <section className='Sidebar-Section Sidebar-Details'>
        <div className='Sidebar-DetailsList'>
          <p>About</p>
          <p>Press</p>
          <p>Copyright</p>
          <p>Contact us</p>
          <p>Creators</p>
          <p>Advertise</p>
          <p>Developers</p>
        </div>
        <div className='Sidebar-DetailsList'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Policy &amp; Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
        </div>
        <p>&copy; 2022 Google LLC</p>
      </section>
    );
  }

  renderSidebar() {
    return (
      <section>
        {this.renderDefaults()}
        {this.renderInfo()}
        {this.renderSignIn()}
        {this.renderBest()}
        {this.renderChannels()}
        {this.renderMore()}
        {this.renderGeneral()}
        {this.renderCompanyDetails()}
      </section>
    );
  }

  render() {
    return <aside className='Sidebar'>{this.renderSidebar()}</aside>;
  }
}

export default Sidebar;
