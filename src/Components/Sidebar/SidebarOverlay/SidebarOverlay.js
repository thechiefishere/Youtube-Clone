import React, { Component } from 'react';
import './SidebarOverlay.css';
import { connect } from 'react-redux';

import OpenSidebar from '../OpenSidebar/OpenSidebar';

export class SidebarOverlay extends Component {
  render() {
    const { showSidebar } = this.props;
    const show = showSidebar && 'SidebarOverlay_show';
    console.log('show', show);

    return (
      <section className={`SidebarOverlay ${show}`}>
        <div className='SidebarOverlay-OpenSidebar'>
          <OpenSidebar type='mini' />
        </div>
        <div className='SidebarOverlay-Opaque'></div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.navbarReducer.showSidebar,
  };
};

export default connect(mapStateToProps)(SidebarOverlay);
