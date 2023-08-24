const URL = "https://api.randomuser.me/?nat=US&results=1";

fetch(URL, {
  //we can provide custom request headers
  headers: {
    "User-Agent": "My User Agent",
  },
})
  .then((res) => {
    /**
     * we can print the response headers because they are already available.
     * note that headers from running with Node will be different from
     * the headers when running from a browser.
     */
    for (const pair of res.headers) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    /**
     * here we still have a promise...we haven't received the call result.
     * So when we print the value: Promise { <pending> }
     * will be printed.
     * So we need to pass the json (aka the promise) to another then() call.
     */
    let json = res.json();
    console.log(json);

    return json;
  })
  //after the first 'then' has completed we get the call result and process it.
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);
