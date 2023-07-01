import { SAVE_EDITOR_DATA, CLEAR_EDITOR_DATA } from "../ActionTypes";

const initialState = {
  data: "",
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EDITOR_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_EDITOR_DATA:
      return initialState;
    default:
      return state;
  }
};
