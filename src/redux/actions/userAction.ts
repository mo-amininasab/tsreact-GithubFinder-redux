import { UserJSONTypes, UserTypes } from '../constants/userTypes';

interface GetUser {
  type: UserTypes.GET_USER;
}

interface GetUserSuccess {
  type: UserTypes.GET_USER_SUCCESS;
  payload: UserJSONTypes;
}

interface GetUserError {
  type: UserTypes.GET_USER_ERROR;
  payload: string;
}

export type UserAction = GetUser | GetUserSuccess | GetUserError;
