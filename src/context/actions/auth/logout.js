import { LOGOUT_USER } from "../../../constants/actionTypes";

const logout =(history) => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });
  history.push("/auth/login");
};

export default logout;