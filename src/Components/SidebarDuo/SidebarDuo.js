import React, { Component } from 'react';
import './SidebarDuo.css';

export class SidebarDuo extends Component {
  render() {
    const { name, logo } = this.props.data;
    const toShade = this.props.shade;

    return (
      <div className='SidebarDuo'>
        <div
          className={`SidebarDuo-Logo ${toShade && 'SidebarDuo-Logo_shade'}`}
        >
          {logo}
        </div>
        <p className='SidebarDuo-Name'>{name}</p>
      </div>
    );
  }
}

export default SidebarDuo;
