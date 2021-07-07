import axios from "../helpers/axios";
import { partnershipConstants } from "../constant";

export const createPartnership = (body) => {
  return async (dispatch) => {
    dispatch({ type: partnershipConstants.ADD_PARTNERSHIP_REQUEST });
    const res = await axios.post("/admin/partnership", body);

    if (res.status === 200) {
      dispatch({
        type: partnershipConstants.ADD_PARTNERSHIP_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: partnershipConstants.ADD_PARTNERSHIP_FAILURE,
        payload: res.data.message,
      });
    }
  };
};

export const getAllPartnership = () => {
  return async (dispatch) => {
    dispatch({ type: partnershipConstants.GET_PARTNERSHIP_REQUEST });
    const res = await axios.get("/admin/partnership");

    if (res.status === 200) {
      dispatch({
        type: partnershipConstants.GET_PARTNERSHIP_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: partnershipConstants.GET_PARTNERSHIP_FAILURE,
        payload: res.data.message,
      });
    }
  };
};
