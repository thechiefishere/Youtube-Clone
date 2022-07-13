import React, { Component } from 'react';
import './SidebarElement.css';

export class SidebarElement extends Component {
  render() {
    const { name, logo } = this.props.data;
    const toShade = this.props.shade;

    return (
      <div className='SidebarElement'>
        <div className='SidebarElement-Logo'>{logo}</div>
        {/* <div
          className={`SidebarElement-Logo ${
            toShade && 'SidebarElement-Logo_shade'
          }`}
        >
          {logo}
        </div> */}
        <p className='SidebarElement-Name'>{name}</p>
      </div>
    );
  }
}

export default SidebarElement;
