import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-2d68f/us-central1/api", //local instance of firebase instance
  baseURL: "https://amazoneclone-backend-deploy.onrender.com", //deployed version of amazoneBackEnd on render.com

})
export {axiosInstance}