import { UserAction } from '../actions/userAction';
import { UserJSONTypes, UserTypes } from '../constants/userTypes';

interface UserState {
  loading: boolean;
  error: string | null;
  data: UserJSONTypes | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  data: null,
};

export default (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserTypes.GET_USER:
      return { ...state, loading: true, error: null };

    case UserTypes.GET_USER_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case UserTypes.GET_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
