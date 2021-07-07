/* eslint-disable no-undef */
import { blogConstants } from "../constant";

const initState = {
  isLoading: false,
  blog: [],
  allBlog: [],
  message: null,
};

export const blogReducers = (state = initState, action) => {
  switch (action.type) {
    case blogConstants.ADD_BLOG_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case blogConstants.ADD_BLOG_SUCCESS:
      state = {
        ...state,
        blog: action.payload,
      };
      break;

    case blogConstants.ADD_BLOG_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;
    case blogConstants.GET_BLOG_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case blogConstants.GET_BLOG_SUCCESS:
      state = {
        ...state,
        allBlog: action.payload,
      };
      break;
    case blogConstants.GET_BLOG_FAILURE:
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
