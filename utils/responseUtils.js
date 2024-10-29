const responseUtils = {
  handleResponse: (response) => {
    try {
      if (response.ok) {
        return { data: response.data, message: response.data.message };
      } else {
        return { error: response.data.message };
      }
    } catch (error) {
      return { error: error };
    }
  },

  handleSuccess: (res, data, message) => {
    res.status(200).json({ data: data, message: message });
  },

  handleBadRequest: (res, message) => {
    res.status(400).json({ message: message });
  },

  handleUnauthorized: (res, message) => {
    res.status(401).json({ message: message });
  },

  handleForbidden: (res, message) => {
    res.status(403).json({ message: message });
  },
  
  handleNotFound: (res, message) => {
    res.status(404).json({ message: message });
  },

  handleFailure: (res, error) => {
    res.status(500).json({ message: "Internal Server Error" });
  },
};

module.exports = responseUtils;
