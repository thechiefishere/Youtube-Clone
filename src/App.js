import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import VideoPage from './Pages/VideoPage/VideoPage';
import { connect } from 'react-redux';
import SidebarOverlay from './Components/Sidebar/SidebarOverlay/SidebarOverlay';
import { setScreenWidth } from './Redux/actions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <Router>
        <main className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watch' element={<VideoPage />} />
          </Routes>
          <SidebarOverlay />
        </main>
      </Router>
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
