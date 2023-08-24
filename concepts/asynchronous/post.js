const httpBinURL = "https://httpbin.org/post";

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
