import axios from "../helpers/axios";
import { blogConstants } from "../constant";

export const createBlog = (body) => {
  return async (dispatch) => {
    dispatch({ type: blogConstants.ADD_BLOG_REQUEST });
    const res = await axios.post("/admin/blog", body);

    if (res.status === 200) {
      dispatch({
        type: blogConstants.ADD_BLOG_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: blogConstants.ADD_BLOG_FAILURE,
        payload: res.data.message,
      });
    }
  };
};

export const getAllBlog = () => {
  return async (dispatch) => {
    dispatch({ type: blogConstants.GET_BLOG_REQUEST });
    const res = await axios.get("/admin/blog");

    if (res.status === 200) {
      dispatch({
        type: blogConstants.GET_BLOG_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: blogConstants.GET_BLOG_FAILURE,
        payload: res.data.message,
      });
    }
  };
};
