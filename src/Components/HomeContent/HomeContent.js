import React, { Component } from 'react';
import './HomeContent.css';

import { channelData, filters } from '../../data';
import VideoCard from '../VideoCard/VideoCard';

import { FaAngleLeft, FaAngleRight, FaYoutube, FaTimes } from 'react-icons/fa';

export class HomeContent extends Component {
  renderFilters() {
    return (
      <section className='HomeContent-FilterSection'>
        <div className='HomeContent-FilterContainer'>
          <FaAngleLeft className='Icon Icon_homeContentFilter' />
          <div className='HomeContent-FilterWrapper'>
            {filters.map((filter, index) => (
              <span key={index} className='HomeContent-Filter'>
                {filter}
              </span>
            ))}
          </div>
          <FaAngleRight className='Icon Icon_homeContentFilter' />
        </div>
      </section>
    );
  }

  renderAdvert() {
    return (
      <section className='HomeContent-Advert'>
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
        <FaTimes className='Icon HomeContent-AdvertCancel' />
      </section>
    );
  }

  renderVideoTiles() {
    return (
      <section className='HomeContent-VideosContainer'>
        {channelData.map((obj) => {
          const { channelVideos } = obj;
          return channelVideos.map((video) => (
            <VideoCard videoInfo={video} key={video.videoId} />
          ));
        })}
      </section>
    );
  }

  renderHomeContent() {
    return (
      <section>
        <div className='Line'></div>
        {this.renderFilters()}
        <div className='Line'></div>
        {this.renderAdvert()}
        {this.renderVideoTiles()}
      </section>
    );
  }
  render() {
    return <div className='HomeContent'>{this.renderHomeContent()}</div>;
  }
}

export default HomeContent;
