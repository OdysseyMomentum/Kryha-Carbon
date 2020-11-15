import axios from 'axios'

export const createReport = async (report) => {
  try {
    const res = await axios.post("/reports/create", report);
    if (res) {
        return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /reports/create failed ${e}`);
    return false;
  }
};

export const getReports = async (email,dispatch) => {
  try {
    const res = await axios.post("/reports/all",{email: email});
      if (res) {
          console.log(res)
        dispatch({ type: "SET_REPORTS", payload: res.data.result });
        return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /reports/create failed ${e}`);
    return false;
  }
};