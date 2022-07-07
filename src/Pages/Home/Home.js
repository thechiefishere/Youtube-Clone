import React, { Component } from 'react';
import './Home.css';

import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import HomeContent from '../../Components/HomeContent/HomeContent';

export class Home extends Component {
  render() {
    return (
      <main className='Home'>
        <Navbar />
        <Sidebar />
        <HomeContent />
      </main>
    );
  }
}

export default Home;
