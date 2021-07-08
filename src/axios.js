import axios from "axios";

// API (cloud function) URL
const instance = axios.create({
  baseURL: "http://localhost:5001/happy-body-2cedf/us-central1/api", // paste from firebox function
});

export default instance;
