/* eslint-disable no-undef */
import { partnershipConstants } from "../constant";

const initState = {
  isLoading: false,
  partnership: [],
  allPartnership: [],
  message: null,
};

export const partnershipReducers = (state = initState, action) => {
  switch (action.type) {
    case partnershipConstants.ADD_PARTNERSHIP_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case partnershipConstants.ADD_PARTNERSHIP_SUCCESS:
      state = {
        ...state,
        partnership: action.payload,
      };
      break;

    case partnershipConstants.ADD_PARTNERSHIP_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;
    case partnershipConstants.GET_PARTNERSHIP_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case partnershipConstants.GET_PARTNERSHIP_SUCCESS:
      state = {
        ...state,
        allPartnership: action.payload,
      };
      break;
    case partnershipConstants.GET_PARTNERSHIP_FAILURE:
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
