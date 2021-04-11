// use this file to set up axios to handle our requests to the server
import axios from "axios";
import config from "../config";

export default axios.create({
  baseURL: config.API_ENDPOINT,
});
