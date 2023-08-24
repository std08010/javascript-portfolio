const URL = "https://api.randomuser.me/?nat=US&results=1";

const getFakePerson = async () => {
  try {
    let res = await fetch(URL);

    /**
     * fetch returns a promise.
     * res.json() also is a promise.
     * So when we call the json() function we also have to use await
     * in order to get the resulting json.
     */
    let { results } = await res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getFakePerson();
