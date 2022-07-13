import React, { Component } from 'react';
import './Home.css';

import Navbar from '../../Components/Navbar/Navbar';
import OpenSidebar from '../../Components/Sidebar/OpenSidebar/OpenSidebar';
import ClosedSidebar from '../../Components/Sidebar/ClosedSidebar/ClosedSidebar';
import HomeContent from '../../Components/HomeContent/HomeContent';

export class Home extends Component {
  render() {
    return (
      <main className='Home'>
        <Navbar />
        <ClosedSidebar />
        <HomeContent />
      </main>
    );
  }
}

export default Home;
