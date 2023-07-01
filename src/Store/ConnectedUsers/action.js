import {
  SAVE_CONNECTED_USER_DATA,
  CLEAR_CONNECTED_USER_DATA,
} from "../ActionTypes";

export const saveConnectedUserData = (payload) => {
  return {
    type: SAVE_CONNECTED_USER_DATA,
    payload: payload,
  };
};

export const clearConnectedUserData = () => {
  return {
    type: CLEAR_CONNECTED_USER_DATA,
  };
};
