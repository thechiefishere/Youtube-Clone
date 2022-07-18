import { Component } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { connect } from 'react-redux';
import SidebarOverlay from './Components/Sidebar/SidebarOverlay/SidebarOverlay';
import { setScreenWidth } from './Redux/actions';

class App extends Component {
  componentDidMount() {
    const { setScreenWidth } = this.props;
    setScreenWidth(document.body.offsetWidth);
    window.addEventListener('resize', () => this.handleResize());
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', )
  // }

  handleResize() {
    const { setScreenWidth } = this.props;
    const windowWidth = document.body.offsetWidth;
    setScreenWidth(windowWidth);
  }

  render() {
    return (
      <main className='App'>
        <Home />
        <SidebarOverlay />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.navbarReducer.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScreenWidth: (width) => dispatch(setScreenWidth(width)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
