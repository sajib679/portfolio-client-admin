/* eslint-disable no-undef */
import { categoryConstants } from "../constant";

const initState = {
  isLoading: false,
  categories: [],
  allCategory: [],
  message: null,
};

export const categoryReducers = (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.ADD_CATEGORY_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case categoryConstants.ADD_CATEGORY_SUCCESS:
      state = {
        ...state,
        categories: action.payload,
      };
      break;

    case categoryConstants.ADD_CATEGORY_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;
    case categoryConstants.GET_CATEGORY_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case categoryConstants.GET_CATEGORY_SUCCESS:
      state = {
        ...state,
        allCategory: action.payload,
      };
      break;
    case categoryConstants.GET_CATEGORY_FAILURE:
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
