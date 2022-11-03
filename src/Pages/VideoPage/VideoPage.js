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

  renderVideoDetails() {
    return (
      <section>
        <p>Number of views and date posted</p>
        <p>Video Description</p>
        <p>Show More or Show Less Button</p>
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
