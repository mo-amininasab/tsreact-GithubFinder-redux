import { combineReducers } from 'redux';
import githubReducer from './githubReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  githubReducer: githubReducer,
  userReducer: userReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
