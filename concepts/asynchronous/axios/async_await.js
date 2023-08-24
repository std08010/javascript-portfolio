const axios = require("axios");

const URL = "https://api.randomuser.me/?nat=US&results=1";

const getWithAxios = async () => {
  try {
    const res = await axios.get(URL);
    //axios result object is not a promise and we can access the response body with the data object.
    let { results } = res.data;
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
getWithAxios();
