const axios = require("axios");
const BASE_URL = process.env.DB_MICROSERVICE_URL;
const { responseUtils } = require("../utils");

// Service will include the CRUD operations for the Models
const dummyService = {
  getDummyData: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/dummy`, {
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

  getDummyDataById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/dummy/${id}`, {
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

  postDummyData: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/dummy`, data, {
        headers: {
          // Authorization header if needed
          "Content-Type": "application/json",
        },
        withCredentials: true, // if we are using cookie-based sessions
      });

      return responseUtils.handleResponse(response);
    } catch (error) {
      console.log(error);
      return responseUtils.handleResponse(error.response);
    }
  },

  putDummyData: async (data) => {
    try {
      const response = await axios.put(`${BASE_URL}/dummy`, data, {
        headers: {
          // Authorization header if needed
          "Content-Type": "application/json",
        },
        withCredentials: true, // if we are using cookie-based sessions
      });

      return responseUtils.handleResponse(response);
    } catch (error) {
      console.log(error);
      return responseUtils.handleResponse(error.response);
    }
  },

  deleteDummyData: async (data) => {
    try {
      const response = await axios.delete(`${BASE_URL}/dummy`, {
        headers: {
          // Authorization header if needed
          "Content-Type": "application/json",
        },
        withCredentials: true, // if we are using cookie-based sessions
        data: data,
      });

      return responseUtils.handleResponse(response);
    } catch (error) {
      console.log(error);
      return responseUtils.handleResponse(error.response);
    }
  },
};

module.exports = dummyService;
