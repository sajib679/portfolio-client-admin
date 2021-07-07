/* eslint-disable no-undef */
import { projectConstants } from "../constant";

const initState = {
  isLoading: false,
  project: [],
  allProject: [],
  message: null,
};

export const projectReducers = (state = initState, action) => {
  switch (action.type) {
    case projectConstants.ADD_PROJECT_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case projectConstants.ADD_PROJECT_SUCCESS:
      state = {
        ...state,
        project: action.payload,
      };
      break;

    case projectConstants.ADD_PROJECT_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;
    case projectConstants.GET_PROJECT_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case projectConstants.GET_PROJECT_SUCCESS:
      state = {
        ...state,
        allProject: action.payload,
      };
      break;
    case projectConstants.GET_PROJECT_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
};
