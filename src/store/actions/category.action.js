import axios from "../helpers/axios";
import { categoryConstants } from "../constant";

export const createCategory = (body) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });
    const res = await axios.post("/admin/category", body);

    if (res.status === 200) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: res.data.message,
      });
    }
  };
};

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_CATEGORY_REQUEST });
    const res = await axios.get("/admin/category");

    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_CATEGORY_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: categoryConstants.GET_CATEGORY_FAILURE,
        payload: res.data.message,
      });
    }
  };
};
