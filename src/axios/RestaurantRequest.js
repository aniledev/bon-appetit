// use this file to set up axios to handle our requests to the server
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/restaurant",
});
