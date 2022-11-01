import React, { Component, createRef } from 'react';
import './HomeContent.css';
import { connect } from 'react-redux';

import { filters } from '../../data';
import VideoCard from '../VideoCard/VideoCard';

import { FaAngleLeft, FaAngleRight, FaYoutube, FaTimes } from 'react-icons/fa';

export class HomeContent extends Component {
  constructor(prop) {
    super(prop);

    this.filterWrapperRef = createRef();
    this.filterContainerRef = createRef();
    this.filterLeftClickRef = createRef();
    this.advertRef = createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const filter = document.querySelector('.HomeContent-FilterContainer');
    const container = document.querySelector('.HomeContent-Container');
    const filterBottom = filter.getBoundingClientRect().y;
    const containerTop = container.getBoundingClientRect().y;

    const difference = `${filterBottom - containerTop}px`;
    document.documentElement.style.setProperty('--beforeHeight', difference);
  }

  handleFilterRightScroll() {
    const wrapper = this.filterWrapperRef.current;
    const container = this.filterContainerRef.current;
    const leftScrollIcon = document.querySelector('#filterLeftAngle');
    const rightScrollIcon = document.querySelector('#filterRightAngle');

    const wrapperLeft = wrapper.getBoundingClientRect().left;
    const containerLeft = container.getBoundingClientRect().left;
    wrapper.style.left = `${wrapperLeft - 200 - containerLeft}px`;

    leftScrollIcon.style.display = 'block';

    this.hideFilter(leftScrollIcon);
    this.checkWrapperEnd(rightScrollIcon);
  }

  handleFilterLeftScroll() {
    const wrapper = this.filterWrapperRef.current;
    const container = this.filterContainerRef.current;
    const leftScrollIcon = document.querySelector('#filterLeftAngle');

    const wrapperLeft = wrapper.getBoundingClientRect().left;
    const containerLeft = container.getBoundingClientRect().left;
    wrapper.style.left = `${wrapperLeft + 200 - containerLeft}px`;

    this.hideFilter(leftScrollIcon);
    this.checkWrapperStart(leftScrollIcon);
  }

  hideFilter(scrollIcon) {
    const filters = document.querySelectorAll('.HomeContent-Filter');
    const iconLeftPosition = scrollIcon.getBoundingClientRect().left;
    const iconRightPosition = scrollIcon.getBoundingClientRect().right;
    const median = `${(iconLeftPosition + iconRightPosition) / 2}`;

    filters.forEach((filter) => {
      const filterRightPosition = filter.getBoundingClientRect().right;
      const filterLeftPosition = filter.getBoundingClientRect().left;
      if (
        filterRightPosition <= median ||
        filterLeftPosition <= iconLeftPosition
      ) {
        filter.style.opacity = 0;
      } else {
        filter.style.opacity = 1;
      }
    });
  }

  checkWrapperEnd(scrollIcon) {
    const filters = document.querySelectorAll('.HomeContent-Filter');
    const lastFilterRightPosition =
      filters[filters.length - 1].getBoundingClientRect().right;
    const iconLeft = scrollIcon.getBoundingClientRect().left;

    if (lastFilterRightPosition <= iconLeft) {
      scrollIcon.style.display = 'none';
    } else {
      scrollIcon.style.display = 'block';
    }
  }

  checkWrapperStart(scrollIcon) {
    const filters = document.querySelectorAll('.HomeContent-Filter');
    const rightScrollIcon = document.querySelector('#filterRightAngle');
    const firstFilterLeftPosition = filters[0].getBoundingClientRect().right;
    const iconRight = scrollIcon.getBoundingClientRect().left;

    if (firstFilterLeftPosition >= iconRight) {
      scrollIcon.style.display = 'none';
    } else {
      scrollIcon.style.display = 'block';
    }

    this.checkWrapperEnd(rightScrollIcon);
  }

  closeAdvert() {
    const advertRef = this.advertRef.current;
    advertRef.style.display = 'none';
  }

  renderFilters() {
    return (
      <section className='HomeContent-FilterSection'>
        <div
          className='HomeContent-FilterContainer'
          ref={this.filterContainerRef}
        >
          <FaAngleLeft
            className='Icon Icon_homeContentFilter'
            id='filterLeftAngle'
            onClick={() => this.handleFilterLeftScroll()}
          />
          <div
            className='HomeContent-FilterWrapper'
            ref={this.filterWrapperRef}
          >
            {filters.map((filter, index) => (
              <p key={index} className='HomeContent-Filter'>
                {filter}
              </p>
            ))}
          </div>
          <FaAngleRight
            className='Icon Icon_homeContentFilter'
            id='filterRightAngle'
            onClick={() => this.handleFilterRightScroll()}
          />
        </div>
      </section>
    );
  }

  renderAdvert() {
    return (
      <section className='HomeContent-Advert' ref={this.advertRef}>
        <div className='HomeContent-AdvertDetail'>
          <div className='Youtube-LogoContainer Youtube-LogoContainer_advert'>
            <FaYoutube className='Icon Icon_logo' />
            <h1 className='HomeContent-AdvertLogoText'>Youtube Premium</h1>
          </div>
          <p className='HomeContent-AdvertDescription'>
            Introducing family plan. Ad-free YouTube and YouTube Music for up to
            6 household members.
          </p>
          <button className='Button Button_thick'>Get it now</button>
        </div>
        <FaTimes
          className='Icon HomeContent-AdvertCancel'
          onClick={() => this.closeAdvert()}
        />
      </section>
    );
  }

  renderVideoTiles() {
    const { allVideos } = this.props;
    return (
      <section className='HomeContent-VideosContainer'>
        {allVideos.map((video) => (
          <VideoCard key={video.videoId} videoInfo={video} />
        ))}
      </section>
    );
  }

  renderHomeContent() {
    return (
      <section>
        <div className='Line'></div>
        {this.renderFilters()}
        <div className='Line'></div>
        <div className='HomeContent-Container'>
          {this.renderAdvert()}
          {this.renderVideoTiles()}
        </div>
      </section>
    );
  }
  render() {
    return <div className='HomeContent'>{this.renderHomeContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.navbarReducer.showSidebar,
    allVideos: state.videosReducer.allVideos,
  };
};

export default connect(mapStateToProps)(HomeContent);
