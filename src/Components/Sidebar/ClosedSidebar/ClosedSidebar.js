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
    const { sidebarState } = this.props;
    const show = sidebarState > 0 && 'ClosedSidebar_show';

    return (
      <section className={`ClosedSidebar-Container ${show}`}>
        {this.renderDefaults()}
        {this.renderInfo()}
      </section>
    );
  }

  render() {
    const { sidebarState } = this.props;
    const show = sidebarState === 0 && 'ClosedSidebar_show';

    return (
      <section className={`ClosedSidebar ${show}`}>
        {this.renderClosedSidebar()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebarState: state.navbarReducer.sidebarState,
  };
};

export default connect(mapStateToProps)(ClosedSidebar);
