const URL = "https://api.randomuser.me/?nat=US&results=1";
const httpBinURL = "https://httpbin.org/post";

//
// FetchAPI
//

fetch(URL, {
  //we can provide custom request headers
  headers: {
    "User-Agent": "My User Agent",
  },
})
  .then((res) => {
    //we can print the response headers because they are already available.
    //note that headers from running with Node will be different from the headers when running from a browser.
    for (const pair of res.headers) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    //here we still have a promise...we haven't received the call result
    //So we need to pass is to another then() call.
    let json = res.json();
    console.log(json);

    return json;
  }) //after the first 'then' has completed we get the call result and process it.
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);

//
// async - await
//

const getFakePerson = async () => {
  try {
    let res = await fetch(URL);
    //
    // fetch returns a promise. res.json() also is a promise.
    // So when we call the json() function we also have to use await in order to get the resulting json.
    //
    let { results } = await res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
getFakePerson();

//
// POST request
//
const data = {
  x: 1920,
  y: 1080,
};
const customHeaders = {
  "Content-Type": "application/json",
};

fetch(httpBinURL, {
  method: "POST",
  headers: customHeaders,
  body: JSON.stringify(data), //you have to convert the object to string
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//
// AXIOS
// $> nmp install axios
//
const axios = require("axios");

axios
  .get(URL)
  .then(({ data }) => {
    console.log(data);
  })
  .catch(console.error);

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

//
// Promises
//
const getPeople = (count) =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    // XMLHttpRequest is a built-in object in web browsers. So this will not run in NodeJS.
    // Use Axios or FetchAPI instead.
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200 ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });
getPeople(5).then(console.log).catch(console.error);
