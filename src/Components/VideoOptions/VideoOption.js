import React, { Component } from 'react';
import './VideoOption.css';
import { connect } from 'react-redux';
import { videoOptions } from '../../data';
import { keepOrShow } from '../../Utils/functions';

export class VideoOption extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { likesCount, dislikesCount, screenWidth } = this.props;
    videoOptions[0].name = likesCount;
    videoOptions[1].name = dislikesCount;

    return (
      <section className='VideoOptions'>
        {videoOptions.map((option, index) => {
          const showState = keepOrShow(index, screenWidth);
          const show = showState ? 'Option-Show' : 'Option-Keep';
          return (
            <div key={index} className={`Option ${show}`}>
              {option.logo}
              <p>{option.name}</p>
            </div>
          );
        })}
        <h1 className='Option-More'>...</h1>
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
