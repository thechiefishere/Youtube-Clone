import { getFilteredVideoNames } from '../Utils/functions';
import {
  SET_CLICKED_SEARCH_BUTTON,
  SET_FILTERED_VIDEOS_NAMES,
  SET_SCREEN_WIDTH,
  SET_SEARCH_WORD,
  TOGGLE_SEARCH_BOX,
  TOGGLE_SIDEBAR,
} from './actionTypes';

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};

export const setScreenWidth = (width) => {
  return {
    type: SET_SCREEN_WIDTH,
    payload: width,
  };
};

export const setSearchWord = (word) => {
  return {
    type: SET_SEARCH_WORD,
    payload: word,
  };
};

// export const setFilteredVideos = () => {
//   return (dispatch, getState) => {
//     // console.log()
//     const { allVideos } = getState().navbarReducer;
//   }
// }

export const setFilteredVideoNames = (filter) => {
  return (dispatch, getState) => {
    const allVideos = getState().videosReducer.allVideos;
    const filteredVideoNames = getFilteredVideoNames(allVideos, filter);
    dispatch({
      type: SET_FILTERED_VIDEOS_NAMES,
      payload: filteredVideoNames,
    });
  };
};

export const toggleSearchBox = (isClicked) => {
  return {
    type: TOGGLE_SEARCH_BOX,
    payload: isClicked,
  };
};

export const setClickedSearchButton = (isClicked) => {
  return {
    type: SET_CLICKED_SEARCH_BUTTON,
    payload: isClicked,
  };
};
