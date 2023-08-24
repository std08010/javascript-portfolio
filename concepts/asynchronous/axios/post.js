const axios = require("axios");

const httpBinURL = "https://httpbin.org/post";

const data = {
  x: 1920,
  y: 1080,
};

const customHeaders = {
  "Content-Type": "application/json",
};

axios
  .post(httpBinURL, data, {
    headers: customHeaders,
  })
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
