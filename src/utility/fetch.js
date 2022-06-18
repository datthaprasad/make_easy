const fetchApi = async (url, body) => {
  try {
    const axios = require("axios");
    const qs = require("qs");
    const data = qs.stringify(body);
    const config = {
      method: "post",
      url: "http://localhost:8000/api" + url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    return (await axios(config)).data;
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export default fetchApi;
