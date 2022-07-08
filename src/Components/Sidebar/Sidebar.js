import React, { Component } from 'react';
import './Sidebar.css';

import { sidebarData } from '../../data';
import SidebarDuo from '../SidebarDuo/SidebarDuo';

export class Sidebar extends Component {
  renderDefaults() {
    const { defaults } = sidebarData;
    return (
      <section>
        {defaults.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderInfo() {
    const { info } = sidebarData;
    console.log('info', info);
    return (
      <section>
        {info.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderBest() {
    const { best } = sidebarData;
    return (
      <section>
        {best.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderChannels() {
    const { channels } = sidebarData;
    return (
      <section>
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
      <section>
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
      <section>
        {general.map((obj, index) => (
          <SidebarDuo key={index} data={obj} />
        ))}
        <div className='Sidebar-Line'></div>
      </section>
    );
  }

  renderSidebar() {
    return (
      <section>
        {this.renderDefaults()}
        {this.renderInfo()}
        {this.renderBest()}
        {this.renderChannels()}
        {this.renderMore()}
        {this.renderGeneral()}
      </section>
    );
  }

  render() {
    return <aside className='Sidebar'>{this.renderSidebar()}</aside>;
  }
}

export default Sidebar;
