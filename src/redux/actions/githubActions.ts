import { GithubTypes } from '../constants/GithubTypes';
import { GithubUsersJSONTypes } from '../constants/githubUsersJSONTypes';

interface SearchUsersAction {
  type: GithubTypes.SEARCH_USERS;
}

interface SearchUsersSuccessAction {
  type: GithubTypes.SEARCH_USERS_SUCCESS;
  payload: GithubUsersJSONTypes;
}

interface SearchUsersErrorAction {
  type: GithubTypes.SEARCH_USERS_ERROR;
  payload: string;
}

interface ClearUsersAction {
  type: GithubTypes.CLEAR_USERS;
}

export type GithubAction =
  | SearchUsersAction
  | SearchUsersSuccessAction
  | SearchUsersErrorAction
  | ClearUsersAction;
