import React, { Component, createRef } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';
import { connect } from 'react-redux';
import {
  setClickedSearchButton,
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

  //TODO: Address this
  //   componentWillUnmount() {
  //     console.log('am UNMOUNTING');
  //     document.removeEventListener('mousedown', (evt) =>
  //       this.handleClickEvent(evt)
  //     );
  //   }

  handleSearchWord(evt) {
    const { setSearchWord, setFilteredVideoNames } = this.props;
    const searchTerm = evt.target.value;
    setSearchWord(searchTerm);
    setFilteredVideoNames(searchTerm);
  }

  handleSearchBtn(evt) {
    console.log('evt target', evt.target);
    const { screenWidth, setClickedSearchButton } = this.props;
    const lengthToDisable = 657;
    // const button = evt.target;
    if (screenWidth >= lengthToDisable) {
      return;
    }
    setClickedSearchButton(true);
  }

  renderSearchBox() {
    const { clickedSearchBox, toggleSearchBox, filteredVideoNames } =
      this.props;
    const showSearchBtn = clickedSearchBox ? 'Search-Form-SearchBtn_show' : '';
    const showSearchFilter =
      filteredVideoNames.length > 0 ? 'Search-Filter_show' : '';
    const closeSearchFilter = !clickedSearchBox ? 'Search-Filter_close' : '';

    return (
      <form className='Search-Form'>
        <AiOutlineSearch
          className={`Icon Search-Form-SearchBtn Search-Form-SearchBtn_one ${showSearchBtn}`}
        />
        <input
          type='text'
          placeholder='Search'
          className='Search-Input'
          onChange={(evt) => this.handleSearchWord(evt)}
          onClick={() => toggleSearchBox(true)}
        />
        <AiOutlineSearch
          className='Icon Search-Form-SearchBtn'
          onClick={(evt) => this.handleSearchBtn(evt)}
        />
        <ul
          className={`Search-Filter ${showSearchFilter} ${closeSearchFilter}`}
        >
          {filteredVideoNames.map((videoName, index) => (
            <li key={index}>
              <AiOutlineSearch className='Icon' />
              <p>{videoName}</p>
            </li>
          ))}
        </ul>
      </form>
    );
  }

  render() {
    const { clickedSearchButton, setClickedSearchButton } = this.props;
    const btnClicked = clickedSearchButton ? 'Search_btnClicked' : '';

    return (
      <section ref={this.searchRef} className={`Search ${btnClicked}`}>
        <FiArrowLeft
          className='Icon Search-ArrowLeft'
          onClick={() => setClickedSearchButton(false)}
        />
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
    screenWidth: state.navbarReducer.screenWidth,
    clickedSearchButton: state.navbarReducer.clickedSearchButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchWord: (word) => dispatch(setSearchWord(word)),
    setFilteredVideoNames: (filter) => dispatch(setFilteredVideoNames(filter)),
    toggleSearchBox: (isClicked) => dispatch(toggleSearchBox(isClicked)),
    setClickedSearchButton: (isClicked) =>
      dispatch(setClickedSearchButton(isClicked)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
