import { channelData } from '../../data';
import { getAllVideos } from '../../Utils/functions';
import { SET_FILTERED_VIDEOS, SET_FILTERED_VIDEOS_NAMES } from '../actionTypes';

const allVideos = getAllVideos(channelData);

const initialState = {
  allVideos,
  filteredVideos: [],
  filteredVideoNames: [],
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERED_VIDEOS: {
      return {};
    }
    case SET_FILTERED_VIDEOS_NAMES: {
      return { ...state, filteredVideoNames: action.payload };
    }
    default:
      return state;
  }
};

export default videosReducer;
