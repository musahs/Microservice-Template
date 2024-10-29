const axios = require("axios");
const BASE_URL = process.env.USER_MICROSERVICE_URL;
const { responseUtils } = require("../utils");

const authMiddleware = {
  verifyToken: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/verifyToken`, {
        headers: {
          // Authorization header if needed
        },
        withCredentials: true, // if we are using cookie-based sessions
      });

      return responseUtils.handleResponse(response);
    } catch (error) {
      console.log(error);
      return responseUtils.handleResponse(error.response);
    }
  },

  verifyFarmer: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/verifyFarmer`, {
        headers: {
          // Authorization header if needed
        },
        withCredentials: true, // if we are using cookie-based sessions
      });

      return responseUtils.handleResponse(response);
    } catch (error) {
      console.log(error);
      return responseUtils.handleResponse(error.response);
    }
  },

  // Add more middleware functions as needed
};

module.exports = authMiddleware;
