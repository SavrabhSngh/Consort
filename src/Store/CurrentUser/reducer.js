import {
  SAVE_CURRENT_USER_DATA,
  CLEAR_CURRENT_USER_DATA,
} from "../ActionTypes";

const initialState = {
  username: "",
  roomID: "",
};

export const currentUserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_CURRENT_USER_DATA:
      return initialState;
    default:
      return state;
  }
};
