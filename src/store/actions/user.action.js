import axios from "../helpers/axios";
import { userConstants } from "../constant";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios.post("/admin/signup", { ...user });
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        const { error } = res.data;

        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error },
        });
      }
    }
  };
};
