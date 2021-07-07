import axios from "../helpers/axios";
import { contactConstants } from "../constant";

export const createContact = (body) => {
  return async (dispatch) => {
    dispatch({ type: contactConstants.ADD_CONTACT_REQUEST });
    try {
      const res = await axios.post("/admin/contact", body);
      const { data, message } = res.data;
      if (res.status === 200) {
        dispatch({
          type: contactConstants.ADD_CONTACT_SUCCESS,
          payload: { data, message },
        });
      }
    } catch (error) {
      if (error.response) {
        const { data, message } = error.response.data;
        dispatch({
          type: contactConstants.ADD_CONTACT_FAILURE,
          payload: data.errors,
        });
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const getAllContact = () => {
  return async (dispatch) => {
    dispatch({ type: contactConstants.GET_CONTACT_REQUEST });
    const res = await axios.get("/admin/contact");

    if (res.status === 200) {
      dispatch({
        type: contactConstants.GET_CONTACT_SUCCESS,
        payload: res.data.data,
      });
    } else {
      dispatch({
        type: contactConstants.GET_CONTACT_FAILURE,
        payload: res.data.message,
      });
    }
  };
};
