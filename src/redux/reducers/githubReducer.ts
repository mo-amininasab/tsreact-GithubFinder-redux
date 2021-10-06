import { GithubTypes } from '../constants/GithubTypes';
import { GithubAction } from '../actions/githubActions';
import { GithubUsersJSONTypes } from '../constants/githubUsersJSONTypes';

interface GithubState {
  loading: boolean;
  error: string | null;
  data: GithubUsersJSONTypes;
}

const initialState: GithubState = {
  loading: false,
  error: null,
  data: {
    incomplete_results: false,
    total_count: 0,
    items: [],
  },
};
const githubReducer = (
  state = initialState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case GithubTypes.SEARCH_USERS:
      return { ...state, loading: true, error: null };

    case GithubTypes.SEARCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case GithubTypes.SEARCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default githubReducer;
