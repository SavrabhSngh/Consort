import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { currentUserDetailsReducer } from "./CurrentUser/reducer";
import { connectedUserDetailsReducer } from "./ConnectedUsers/reducer";
import { editorReducer } from "./Editor/reducer";

const rootReducer = combineReducers({
  currentUser: currentUserDetailsReducer,
  connectedUsers: connectedUserDetailsReducer,
  editorData: editorReducer,
});

export function configureStore() {
  const middlewares = [thunkMiddleware];

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
