import React, { Component } from 'react';
import './Home.css';

import { connect } from 'react-redux';

import Navbar from '../../Components/Navbar/Navbar';
import OpenSidebar from '../../Components/Sidebar/OpenSidebar/OpenSidebar';
import ClosedSidebar from '../../Components/Sidebar/ClosedSidebar/ClosedSidebar';
import HomeContent from '../../Components/HomeContent/HomeContent';

export class Home extends Component {
  render() {
    const { sidebarState } = this.props;
    const sidebar = sidebarState !== 0 ? 'Home_open' : 'Home_close';

    return (
      <main className={`Home ${sidebar}`}>
        <Navbar />
        <ClosedSidebar />
        <OpenSidebar />
        <HomeContent />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebarState: state.navbarReducer.sidebarState,
  };
};

export default connect(mapStateToProps)(Home);
