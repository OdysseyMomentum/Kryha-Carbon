import axios from 'axios'

export const verify = async (partnerEmail, email, productName) => {
  try {
    const res = await axios.post("/product/update", { partnerEmail, email, productName });
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