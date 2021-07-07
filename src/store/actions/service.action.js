import axios from "../helpers/axios";
import { serviceConstants } from "../constant";

export const createService = (body) => {
  return async (dispatch) => {
    dispatch({ type: serviceConstants.ADD_SERVICE_REQUEST });
    const res = await axios.post("/admin/service", body);

    if (res.status === 200) {
      dispatch({
        type: serviceConstants.ADD_SERVICE_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: serviceConstants.ADD_SERVICE_FAILURE,
        payload: res.data.message,
      });
    }
  };
};

export const getAllService = () => {
  return async (dispatch) => {
    dispatch({ type: serviceConstants.GET_SERVICE_REQUEST });
    const res = await axios.get("/admin/service");

    if (res.status === 200) {
      dispatch({
        type: serviceConstants.GET_SERVICE_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: serviceConstants.GET_SERVICE_FAILURE,
        payload: res.data.message,
      });
    }
  };
};
