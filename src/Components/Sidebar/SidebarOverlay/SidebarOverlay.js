import React, { Component, createRef } from 'react';
import './SidebarOverlay.css';
import { connect } from 'react-redux';

import OpenSidebar from '../OpenSidebar/OpenSidebar';

export class SidebarOverlay extends Component {
  constructor(props) {
    super(props);

    this.overlayRef = createRef();
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    const { showOverlay } = this.props;
    const overlayDisplay = getComputedStyle(this.overlayRef.current).display;

    if (overlayDisplay !== 'none' && showOverlay) {
      document.body.style.overflowY = 'hidden';
    } else if (overlayDisplay === 'none') {
      document.body.style.overflowY = 'scroll';
    } else if (!showOverlay) {
      document.body.style.overflowY = 'scroll';
    }
  }

  handleResize() {
    const breakPoint = 1314;
    const documentWidth = document.body.offsetWidth;
    const overlayWidth = getComputedStyle(
      document.querySelector('.SidebarOverlay')
    ).width;

    if (documentWidth >= breakPoint) {
      document.body.style.overflowY = 'scroll';
    } else if (documentWidth < breakPoint && overlayWidth === 0) {
      document.body.style.overflowY = 'scroll';
    } else if (documentWidth < breakPoint && overlayWidth > 0) {
      document.body.style.overflowY = 'hidden';
    }
  }

  render() {
    const { showOverlay } = this.props;
    const show = showOverlay && 'SidebarOverlay_show';
    const sidebar = showOverlay && 'SidebarOverlay-OpenSidebar_show';

    return (
      <section ref={this.overlayRef} className={`SidebarOverlay ${show}`}>
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
    showOverlay: state.navbarReducer.showOverlay,
  };
};

export default connect(mapStateToProps)(SidebarOverlay);
