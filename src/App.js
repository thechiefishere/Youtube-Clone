import { Component } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Home />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    working: state.working,
    cash: state.cash,
  };
};

export default connect(mapStateToProps)(App);
