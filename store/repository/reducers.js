import * as types from './types';

const initialState = {
  popularRepos: [],
  loading: false,
  error: '',
  repoDetails: null,
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POPULAR_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_POPULAR_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        popularRepos: action.payload.popularRepos,
      };
    case types.LOAD_POPULAR_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case types.LOAD_REPO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_REPO_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        repoDetails: action.payload.repoDetails,
      };
    case types.LOAD_REPO_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return { ...state };
  }
}
