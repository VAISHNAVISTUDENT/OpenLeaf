
const axios = require("axios");
 
// Make request
axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    // Show response data
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));