import axios from "../helpers/axios";
import { projectConstants } from "../constant";

export const createProject = (body) => {
  return async (dispatch) => {
    dispatch({ type: projectConstants.ADD_PROJECT_REQUEST });
    const res = await axios.post("/admin/project", body);

    if (res.status === 200) {
      dispatch({
        type: projectConstants.ADD_PROJECT_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: projectConstants.ADD_PROJECT_FAILURE,
        payload: res.data.message,
      });
    }
  };
};

export const getAllProject = () => {
  return async (dispatch) => {
    dispatch({ type: projectConstants.GET_PROJECT_REQUEST });
    const res = await axios.get("/admin/project");

    if (res.status === 200) {
      dispatch({
        type: projectConstants.GET_PROJECT_SUCCESS,
        payload: res.data.data,
      });
    }

    if (res.status === 400) {
      dispatch({
        type: projectConstants.GET_PROJECT_FAILURE,
        payload: res.data.message,
      });
    }
  };
};
