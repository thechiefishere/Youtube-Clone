import React, { Component } from 'react';
import './SidebarDuo.css';

export class SidebarDuo extends Component {
  render() {
    const { name, logo } = this.props.data;

    return (
      <div className='SidebarDuo'>
        <div className='SidebarDuo-Logo'>{logo}</div>
        <p className='SidebarDuo-Name'>{name}</p>
      </div>
    );
  }
}

export default SidebarDuo;
