import { SET_SCREEN_WIDTH, TOGGLE_SIDEBAR } from '../actionTypes';

const initialState = {
  showSidebar: true,
  showOverlay: false,
  screenWidth: '',
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      const { showSidebar, showOverlay, screenWidth } = state;
      const overlayMaxWidth = 1314;

      if (screenWidth >= overlayMaxWidth) {
        return { ...state, showSidebar: !showSidebar, showOverlay: false };
      }
      return { ...state, showOverlay: !showOverlay };
    }
    case SET_SCREEN_WIDTH: {
      const { screenWidth } = state;
      if (screenWidth >= 1314) {
        return {
          ...state,
          screenWidth: action.payload,
          showOverlay: false,
        };
      }
      return {
        ...state,
        screenWidth: action.payload,
      };
    }
    default:
      return state;
  }
};

export default navbarReducer;
