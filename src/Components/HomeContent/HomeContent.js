import React, { Component, createRef } from 'react';
import './HomeContent.css';
import { connect } from 'react-redux';

import { filters } from '../../data';
import VideoCard from '../VideoCard/VideoCard';

import { FaYoutube, FaTimes } from 'react-icons/fa';
import VideoFilters from '../VideoFilters/VideoFilters';

export class HomeContent extends Component {
  constructor(prop) {
    super(prop);

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

  closeAdvert() {
    const advertRef = this.advertRef.current;
    advertRef.style.display = 'none';
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
        <VideoFilters filters={filters} />
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
