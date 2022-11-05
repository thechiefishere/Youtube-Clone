import React, { Component } from 'react';
import './VideoCard.css';

import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  addPrefixToNumber,
  getTimeframe,
  getVideoChannelFromVideoID,
} from '../../Utils/functions';
import { channelData } from '../../data';

export class VideoCard extends Component {
  renderCard() {
    const { thumbnail, videoLength, videoName, views, timePosted, videoId } =
      this.props.videoInfo;
    const { image, channelName, isVerified } = getVideoChannelFromVideoID(
      channelData,
      videoId
    );
    const viewPrefix = addPrefixToNumber(views);
    const timeFrame = getTimeframe(timePosted);

    return (
      <Link to={`/watch?v=${videoId}`}>
        <div>
          <div className='VideoCard-Video'>
            <img src={thumbnail} alt={videoName} />
            <p>{videoLength}</p>
          </div>
          <div className='VideoCard-Description'>
            <img src={image} alt={channelName} />
            <div>
              <p>{videoName}</p>
              <div className='VideoCard-ChannelNameContainer'>
                <p>{channelName}</p>
                <p>{isVerified && <FaCheck />}</p>
              </div>
              <div className='VideoCard-ViewsContainer'>
                <p>{viewPrefix} views</p>
                <p>.</p>
                <p>{timeFrame} ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    return <section className='VideoCard'>{this.renderCard()}</section>;
  }
}

export default VideoCard;
