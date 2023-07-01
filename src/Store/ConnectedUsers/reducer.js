import {
  SAVE_CONNECTED_USER_DATA,
  CLEAR_CONNECTED_USER_DATA,
} from "../ActionTypes";

const initialState = [];

export const connectedUserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONNECTED_USER_DATA:
      return [...action.payload];
    case CLEAR_CONNECTED_USER_DATA:
      return initialState;
    default:
      return state;
  }
};
