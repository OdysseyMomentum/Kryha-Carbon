import axios from "axios";

export const getUserAccounts = async (dispatch) => {
  try {
    const res = await axios.get("/user/all");
    if (res) {
      dispatch({ type: "SET_AVAILABLE_USERS", payload: res.data.result });
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /user/all failed ${e}`);
    return false;
  }
};

export const login = async (user, dispatch) => {
  try {
    const res = await axios.post("/user/login", user);
    if (res) {
      dispatch({ type: "SET_USER", payload: res.data.result });
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /user/login failed ${e}`);
    return false;
  }
};
