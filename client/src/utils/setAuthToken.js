import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios.defaults.headers.common["Autherization"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Autherization"];
  }
};

export default setAuthToken;
