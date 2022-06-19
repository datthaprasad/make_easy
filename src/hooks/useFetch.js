import { useEffect } from "react";
import { useState } from "react";

const useFetch = (method, url, body, setFunction, key) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const axios = require("axios");
        const qs = require("qs");
        const data = qs.stringify(body);
        const config = {
          method: method,
          url: "http://localhost:8000/api" + url,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data,
        };
        const resp = await axios(config);
        console.log({ resp });
        const response = resp?.data;
        if (setFunction) {
          setFunction(response[key]);
        }

        setApiData(response);
        setIsLoading(false);
      } catch (error) {
        console.log("useFetch error===>", error);
        setServerError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, key, setFunction]);

  return { isLoading, apiData, serverError };
};

export default useFetch;
