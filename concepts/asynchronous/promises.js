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
