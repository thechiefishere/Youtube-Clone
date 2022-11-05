import React, { Component } from 'react';
import './VideoCard.css';

import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addPrefixToNumber, getTimeframe } from '../../Utils/functions';

export class VideoCard extends Component {
  renderCard() {
    const {
      thumbnail,
      videoLength,
      channelPicture,
      videoName,
      channelName,
      views,
      timePosted,
      isVerified,
      videoId,
    } = this.props.videoInfo;
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
            <img src={channelPicture} alt={channelName} />
            <div>
              <p>{videoName}</p>
              <div>
                <p>{channelName}</p>
                {isVerified && <FaCheck />}
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
