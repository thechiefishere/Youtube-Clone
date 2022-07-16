import { TOGGLE_SIDEBAR } from '../actionTypes';

const initialState = {
  sidebarState: -1,
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      const newState = state.sidebarState <= 0 ? 1 : 0;
      return { ...state, sidebarState: newState };
    }
    default:
      return state;
  }
};

export default navbarReducer;
