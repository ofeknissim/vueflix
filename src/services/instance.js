import axios from "axios";

const API_KEY = "04180240cb03c5637ab753d363c07d7b";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default instance;
