import React, { Component } from 'react';
import './Comments.css';
import CommentCard from '../CommentCard/CommentCard';
import { FaRegUserCircle, FaAlignLeft } from 'react-icons/fa';

export class Comments extends Component {
  //Comment Filter
  renderCommentFilter() {
    const { comments } = this.props;
    return (
      <div className='Comments-Filter'>
        <p>
          {comments.length} <span>Comments</span>
        </p>
        <p>
          <FaAlignLeft /> <span>Sort by</span>
        </p>
      </div>
    );
  }

  //Add Comment
  renderAddComment() {
    return (
      <div className='AddComment'>
        <FaRegUserCircle className='Icon Icon_addComment' />
        <input type='text' placeholder='Add a comment' />
      </div>
    );
  }

  //renderComments
  renderAllComments() {
    const { comments } = this.props;

    return (
      <section className='Comments'>
        {comments.map((comment, index) => (
          <CommentCard comment={comment} key={index} />
        ))}
      </section>
    );
  }
  renderComments() {
    return (
      <section>
        {this.renderCommentFilter()}
        {this.renderAddComment()}
        {this.renderAllComments()}
      </section>
    );
  }

  render() {
    return <section className='Comments'>{this.renderComments()}</section>;
  }
}

export default Comments;
