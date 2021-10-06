import axios from 'axios';
import { Dispatch } from 'react';
import { GithubAction } from '../actions/githubActions';
import { GithubTypes } from '../constants/GithubTypes';
import { GithubUsersJSONTypes } from '../constants/githubUsersJSONTypes';

// https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}

export const searchUsers =
  (term: string) => async (dispatch: Dispatch<GithubAction>) => {
    dispatch({ type: GithubTypes.SEARCH_USERS });

    try {
      const { data }: { data: GithubUsersJSONTypes[] } = await axios.get(
        `http://api.github.com/users`
      );

      dispatch({ type: GithubTypes.SEARCH_USERS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: GithubTypes.SEARCH_USERS_ERROR, payload: error });
    }
  };
