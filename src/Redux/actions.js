import { SET_SCREEN_WIDTH, TOGGLE_SIDEBAR } from './actionTypes';

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
