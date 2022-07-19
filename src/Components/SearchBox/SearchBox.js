import React, { Component, createRef } from 'react';
import { FaMicrophone, FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import {
  setFilteredVideoNames,
  setSearchWord,
  toggleSearchBox,
} from '../../Redux/actions';
import './SearchBox.css';

export class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.searchRef = createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', (evt) => this.handleClickEvent(evt));
  }

  handleClickEvent(evt) {
    const { toggleSearchBox } = this.props;

    if (!this.searchRef.current.contains(evt.target)) {
      toggleSearchBox(false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', (evt) =>
      this.handleClickEvent(evt)
    );
  }

  handleSearchWord(evt) {
    const { setSearchWord, setFilteredVideoNames } = this.props;
    const searchTerm = evt.target.value;
    setSearchWord(searchTerm);
    setFilteredVideoNames(searchTerm);
  }

  renderSearchBox() {
    const { clickedSearchBox, toggleSearchBox } = this.props;
    const showSearchBtn = clickedSearchBox ? 'Search-Form-SearchBtn_show' : '';

    return (
      <form className='Search-Form'>
        <FaSearch
          className={`Icon Search-Form-SearchBtn Search-Form-SearchBtn_one ${showSearchBtn}`}
        />
        <input
          type='text'
          placeholder='Search'
          className='Search-Input'
          onChange={(evt) => this.handleSearchWord(evt)}
          onClick={() => toggleSearchBox(true)}
        />
        <FaSearch className='Icon Search-Form-SearchBtn' />
        <div className='Search-Filter'></div>
        {/* {console.log('filter', this.props.filteredVideoNames)} */}
      </form>
    );
  }

  render() {
    return (
      <section ref={this.searchRef} className='Search'>
        {this.renderSearchBox()}
        <FaMicrophone className='Icon Search-Microphone' />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredVideoNames: state.videosReducer.filteredVideoNames,
    clickedSearchBox: state.navbarReducer.clickedSearchBox,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchWord: (word) => dispatch(setSearchWord(word)),
    setFilteredVideoNames: (filter) => dispatch(setFilteredVideoNames(filter)),
    toggleSearchBox: (isClicked) => dispatch(toggleSearchBox(isClicked)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
