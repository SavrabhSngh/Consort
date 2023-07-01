import {
  SAVE_CURRENT_USER_DATA,
  CLEAR_CURRENT_USER_DATA,
} from "../ActionTypes";

export const saveCurrentUserDetails = (userDetails) => {
  return {
    type: SAVE_CURRENT_USER_DATA,
    payload: userDetails,
  };
};

export const clearCurrentUserDetails = () => {
  return {
    type: CLEAR_CURRENT_USER_DATA,
  };
};
