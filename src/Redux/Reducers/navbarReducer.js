import {
  SET_CLICKED_SEARCH_BOX,
  SET_SCREEN_WIDTH,
  SET_SEARCH_WORD,
  TOGGLE_SEARCH_BOX,
  TOGGLE_SIDEBAR,
} from '../actionTypes';

const initialState = {
  showSidebar: true,
  showOverlay: false,
  screenWidth: '',
  searchWord: '',
  clickedSearchBox: false,
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
    case SET_SEARCH_WORD: {
      return {
        ...state,
        searchWord: action.payload,
      };
    }
    case TOGGLE_SEARCH_BOX: {
      return { ...state, clickedSearchBox: action.payload };
    }
    default:
      return state;
  }
};

export default navbarReducer;
