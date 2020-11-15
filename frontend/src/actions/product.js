import axios from 'axios'

export const createProduct = async (product, email) => {
  try {
    const res = await axios.post("/products/create", { product, email });
    if (res) {
        return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /products/create failed ${e}`);
    return false;
  }
};

export const getProducts = async (dispatch) => {
  try {
    const res = await axios.get("/products/all");
      if (res) {
        console.log(res)
        dispatch({ type: "SET_PRODUCTS", payload: res.data.result });
        return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /products/create failed ${e}`);
    return false;
  }
};