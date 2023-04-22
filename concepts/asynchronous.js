fetch("https://api.randomuser.me/?nat=US&results=1")
  .then((res) => {
    let json = res.json();
    console.log(json); //here we still have a promise...we haven't received the call result
    return json;
  }) //after the first then has completed we get the call result and process it.
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);
