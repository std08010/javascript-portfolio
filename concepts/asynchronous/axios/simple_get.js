/**
 * $> nmp install axios
 */

const axios = require("axios");

const URL = "https://api.randomuser.me/?nat=US&results=1";

axios
  .get(URL)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(console.error);
