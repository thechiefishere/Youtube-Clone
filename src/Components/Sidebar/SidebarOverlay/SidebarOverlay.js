import React, { Component } from 'react';
import './SidebarOverlay.css';
import { connect } from 'react-redux';

import OpenSidebar from '../OpenSidebar/OpenSidebar';

export class SidebarOverlay extends Component {
  render() {
    const { sidebarState } = this.props;
    console.log('sidebarState', sidebarState);
    const show = sidebarState > 0 && 'SidebarOverlay_show';
    const sidebar = sidebarState > 0 && 'SidebarOverlay-OpenSidebar_show';

    return (
      <section className={`SidebarOverlay ${show}`}>
        <div className={`SidebarOverlay-OpenSidebar ${sidebar}`}>
          <OpenSidebar type='mini' />
        </div>
        <div className='SidebarOverlay-Opaque'></div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebarState: state.navbarReducer.sidebarState,
  };
};

export default connect(mapStateToProps)(SidebarOverlay);
