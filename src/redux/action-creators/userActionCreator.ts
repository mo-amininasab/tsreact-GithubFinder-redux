import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction } from '../actions/userAction';
import { UserTypes } from '../constants/userTypes';

export const getUser =
  (userName: string) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserTypes.GET_USER });

    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({ type: UserTypes.GET_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: UserTypes.GET_USER_ERROR, payload: error });
    }
  };
