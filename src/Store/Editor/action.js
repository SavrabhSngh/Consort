import { SAVE_EDITOR_DATA, CLEAR_EDITOR_DATA } from "../ActionTypes";

export const saveEditorData = (data) => {
  return {
    type: SAVE_EDITOR_DATA,
    payload: data,
  };
};

export const clearEditorData = () => {
  return {
    type: CLEAR_EDITOR_DATA,
  };
};
