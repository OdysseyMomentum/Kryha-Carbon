import axios from 'axios'

export const createProduct = async (product, email) => {
  try {
    const res = await axios.post("/product/register", { product, email });
    if (res) {
        return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /product/register failed ${e}`);
    return false;
  }
};

export const getProducts = async (email, dispatch) => {
  try {
    const res = await axios.post("/product/all", { email });
      if (res) {
        console.log(res)
        dispatch({ type: "SET_PRODUCTS", payload: res.data.result });
        return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(`GET /product/all failed ${e}`);
    return false;
  }
};