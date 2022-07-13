import { Component } from 'react';
import './ClosedSidebar.css';

import SidebarElement from '../SidebarElement/SidebarElement';
import { sidebarData } from '../../../data';

import { connect } from 'react-redux';

export class ClosedSidebar extends Component {
  renderDefaults() {
    const { defaults } = sidebarData;
    return (
      <section className='ClosedSidebar-Section'>
        {defaults.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
      </section>
    );
  }

  renderInfo() {
    const { info } = sidebarData;
    return (
      <section className='ClosedSidebar-Section'>
        {info.map((obj, index) => (
          <SidebarElement key={index} data={obj} />
        ))}
      </section>
    );
  }

  renderClosedSidebar() {
    const { showSidebar } = this.props;
    const show = showSidebar && 'ClosedSidebar_show';

    return (
      <section className={`ClosedSidebar ${show}`}>
        {this.renderDefaults()}
        {this.renderInfo()}
      </section>
    );
  }

  render() {
    return (
      <section className='ClosedSidebar'>{this.renderClosedSidebar()}</section>
    );
  }
}

export default ClosedSidebar;
