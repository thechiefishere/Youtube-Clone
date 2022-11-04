import React, { Component, createRef } from 'react';
import './VideoOption.css';
import { connect } from 'react-redux';
import { videoOptions } from '../../data';
import { separateVideoOptions } from '../../Utils/functions';

export class VideoOption extends Component {
  constructor(props) {
    super(props);

    this.hiddenOptionsRef = createRef();
    this.optionsMoreRef = createRef();
    this.state = {
      showHiddenOptions: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', (evt) => this.checkPageClick(evt));
  }

  componentWillUnmount() {
    window.removeEventListener('click', (evt) => this.checkPageClick(evt));
  }

  checkPageClick(evt) {
    const { showHiddenOptions } = this.state;
    const optionsMore = this.optionsMoreRef.current;

    if (!optionsMore.contains(evt.target)) {
      if (showHiddenOptions) this.setState({ showHiddenOptions: false });
    }
  }

  renderHiddenOptions(videoOptions) {
    const { screenWidth } = this.props;
    const { showHiddenOptions } = this.state;
    const { optionsToHide } = separateVideoOptions(videoOptions, screenWidth);
    const show = showHiddenOptions
      ? 'HiddenOptions-Show'
      : 'HiddenOptions-Hide';

    return (
      <section className={`HiddenOptions ${show}`} ref={this.hiddenOptionsRef}>
        {optionsToHide.map((option, index) => (
          <div key={index} className='Option Option_hidden'>
            {option.logo}
            <p>{option.name}</p>
          </div>
        ))}
      </section>
    );
  }

  render() {
    const { showHiddenOptions } = this.state;
    const { likesCount, dislikesCount, screenWidth } = this.props;
    videoOptions[0].name = likesCount;
    videoOptions[1].name = dislikesCount;
    const { optionsToShow } = separateVideoOptions(videoOptions, screenWidth);

    return (
      <section className='VideoOptions'>
        <section className='OptionsWrapper'>
          {optionsToShow.map((option, index) => (
            <div key={index} className={`Option`}>
              {option.logo}
              <p>{option.name}</p>
            </div>
          ))}
          <h1
            className='Option-More'
            onClick={() =>
              this.setState({ showHiddenOptions: !showHiddenOptions })
            }
            ref={this.optionsMoreRef}
          >
            ...
          </h1>
        </section>
        {this.renderHiddenOptions(videoOptions)}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screenWidth: state.navbarReducer.screenWidth,
  };
};

export default connect(mapStateToProps)(VideoOption);
