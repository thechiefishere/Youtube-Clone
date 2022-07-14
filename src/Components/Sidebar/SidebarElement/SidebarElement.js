import React, { Component } from 'react';
import './SidebarElement.css';

export class SidebarElement extends Component {
  renderSidebarElement() {
    const { name, logo } = this.props.data;
    const toShade = this.props.shade;
    const { from } = this.props;

    const sidebarType =
      from === 'closed' ? 'SidebarElementClose' : 'SidebarElementOpen';
    const shade = toShade && 'SidebarElement-Logo_shade';

    return (
      <div className={sidebarType}>
        <div className={`${shade}`}>{logo}</div>
        <p>{name}</p>
      </div>
    );
  }

  render() {
    return <div>{this.renderSidebarElement()}</div>;
  }
}

export default SidebarElement;
