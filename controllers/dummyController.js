const { responseUtils } = require("../utils");
const { dummyService } = require("../services");

const dummyController = {
  dummyFunction: async (req, res) => {
    try {
      // get data from the database
      const response = await dummyService.getDummyData();
      if (response.error) {
        // Check if there was an error as we are setting the error key in the response object in handle response utility function
        return responseUtils.handleFailure(res, response.error);
      }
      console.log(response.data);

      // supposing we got an object from the database
      // manipulate the data as needed
      const dummyObject = response.data.dummyObject;
      dummyObject.dummyField = "dummyValue";

      // update in the database
      const response2 = await dummyService.putDummyData(dummyObject);
      if (response2.error) {
        return responseUtils.handleFailure(res, response2.error);
      }
      console.log(response2.data);

      return responseUtils.handleSuccess(
        res,
        { dummy1: dummyObject, dummy2: dummyArray, dummy3: dummyString },
        "Dummy function executed successfully"
      );
    } catch (error) {
      console.log(error);
      return responseUtils.handleFailure(res, error);
    }
  },
};

module.exports = dummyController;
