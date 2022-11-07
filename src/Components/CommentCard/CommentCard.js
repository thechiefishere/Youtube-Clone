import React, { Component } from 'react';
import './CommentCard.css';
import { channelData } from '../../data';
import {
  addPrefixToNumber,
  getChannelFromChannelID,
  getTimeframe,
} from '../../Utils/functions';
import { FaCheck } from 'react-icons/fa';
import { BiLike, BiDislike } from 'react-icons/bi';

export class CommentCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readMoreClicked: false,
    };
  }

  renderCommentInterractions() {
    const {
      comment: { likes, disLikes },
    } = this.props;
    const likesSuffixed = addPrefixToNumber(likes);
    const dislikesSuffixed = addPrefixToNumber(disLikes);
    return (
      <div className='Comment-Interractions'>
        <div>
          <BiLike className='Icon' />
          <p>{likesSuffixed}</p>
        </div>
        <div>
          <BiDislike className='Icon' />
          <p>{dislikesSuffixed}</p>
        </div>
        <p>Reply</p>
      </div>
    );
  }

  renderComment() {
    const { readMoreClicked } = this.state;
    const {
      comment: { timePosted, channelId, comment },
    } = this.props;
    const { channelName, isVerified } = getChannelFromChannelID(
      channelData,
      channelId
    );
    const time = getTimeframe(timePosted);
    const addReadMoreButton = comment.length >= 400;
    const readMoreOrShowLess = readMoreClicked ? 'Show Less' : 'Read More';
    const shortenedComment = readMoreClicked
      ? comment
      : `${comment.substring(0, 400)}...`;

    return (
      <div>
        <div className='Comment-Name'>
          <div className='VideoCard-ChannelNameContainer'>
            <p>{channelName}</p>
            <p>{isVerified && <FaCheck />}</p>
          </div>
          <p>{time} ago</p>
        </div>
        <p>{shortenedComment}</p>
        {addReadMoreButton && (
          <p
            className='VideoDescription-Btn'
            onClick={() => this.setState({ readMoreClicked: !readMoreClicked })}
          >
            {readMoreOrShowLess}
          </p>
        )}
      </div>
    );
  }

  renderCommentCard() {
    const {
      comment: { channelId, channelName },
    } = this.props;
    const { image } = getChannelFromChannelID(channelData, channelId);
    return (
      <div className='Comment'>
        <img src={image} alt={channelName} />
        <div>
          {this.renderComment()}
          {this.renderCommentInterractions()}
        </div>
      </div>
    );
  }

  render() {
    return <section>{this.renderCommentCard()}</section>;
  }
}

export default CommentCard;
