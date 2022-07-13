import React, { Component } from 'react';
import './OpenSidebar.css';

import { sidebarData } from '../../../data';
import SignInBtn from '../../SignInBtn/SignInBtn';
import SidebarElement from '../SidebarElement/SidebarElement';

import { connect } from 'react-redux';

export class Sidebar extends Component {
  renderDefaults() {
    const { defaults } = sidebarData;
    return (
      <section className='OpenSidebar-Section'>
        {defaults.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderInfo() {
    const { info } = sidebarData;
    return (
      <section className='OpenSidebar-Section'>
        {info.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderSignIn() {
    return (
      <section className='OpenSidebar-Section'>
        <p className='OpenSidebar-SignIn-Text'>
          Sign in to like videos, comment, and subscribe.
        </p>
        <SignInBtn />
        <div className='Line'></div>
      </section>
    );
  }

  renderBest() {
    const { best } = sidebarData;
    return (
      <section className='OpenSidebar-Section'>
        {best.map((obj, index) => (
          <SidebarElement key={index} data={obj} shade={true} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderChannels() {
    const { channels } = sidebarData;
    return (
      <section className='OpenSidebar-Section'>
        {channels.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderMore() {
    const { more } = sidebarData;
    return (
      <section className='OpenSidebar-Section'>
        {more.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderGeneral() {
    const { general } = sidebarData;
    return (
      <section className='OpenSidebar-Section'>
        {general.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderCompanyDetails() {
    return (
      <section className='OpenSidebar-Section Sidebar-Details'>
        <div className='Sidebar-DetailsList'>
          <p>About</p>
          <p>Press</p>
          <p>Copyright</p>
          <p>Contact us</p>
          <p>Creators</p>
          <p>Advertise</p>
          <p>Developers</p>
        </div>
        <div className='OpenSidebar-DetailsList'>
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

  renderOpenSidebar() {
    const { showSidebar } = this.props;
    const show = showSidebar && 'OpenSidebar_show';

    return (
      <section className={`OpenSidebar ${show}`}>
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
    return <aside>{this.renderOpenSidebar()}</aside>;
  }
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.navbarReducer.showSidebar,
  };
};

export default connect(mapStateToProps)(Sidebar);
