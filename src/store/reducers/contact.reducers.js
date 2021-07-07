/* eslint-disable no-undef */
import { contactConstants } from "../constant";

const initState = {
  isLoading: false,
  contact: [],
  allContact: [],
  message: null,
};

export const contactReducers = (state = initState, action) => {
  switch (action.type) {
    case contactConstants.ADD_CONTACT_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case contactConstants.ADD_CONTACT_SUCCESS:
      state = {
        ...state,
        contact: action.payload.data,
        message: action.payload.message,
      };
      break;

    case contactConstants.ADD_CONTACT_FAILURE:
      state = {
        ...state,
        message: action.payload,
      };
      break;
    case contactConstants.GET_CONTACT_REQUEST:
      state = { ...state, isLoading: true };
      break;

    case contactConstants.GET_CONTACT_SUCCESS:
      state = {
        ...state,
        allContact: action.payload,
      };
      break;
    case contactConstants.GET_CONTACT_FAILURE:
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
