import { TOGGLE_SIDEBAR } from '../actionTypes';

const initialState = {
  showSidebar: false,
};

export const navbarReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TOGGLE_SIDEBAR: {
      return { ...state, showSidebar: !state.showSidebar };
    }
    default:
      return state;
  }
};

export default navbarReducer;
