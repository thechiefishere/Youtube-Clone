import { Component } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { connect } from 'react-redux';
import SidebarOverlay from './Components/Sidebar/SidebarOverlay/SidebarOverlay';

class App extends Component {
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

export default connect(mapStateToProps)(App);
