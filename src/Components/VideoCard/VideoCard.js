import React, { Component } from 'react';
import './VideoCard.css';

import { FaCheck } from 'react-icons/fa';

export class VideoCard extends Component {
  renderCard() {
    const {
      thumbnail,
      videoLength,
      channelPicture,
      videoName,
      channelName,
      views,
      time,
      isVerified,
    } = this.props.info;
    return (
      <div>
        <div className='VideoCard-ThumbnailContainer'>
          <img src={thumbnail} alt={videoName} />
          <p>{videoLength}</p>
        </div>
        <div>
          <img src={channelPicture} alt={channelName} />
          <div>
            <p>{videoName}</p>
            <div>
              <p>{channelName}</p>
              {isVerified && <FaCheck />}
            </div>
            <div>
              <p>{views} views</p>
              <p>.</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <section>VideoCard</section>;
  }
}

export default VideoCard;
