import React, { Component, createRef } from 'react';
import './VideoFilters.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export class VideoFilters extends Component {
  constructor(props) {
    super(props);

    this.filterWrapperRef = createRef();
    this.filterContainerRef = createRef();
  }

  componentDidMount() {
    this.hideOrShowRightIcon();
    window.addEventListener('resize', () => this.hideOrShowRightIcon());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.hideOrShowRightIcon());
  }

  hideOrShowRightIcon() {
    const filterWrapperRight =
      this.filterWrapperRef.current.getBoundingClientRect().right;
    const rightIcon = document.querySelector('#filterRightAngle');
    const rightIconRightPosition = rightIcon.getBoundingClientRect().right;

    if (filterWrapperRight <= rightIconRightPosition)
      rightIcon.style.visibility = 'hidden';
    else rightIcon.style.visibility = 'visible';
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
    const filters = document.querySelectorAll('.Filter');
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
    const filters = document.querySelectorAll('.Filter');
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
    const filters = document.querySelectorAll('.Filter');
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

  renderFilters() {
    const { filters } = this.props;
    return (
      <section className='FilterSection FilterSection_suggested'>
        <div className='FilterContainer' ref={this.filterContainerRef}>
          <FaAngleLeft
            className='Icon Icon_filter'
            id='filterLeftAngle'
            onClick={() => this.handleFilterLeftScroll()}
          />
          <div className='FilterWrapper' ref={this.filterWrapperRef}>
            {filters.map((filter, index) => (
              <p key={index} className='Filter'>
                {filter}
              </p>
            ))}
          </div>
          <FaAngleRight
            className='Icon Icon_filter'
            id='filterRightAngle'
            onClick={() => this.handleFilterRightScroll()}
          />
        </div>
      </section>
    );
  }

  render() {
    return <div>{this.renderFilters()}</div>;
  }
}

export default VideoFilters;
