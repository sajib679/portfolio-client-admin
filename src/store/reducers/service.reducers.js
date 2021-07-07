/* eslint-disable no-undef */
import { serviceConstants } from "../constant";

const initState = {
  isLoading: false,
  service: [],
  allService: [],
  message: null,
};

export const serviceReducers = (state = initState, action) => {
  switch (action.type) {
    case serviceConstants.ADD_SERVICE_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case serviceConstants.ADD_SERVICE_SUCCESS:
      state = {
        ...state,
        service: action.payload,
      };
      break;

    case serviceConstants.ADD_SERVICE_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;
    case serviceConstants.GET_SERVICE_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case serviceConstants.GET_SERVICE_SUCCESS:
      state = {
        ...state,
        allService: action.payload,
      };
      break;
    case serviceConstants.GET_SERVICE_FAILURE:
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
