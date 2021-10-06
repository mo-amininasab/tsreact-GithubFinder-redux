
import { combineReducers } from 'redux';
import githubReducer from './githubReducer';

const reducer = combineReducers({
  githubReducer: githubReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;