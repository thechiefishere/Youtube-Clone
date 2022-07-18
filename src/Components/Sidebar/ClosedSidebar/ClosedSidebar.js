import { Component } from 'react';
import './ClosedSidebar.css';
import { connect } from 'react-redux';

import SidebarElement from '../SidebarElement/SidebarElement';
import { sidebarData } from '../../../data';

export class ClosedSidebar extends Component {
  renderDefaults() {
    const { defaults } = sidebarData;
    return (
      <section className='ClosedSidebar-Section'>
        {defaults.map((obj, index) => (
          <SidebarElement key={index} data={obj} from={'closed'} />
        ))}
      </section>
    );
  }

  renderInfo() {
    const { info } = sidebarData;
    return (
      <section className='ClosedSidebar-Section'>
        {info.map((obj, index) => (
          <SidebarElement key={index} data={obj} from={'closed'} />
        ))}
      </section>
    );
  }

  renderClosedSidebar() {
    return (
      <section className={`ClosedSidebar-Container`}>
        {this.renderDefaults()}
        {this.renderInfo()}
      </section>
    );
  }

  render() {
    const { showOverlay, showSidebar, screenWidth } = this.props;
    const overlayMaxWidth = 1314;
    const show =
      ((!showOverlay && screenWidth < overlayMaxWidth) || !showSidebar) &&
      'ClosedSidebar_show';

    return (
      <section className={`ClosedSidebar ${show}`}>
        {this.renderClosedSidebar()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showOverlay: state.navbarReducer.showOverlay,
    showSidebar: state.navbarReducer.showSidebar,
    screenWidth: state.navbarReducer.screenWidth,
  };
};

export default connect(mapStateToProps)(ClosedSidebar);
