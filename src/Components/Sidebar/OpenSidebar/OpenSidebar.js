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
          <SidebarElement key={index} data={obj} from={'open'} />
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
          <SidebarElement key={index} data={obj} from={'open'} />
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
          <SidebarElement key={index} data={obj} shade={true} from={'open'} />
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
          <SidebarElement key={index} data={obj} from={'open'} />
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
          <SidebarElement key={index} data={obj} from={'open'} />
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
          <SidebarElement key={index} data={obj} from={'open'} />
        ))}
        <div className='Line'></div>
      </section>
    );
  }

  renderCompanyDetails() {
    return (
      <section className='OpenSidebar-Section OpenSidebar-Details'>
        <div className='OpenSidebar-DetailsList'>
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
    const { showSidebar, showOverlay, type } = this.props;
    const overlay =
      showOverlay && type === 'mini' && 'OpenSidebar-Container_show';
    const show = showSidebar !== 0 && 'OpenSidebar-Container_show';

    return (
      <section className={`OpenSidebar-Container ${overlay} ${show}`}>
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
    const { showSidebar, showOverlay, type } = this.props;
    const overlay = showOverlay && type === 'mini' && 'OpenSidebar_show';
    const close = !showSidebar ? 'OpenSidebar_close' : '';

    return (
      <aside className={`OpenSidebar ${close} ${overlay}`}>
        {this.renderOpenSidebar()}
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.navbarReducer.showSidebar,
    showOverlay: state.navbarReducer.showOverlay,
  };
};

export default connect(mapStateToProps)(Sidebar);
