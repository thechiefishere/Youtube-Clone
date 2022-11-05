import React, { Component } from 'react';
import { HiDownload } from 'react-icons/hi';
import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { TbPlaylistAdd } from 'react-icons/tb';
import { IoFlagOutline } from 'react-icons/io';
import { CgTranscript } from 'react-icons/cg';
import {
  addPrefixToNumber,
  getVideoAssociatedPlaylist,
  getVideoChannelFromVideoID,
  getVideoFromVideoID,
} from '../../Utils/functions';
import { channelData } from '../../data';
import './VideoPage.css';
import VideoOption from '../../Components/VideoOptions/VideoOption';

export class VideoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: {},
      channel: {},
      miniDescription: true,
    };
  }

  componentDidMount() {
    const search = document.location.search;
    const videoID = new URLSearchParams(search).get('v');
    this.setVideoDetails(videoID);
  }

  setVideoDetails(id) {
    const theVideo = getVideoFromVideoID(channelData, id);
    const videoChannel = getVideoChannelFromVideoID(channelData, id);
    this.setState({ video: theVideo });
    this.setState({ channel: videoChannel });
  }

  renderVideoDescription() {
    const {
      video: { videoDescription },
    } = this.state;
    const { miniDescription } = this.state;
    const desciption = miniDescription
      ? videoDescription.substring(0, 200)
      : videoDescription.substring();
    const buttonType = miniDescription ? 'Show More' : 'Show Less';

    return (
      <div>
        {desciption}
        <div
          className='VideoDescription-Btn'
          onClick={() => this.setState({ miniDescription: !miniDescription })}
        >
          {buttonType}
        </div>
      </div>
    );
  }

  renderVideoDetails() {
    const { views, timePosted } = this.state.video;

    return (
      <section className='VideoDetails'>
        <p>
          {views.toLocaleString()}views <span>{timePosted.toDateString()}</span>
        </p>
        {this.renderVideoDescription()}
      </section>
    );
  }

  renderChannelData() {
    const {
      channel: { subscribers, channelName, image },
      video: { videoName, likes, disLikes },
    } = this.state;
    const videoPlaylists = getVideoAssociatedPlaylist(
      this.state.channel,
      this.state.video
    );
    const subscriberCount = addPrefixToNumber(subscribers);
    const likesCount = addPrefixToNumber(likes);
    const dislikesCount = addPrefixToNumber(disLikes);

    return (
      <section className='ChannelData'>
        <div className='ChannelData-PlaylistContainer'>
          {videoPlaylists.map((playlist, index) => (
            <p className='ChannelData-Playlist' key={index}>
              {playlist}
            </p>
          ))}
        </div>
        <h2>{videoName}</h2>
        <div className='ChannelData-Info'>
          <div className='ChannelData-ChannelInfo'>
            <img src={image} alt={channelName} />
            <div>
              <h3>{channelName}</h3>
              <p>{subscriberCount} subscribers</p>
            </div>
            <p className='ChannelData-Info-Subscribe'>Subscribe</p>
          </div>
          <VideoOption likesCount={likesCount} dislikesCount={dislikesCount} />
        </div>
      </section>
    );
  }

  renderVideoPane() {
    return (
      <section className='VideoPane'>
        <video width='700' height='500' controls>
          <source src='/Videos/elon_vid.mp4' type='video/mp4' />
          Your browser does not support the video format
        </video>
      </section>
    );
  }

  renderVideoSection() {
    return (
      <section>
        {this.renderVideoPane()}
        {this.renderChannelData()}
        {this.renderVideoDetails()}
      </section>
    );
  }

  renderSuggested() {}

  renderComments() {}

  renderVideoPage() {
    const { video } = this.state;
    if (Object.entries(video).length === 0) {
      return <section></section>;
    }

    return <section className='VideoPage'>{this.renderVideoSection()}</section>;
  }

  render() {
    return <main>{this.renderVideoPage()}</main>;
  }
}

export default VideoPage;
